<template>
  <Nav />
  <v-container class="course_detail">
    <v-card>
      <v-card-title>
        <span class="text-h2">{{ article.title }}</span>
      </v-card-title>
      <v-card-text>
        <div v-if="loading">加载中...</div>
        <div v-else>
          <div v-html="article.content"></div>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
  <footer />
</template>

<script>
import Nav from '../../components/Nav.vue';
import Footer from '../../components/Footer.vue';

import axios from 'axios';

export default {
    name: 'CourseDetail',
    components: {
        Nav,
        Footer
    },
    data() {
        return {
            loading: true,
            article: {},
            // seriesList: ['all', '造就', '福音', '查经', '试讲'],
        }
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    mounted() {
        console.log(this.id);
        this.getCourseDetail(this.id);
    },
    methods: {
        getCourseDetail(id) {
            this.loading = true;
            axios.post('/api/course/detail_id', { id }).then(res => {
                const article = res.data;
                this.article = article;
                this.loading = false;
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                this.loading = false;
            });
        }
    }
}
</script>

<style scoped>
.course_detail {
    margin-top: 64px;
}
</style>