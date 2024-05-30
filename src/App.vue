<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <v-toolbar color="primary" dark fixed>
    <v-toolbar-title>毗斯迦山</v-toolbar-title>
    <v-spacer></v-spacer>
    <RouterLink to="/"><v-btn>首页</v-btn></RouterLink>
    <RouterLink to="/about"><v-btn>团契简介</v-btn></RouterLink>
    <RouterLink><v-btn>团契信息</v-btn></RouterLink>
    <RouterLink><v-btn>团契事工</v-btn></RouterLink>
    <RouterLink><v-btn>团契动态</v-btn></RouterLink>
    <!-- <RouterLink>团契简介</RouterLink>
    <RouterLink>团契信息</RouterLink>
    <RouterLink>团契事工</RouterLink>
    <RouterLink>团契动态</RouterLink> -->
    <v-spacer></v-spacer>
  </v-toolbar>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
a {
  color: #fff;
  text-decoration: none;
}
</style>
