<template>
  <v-stepper v-model="currentStep" vertical>
    <v-stepper-step step="1">Hi! How Are You Feeling Today?</v-stepper-step>
    <v-stepper-content step="1">
      <v-list>
        <v-list-tile v-for="(mood, index) in moods" :key="index">
          <v-btn :dark="mood.color !== 'yellow'" :class="mood.color" @click="setMood(mood.mood)">{{ mood.mood }}</v-btn>
        </v-list-tile>
      </v-list>
      <!-- <v-btn color="green" dark>Continue</v-btn> -->
      <!-- <v-btn @click="currentStep -= 1" flat>Cancel</v-btn> -->
    </v-stepper-content>

    <v-stepper-step step="2">Recommended Actions</v-stepper-step>
    <v-stepper-content step="2">
      <v-btn @click="currentStep = 3" color="green">Continue</v-btn>
      <v-btn @click="currentStep = 1" flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="3">How do you feel now?</v-stepper-step>
    <v-stepper-content step="3">
      <v-btn  color="green">Continue</v-btn>
      <v-btn @click="currentStep = 2" flat>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
  import moods from "@/data/moods.json";
  import skills from "@/data/skills.json";

  let setMoods = new Set();

  for (let mood of moods) {
    for (let feeling of mood.feelings) {
      setMoods.add({ mood: feeling, color: mood["title"]});
    }
  }

  // console.log(setMoods.entries);

  export default {
    data() {
      return {
        moods: [...setMoods],
        currentMood: null,
        currentStep: 1
      }
    },
    methods: {
      setMood: function(mood) {
        console.log("current mood: ", this.currentStep);
        this.currentMood = mood;
        this.currentStep = 2;
        console.log("current mood: ", this.currentMood);
        console.log("current step: ", this.currentStep);
      }
    }
  }
</script>

<style scoped>
  button {
    width: 160px
  }
</style>
