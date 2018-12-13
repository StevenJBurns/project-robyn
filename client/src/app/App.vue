<template>
  <main id="app">
    <nav id="nav">
      <router-link to="/">HOME</router-link> |
      <router-link to="/start">START</router-link> |
      <router-link to="/about">ABOUT</router-link> |
      <router-link to="/admin">ADMIN</router-link>
    </nav>
    <router-view/>
  </main>
</template>

<script>
  export default {

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
