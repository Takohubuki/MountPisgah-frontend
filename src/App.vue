<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <v-toolbar color="primary" dark fixed>
    <v-toolbar-title>毗斯迦山</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn>首页</v-btn>
    <v-btn>团契简介</v-btn>
    <v-btn>团契信息</v-btn>
    <v-btn>团契事工</v-btn>
    <v-btn>团契动态</v-btn>
    <v-spacer></v-spacer>
  </v-toolbar>

  <div class="section" id="section1">
    <div class="container section-content">
      <v-carousel hide-delimiters>
        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
      </v-carousel>
    </div>
  </div>

  <div class="section" id="section2">
    <div class="container section-content">
      <h1>第二屏</h1>
      <p>这是二段示例文本</p>
    </div>
  </div>
</template>

<style scoped>
</style>
