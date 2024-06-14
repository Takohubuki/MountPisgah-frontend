<script>
import Navbar from '../../components/Nav.vue';
import Footer from '../../components/Footer.vue';
import Home from './Home.vue';

export default {
  components: {
    Navbar,
    Footer,
    Home
  },
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
  <v-app>
    <Navbar />

    <Home />

    <Footer />
  </v-app>
</template>

<style scoped>
main {
  margin-top: 64px;
}


</style>
