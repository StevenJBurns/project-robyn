<template>
  <main id="app">
    <v-app>
      <app-nav />
      <v-content>
        <router-view/>
      </v-content>
    </v-app>
  </main>
</template>

<script>
  import AppNav from "@/app/AppNav";

  export default {
    name: "App",
    components: {
      "app-nav": AppNav
    }
  }

</script>

<style>
  #app {
    color: #2c3e50;
    text-align: center;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #nav {
    padding: 30px;
  }

  #nav a {
    color: #2c3e50;
    font-weight: bold;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
