<template>
  <v-app>
    <v-layout>
      <NavDrawer />

      <v-main>
        <RouterView />
      </v-main>

    </v-layout>

  </v-app>
</template>

<script>
import { RouterView } from 'vue-router'
import NavDrawer from '../../components/NavDrawer.vue'

export default {
  name: 'QodeshHaQodashim',
  components: {
    NavDrawer
  }
}
</script>

<style>
/* main {
    margin: 0 auto;
} */
</style>