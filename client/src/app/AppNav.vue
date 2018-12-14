<template>
  <nav>
    <v-toolbar app dark color="green lighten-1">
      <v-toolbar-side-icon @click.stop="showDrawer = !showDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>Robyn's Project</v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer v-model="showDrawer" class="green darken-3">
      <v-toolbar flat>
        <v-list>
          <router-link to="/">HOME</router-link> |
          <router-link to="/start">START</router-link> |
          <router-link to="/about">ABOUT</router-link> |
          <router-link to="/admin">ADMIN</router-link>
        </v-list>
      </v-toolbar>
    </v-navigation-drawer>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      showDrawer: false
    }
  }
}
</script>


<style scoped>

</style>


