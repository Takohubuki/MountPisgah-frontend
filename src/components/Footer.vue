<template>
    <v-footer class="footer">
      <v-col class="text-center">
        <span>@ {{ new Date().getFullYear() }}-<strong>xiashafellowship.com</strong></span>
      </v-col>
    </v-footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
.footer {
  background-color: #3f51b5;
  color: #fff;
  z-index: 10;
}

</style>