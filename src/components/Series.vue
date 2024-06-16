<template>
    <v-btn v-for="(series, index) in seriesList" 
           :key="index" 
           class="ma-2" 
           color="primary" 
           variant="text"
           @click="filterCourse(series)">
        {{ series === 'all' ? "所有" : series }}
    </v-btn>
</template>

<script>
export default {
    name: 'Series',
    props: {
        seriesList: {
            type: Array,
            required: true
        },
        currentSeries: {
            type: String,
            required: true
        },
    },
    methods: {
        filterCourse(series) {
            this.$emit('filter-courses', series);
        }
    },
    emits: ['filter-courses']
}
</script>