<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
  data() {
    return {
      isScrolled: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    }
  }
}

</script>

<template>
  <div class="toolbar">
    <v-toolbar :class="{ 'toolbar-small': isScrolled }" color="primary" dark>
      <v-toolbar-title :class="{ 'title-small': isScrolled }">毗斯迦山</v-toolbar-title>
      <v-spacer></v-spacer>
      <RouterLink to="/"><v-btn :class="{ 'btn-small': isScrolled }">首页</v-btn></RouterLink>
      <RouterLink to="/about"><v-btn :class="{ 'btn-small': isScrolled }">团契简介</v-btn></RouterLink>
      <RouterLink to="/course"><v-btn :class="{ 'btn-small': isScrolled }">团契信息</v-btn></RouterLink>
      <RouterLink to="/work"><v-btn :class="{ 'btn-small': isScrolled }">团契事工</v-btn></RouterLink>
      <RouterLink to="/news"><v-btn :class="{ 'btn-small': isScrolled }">团契动态</v-btn></RouterLink>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  margin-top: 64px;
}

a {
  color: #fff;
  text-decoration: none;
}

.toolbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}

.toolbar-small {
  transition: height 0.3s;
  height: 50px !important;
}

.title-small {
  font-size: 16px !important;
  transition: font-size 0.3s;
  margin-bottom: 10px;
}

.btn-small {
  font-size: 12px !important;
  height: 32px !important;
  min-width: 32px !important;
  /* padding: 0 8px !important; */
  margin-bottom: 10px;
  transition: all 0.3s;
}
</style>
