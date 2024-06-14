<template>
  <Navbar />
  <div class="about">
    <div class="text-h1">下沙学生团契简介</div>
    <p>下沙学生团契简介内容</p>
  </div>
  <Footer />
</template>

<script>
import Navbar from '../../components/Nav.vue';
import Footer from '../../components/Footer.vue';

export default {
  name: 'About',
  components: {
    Navbar,
    Footer
  },
}
</script>

<style scoped>
.about {
  height: 100vh;
  padding: 10vw;
  background-image: url('../assets/img/image1.jpg');
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  margin-top: 64px;
}
</style>
