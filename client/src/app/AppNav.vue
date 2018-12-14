<template>
  <nav>
    <v-toolbar app dark color="green lighten-1">
      <v-toolbar-side-icon @click.stop="showDrawer = !showDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>Robyn's Project</v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer app dark v-model="showDrawer" class="green darken-3">
      <v-list>
        <v-list-tile v-for="link in routerLinks" :key="link.text" router :to="link.route">
          <v-list-tile-action >{{ link.text}}</v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      showDrawer: false,
      routerLinks: [
        { route: "/", text: "HOME"},
        { route: "/stepper", text: "STEPPER"},
        { route: "/history", text: "HISTORY"},
        { route: "/about", text: "ABOUT"},
        { route: "/admin", text: "ADMIN"}
      ]
    }
  }
}
</script>


<style scoped>

</style>


