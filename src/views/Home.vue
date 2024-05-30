<template>
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

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  padding: 20px;
}
</style>
