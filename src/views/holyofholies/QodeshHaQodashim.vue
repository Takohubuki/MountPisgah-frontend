<template>
  <v-app>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail color="primary">
        <v-list>
          <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="毗斯迦山"></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <RouterLink to="/holyofholies/course">
            <v-list-item prepend-icon="mdi-folder" title="信息" value="信息"></v-list-item>
          </RouterLink>

          <RouterLink to="/holyofholies/news">
            <v-list-item prepend-icon="mdi-account-multiple" title="动态" value="动态"></v-list-item>
          </RouterLink>
        </v-list>

      </v-navigation-drawer>

      <v-main>
        <RouterView />
      </v-main>

    </v-layout>

  </v-app>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  name: 'QodeshHaQodashim',
}
</script>

<style>
/* main {
    margin: 0 auto;
} */
</style>