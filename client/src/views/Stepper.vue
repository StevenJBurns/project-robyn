<template>
  <v-stepper v-model="currentStep" vertical>
    <v-stepper-step step="1">Hi! How Are You Feeling Today?</v-stepper-step>
    <v-stepper-content step="1">
      <v-list>
        <v-list-tile v-for="(mood, index) in moods" :key="index">
          <v-btn :dark="mood.color !== 'yellow'" :class="mood.color" @click="setMood(mood)">{{ mood.mood }}</v-btn>
        </v-list-tile>
      </v-list>
    </v-stepper-content>

    <v-stepper-step step="2">Recommended Actions</v-stepper-step>
    <v-stepper-content step="2">
      <v-list>
        <v-list-tile v-for="(skill, index) in currentSkills" :key="index">
          <v-btn :dark="currentColor !== 'yellow'" :class="currentColor" @click="setSkill(skill)">{{ skill }}</v-btn>
        </v-list-tile>
      </v-list>
      <v-btn @click="currentStep = 3" color="green">Continue</v-btn>
      <v-btn @click="currentStep = 1" flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="3">How do you feel now?</v-stepper-step>
    <v-stepper-content step="3">
      <v-btn color="green">Continue</v-btn>
      <v-btn @click="currentStep = 2" flat>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
  import moods from "@/data/moods.json";
  import skills from "@/data/skills.json";
  import results from "@/data/results.json";

  /* Combine the different moods from different colors into an ES6 Set object */
  /* This creates an array-like Set object containing only distinct values */
  /* This Set is then spread into an array in the component data for use in buttons */
  let setMoods = new Set();

  for (let mood of moods) {
    for (let feeling of mood.feelings) {
      setMoods.add({ mood: feeling, color: mood["color"], skills: mood["skills"]});
    }
  }

  export default {
    data() {
      return {
        moods: [...setMoods],
        skills,
        results,
        currentMood: null,
        currentColor: null,
        currentSkills: null,
        selectedSkill: null,
        currentStep: 1
      }
    },
    methods: {
      setMood: function(mood) {
        console.log("mood: ", mood);
        this.currentMood = mood.mood;
        this.currentColor = mood.color;
        this.currentSkills = mood.skills;

        console.log(this.currentSkills);
        
        this.currentStep = 2;
      },
      setSkill: function (skill) {
        // this.currentSkills = skill
        this.currentStep = 3;
      }
    }
  }
</script>

<style scoped>
  button {
    width: 160px
  }
</style>
