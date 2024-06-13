<template>
    <Navbar />
    <div class="news">
        <h1>团契动态</h1>
        <p>下沙学生团契动态内容</p>
    </div>
    <Footer />
</template>

<script>
import Navbar from '../components/Nav.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'News',
    components: {
        Navbar,
        Footer
    }
}
</script>

<style scoped>
.news {
    padding: 20px;
    margin-top: 64px;
    height: 100vh;
}
</style>