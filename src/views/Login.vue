<template>
  <v-container class="d-flex justify-center fill-height container">
    <v-card class="pa-5" width="400">
      <v-card-title class="headline">登录</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="username" label="用户名" required></v-text-field>
          <v-text-field v-model="password" label="密码" type="password" required></v-text-field>
          <!-- <v-text-field v-model="username" :rules="[rules.required, rules.username]" label="用户名" required></v-text-field>
          <v-text-field v-model="password" :rules="[rules.required, rules.min]" label="密码" type="password"
            required></v-text-field> -->
          <v-btn :disabled="!valid" color="primary" class="mr-4" @click="login">
            登录
          </v-btn>
          <v-btn text @click="reset">重置</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      valid: false,
      rules: {
        required: value => !!value || '此字段为必填项',
        // min: v => v.length >= 6 || '密码必须至少6个字符',
        // email: v => /.+@.+\..+/.test(v) || '邮箱格式无效',
      },
    };
  },
  methods: {
    async login() {
      const username = this.username;
      const password = this.password;
      console.log(username);
      const res = await axios.post('/api/login', { username: username, password: password });
      if (res.data.code === 200) {
        this.$router.push('/');
      } else {
        this.$message.error(res.data.msg);
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>

.container {
  width: 100% !important;
  max-width: 100% !important;
  background-image: url(../assets/img/image2.jpg);
  background-size: cover;
  /* background-position2 center; */
}
</style>
