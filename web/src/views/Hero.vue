<!--
 * @Author: Latte
 * @Date: 2021-11-01 23:05:13
 * @LAstEditors: Latte
 * @LastEditTime: 2021-11-01 23:27:21
 * @FilePath: \web\src\views\Hero.vue
-->
<template>
  <div class="page-hero">
    <div class="topbar bg-black py-2 px-4 d-flex ai-center">
      <img src="../assets/logo.png" height="30" />
      <div class="px-2 flex-1">
        <span class="text-white">王者荣耀</span>
        <span class="text-white ml-2">攻略站 </span>
      </div>
      <router-link to="/" tag="div" class="text-white"
        >更多英雄 &gt;</router-link
      >
    </div>
    <h1>{{ id }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true },
  },
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`heroes/${this.id}`);
      this.model = res.data;
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style>
</style>