<template>
  <v-data-table-server 
    show-select 
    v-model:items-per-page="itemsPerPage" 
    :headers="headers" 
    :items="serverItems"
    :items-length="totalItems" 
    :loading="loading" 
    :search="search" 
    :selected="selected" 
    item-value="title"
    @update:options="loadItems">

    <template v-slot:top>
      <v-toolbar>
        <v-text-field v-model="title" class="ma-2" density="compact" placeholder="搜索标题" hide-details></v-text-field>
        <v-text-field v-model="series" class="ma-2" density="compact" placeholder="搜索系列" hide-details></v-text-field>
        <v-spacer></v-spacer>
        <RouterLink to="/holyofholies/publish_course"><v-btn class="ma-2" color="primary" variant="tonal">发布</v-btn>
        </RouterLink>
        <v-btn class="ma-2" color="error" variant="tonal" @click="delete_course">删除</v-btn>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">确定要删除吗</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">取消</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon class="me-2" size="small" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon size="small" @click="delete_course(item)">
        mdi-delete
      </v-icon>
    </template>

    <template v-slot:item.publish_date="{ item }">
      {{ formatDate(item.publish_date) }}
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
      { title: '操作', key: 'actions', align: 'center', sortable: false}
    ],
    selected: [],
    serverItems: [],
    loading: true,
    totalItems: 0,
    title: '',
    series: '',
    search: '',
    dialog: false,
    dialogDelete: false,
    editedIndex: -1,
  }),
  watch: {
    title() {
      this.search = String(Date.now())
    },
    series() {
      this.search = String(Date.now())
    },
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },
  methods: {
    loadItems(filter = { page, itemsPerPage, sortBy }) {
      this.loading = true
      axios.post(API_URL, {
        page: filter.page,
        itemsPerPage: filter.itemsPerPage,
        sortBy: filter.sortBy,
        filter: { title: this.title, series: this.series }
      }).then((res) => {
        this.serverItems = res.data.courses
        this.totalItems = res.data.len
        this.loading = false
      });
    },
    delete_course(item) {
      this.editedIndex = this.serverItems.indexOf(item);
      this.delete_filter = { title: item.title, series: item.series };
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.serverItems.splice(this.editedIndex, 1);
      axios.post('/api/course/delete', this.delete_filter).then((res) => {
        this.loadItems({});
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        this.closeDelete();
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.delete_filter = {};
        this.editedIndex = -1;
      });
    },
    editItem(item) {
      console.log(item);
    },
    formatDate(date) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(date).toLocaleDateString('zh-CN', options);
    }
  },
}
</script>

<style scoped>
  .Course {
    margin: 0 auto;
  }
</style>