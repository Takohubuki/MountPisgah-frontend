<template>
  <div class="section" id="section1">
    <div class="container section-content">
      <h1>第一屏</h1>
      <p>这是一段示例文本</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, onMounted } from 'vue';

const _this = getCurrentInstance().proxy;

const props = defineProps({});

const emits = defineEmits();
</script>

<style scoped lang="scss"></style>
