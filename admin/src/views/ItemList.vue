<!--
 * @Author: Latte
 * @Date: 2021-10-07 15:11:49
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-08 22:58:02
 * @FilePath: \admin\src\views\ItemList.vue
-->
<template>
  <div>
    <h1>物品列表</h1>
    <el-table :data="items">
      <el-table-column label="ID" prop="_id" width="230px"></el-table-column>
      <el-table-column label="物品名称" prop="name"></el-table-column>
      <el-table-column label="物品图标" prop="icon">
        <template slot-scope="scope">
          <img :src="scope.row.icon" style="height: 3rem">
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/items/edit/${scope.row._id}`)"
            >编辑</el-button
          >
          <el-button type="text" size="small" @click="remove(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/items");
      this.items = res.data;
    },
    async remove(row) {
      this.$confirm(`此操作将永久删除物品 "${row.name}", 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        const res = await this.$http.delete(`rest/items/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!",
        });
        this.fetch();
      });
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style>
</style>