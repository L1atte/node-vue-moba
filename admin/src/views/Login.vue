<!--
 * @Author: Latte
 * @Date: 2021-10-14 23:07:15
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-15 01:02:18
 * @FilePath: \admin\src\views\Login.vue
-->
<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form :model="model" @submit.native.prevent="login">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async login() {
      const res = await this.$http.post('login',this.model)
      console.log(res);

      sessionStorage.token = res.data.token
      this.$router.push('/')
      this.$message({
        type: 'success',
        message: '登录成功'
      })
    }
  }
};
</script>

<style>
.login-card {
  width: 25rem;
  margin: 5rem auto;
}
</style>