<!--
 * @Author: Latte
 * @Date: 2021-10-07 12:56:11
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-09 00:59:29
 * @FilePath: \admin\src\views\HeroEdit.vue
-->
<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}英雄</h1>
    <el-form
      label-width="120px"
      ref="form"
      :model="model"
      @submit.native.prevent="save"
    >
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="称号">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="model.categories" multiple>
          <el-option
            v-for="item of categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="难度">
        <el-rate
          style="margin-top: 0.6rem"
          :max="9"
          show-score
          v-model="model.scores.difficult"
        ></el-rate>
      </el-form-item>
      <el-form-item label="技能">
        <el-rate
          style="margin-top: 0.6rem"
          :max="9"
          show-score
          v-model="model.scores.skills"
        ></el-rate>
      </el-form-item>
      <el-form-item label="攻击">
        <el-rate
          style="margin-top: 0.6rem"
          :max="9"
          show-score
          v-model="model.scores.attack"
        ></el-rate>
      </el-form-item>
      <el-form-item label="生存">
        <el-rate
          style="margin-top: 0.6rem"
          :max="9"
          show-score
          v-model="model.scores.survive"
        ></el-rate>
      </el-form-item>
      <el-form-item label="头像">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.avatar" :src="model.avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
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
      model: {
        scores: {
          difficult: 0,
          skills: 0,
          attack: 0,
          survive: 0,
        },
      },
      categories: [],
    };
  },
  methods: {
    afterUpload(res) {
      console.log(res);
      this.$set(this.model, "avatar", res.url);
      // this.model.icon = res.url
    },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/heroes/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/heroes", this.model);
      }

      this.$router.push("/heroes/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/heroes/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
    },
    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`);
      this.categories = res.data;
    },
  },
  created() {
    this.id && this.fetch();
    this.fetchCategories();
  },
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>