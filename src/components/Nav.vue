<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'Navbar', // Add a name property to the object and set it to 'Nav'
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
  },
  computed: {
    isManageRoute() {
      return this.$route.path.startsWith('/holyofholies');
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
</template>

<style scoped>
.toolbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  margin-bottom: 64px;
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

a {
  color: #fff;
  text-decoration: none;
}
</style>