<!--
 * @Author: Latte
 * @Date: 2021-10-07 12:56:11
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-14 00:47:36
 * @FilePath: \admin\src\views\AdminUserEdit.vue
-->
<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}管理员</h1>
    <el-form
      label-width="120px"
      ref="form"
      :model="model"
      @submit.native.prevent="save"
    >
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" native-type="submit"
          >保存</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {},
  },
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/admin_users/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/admin_users", this.model);
      }

      this.$router.push("/admin_users/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/admin_users/${this.id}`);
      this.model = res.data;
    },
  },
  created() {
    this.id && this.fetch();
  },
};
</script>

<style>
</style>