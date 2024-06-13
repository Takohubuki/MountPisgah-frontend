<template>
    <Navbar />
    <div class="course">
        <h1>团契讲章</h1>
        <p>团契讲章信息</p>
    </div>
    <Footer />
</template>

<script>
import Navbar from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
export default {
    name: 'Course',
    components: {
        Navbar,
        Footer
    },
}
</script>

<style scoped>
.course {
    padding: 20px;
    margin-top: 64px;
    height: 100vh;
}
</style>