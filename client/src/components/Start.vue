<template>
  <div>
    <h3>How Are You Feeling?</h3>
    <ul>
      <li v-for="mood in moods" :key="mood['title']">{{mood['title']}}</li>
    </ul>
  </div>
</template>

<script>
  import moods from "../data/moods.json";

  // moods.forEach(mood => console.log(mood));

  export default {
    data: function() {
      return {
        colors: ["Blue", "Yellow", "Red"],
        moods,
        currentMood: null
      }
    },
    methods: {
      // setMood() {},
      // setResponse() {}
    }
  }
</script>

<style scoped></style>
