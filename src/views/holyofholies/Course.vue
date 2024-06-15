<template>
  <v-data-table-server show-select v-model:items-per-page="itemsPerPage" :headers="headers" :items="serverItems"
    :items-length="totalItems" :loading="loading" :search="search" :selected="selected" item-value="title"
    @update:options="loadItems">

    <template v-slot:top>
      <v-toolbar >
        <v-text-field v-model="title" class="ma-2" density="compact" placeholder="搜索标题" hide-details></v-text-field>
        <v-text-field v-model="series" class="ma-2" density="compact" placeholder="搜索系列" hide-details></v-text-field>
        <v-spacer></v-spacer>
        <RouterLink to="/holyofholies/publish_course"><v-btn class="ma-2" color="primary" variant="tonal" @click="publish_course">发布</v-btn></RouterLink>
        <!-- <RouterLink><v-btn class="ma-2" color="info" variant="tonal" @click="edit_course">修改</v-btn></RouterLink> -->
        <v-btn class="ma-2" color="error" variant="tonal" @click="delete_course">删除</v-btn>
      </v-toolbar>
    </template>
  </v-data-table-server>
</template>

<script>
const desserts = [];

import axios from 'axios';

const API_URL = '/api/course/list';

export default {
  data: () => ({
    itemsPerPage: 10,
    headers: [
      {
        title: '标题',
        align: 'start',
        sortable: false,
        key: 'title',
      },
      { title: '系列', key: 'series', align: 'end' },
      { title: '发布时间', key: 'publish_date', align: 'end' },
    ],
    selected: [],
    serverItems: [],
    loading: true,
    totalItems: 0,
    title: '',
    series: '',
    search: '',
  }),
  watch: {
    name() {
      this.search = String(Date.now())
    },
    calories() {
      this.search = String(Date.now())
    },
  },
  methods: {
    loadItems(filter = { page, itemsPerPage, sortBy }) {
      this.loading = true
      axios.post(API_URL, {
        page: filter.page,
        itemsPerPage: filter.itemsPerPage,
        sortBy: filter.sortBy,
        search: { name: this.name, calories: this.calories }
      }).then((res) => {
        this.serverItems = res.data.courses
        this.totalItems = res.data.len
        this.loading = false
      });
    },
  },
}
</script>

<style scoped>
  .Course {
    margin: 0 auto;
  }
</style>