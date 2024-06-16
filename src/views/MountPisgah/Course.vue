<template>
    <Navbar />
    <v-container class="course">
        <Series :series-list="seriesList" :current-series="series" @filter-courses="getCourse" />
        <v-card variant="flat">
            <v-card-title>
                <span class="text-h4">{{ displaySeries }}</span>
            </v-card-title>
            <v-card-text>
                <v-list>
                    <v-list-item 
                        v-for="course in courses" 
                        :key="course._id"
                        @click="courseDetail(course._id)">
                        <!-- <RouterLink :to="{
                            name: 'courseDetail',
                            params: {
                                id: course._id,
                                // title: course.title,
                                // series: course.series
                            }
                        }"> -->
                            <v-btn variant="plain" color="primary">{{ course.title }}</v-btn>
                        <!-- </RouterLink> -->
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>

    </v-container>
    <Footer />
</template>

<script>
import Series from '../../components/Series.vue';
import Navbar from '../../components/Nav.vue';
import Footer from '../../components/Footer.vue';
import { RouterLink } from 'vue-router';

import axios from 'axios';

export default {
    name: 'Course',
    components: {
        Navbar,
        Footer,
        RouterLink,
        Series
    },
    data() {
        return {
            seriesList: ['all', '造就', '福音', '查经', '试讲'],
            series: '',
            courses: []
        }
    },
    created() {
        this.series = 'all';
        this.getCourse('all');
    },
    methods: {
        courseDetail(id) {
            console.log(id);
            this.$router.push({
                name: 'courseDetail',
                params: {
                    id: id
                }
            });
        },
        getCourse(series) {
            console.log(series);
            const filter = series === 'all' ? {} : { series: series };
            axios.post('/api/course/list', { filter }).then(res => {
                // console.log(filter)
                const { courses } = res.data;
                this.courses = courses;
                this.series = series;
            }).catch(err => {
                console.log(err);
            });
        },
    },
    computed: {
        displaySeries() {
            return this.series === 'all' ? '所有内容' : this.series;
        }
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