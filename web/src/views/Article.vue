<!--
 * @Author: Latte
 * @Date: 2021-10-31 19:49:58
 * @LAstEditors: Latte
 * @LastEditTime: 2021-11-01 23:01:20
 * @FilePath: \web\src\views\Article.vue
-->
<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <div class="iconfont icon-sangediandian text-blue"></div>
      <strong class="flex-1 text-blue pl-2">{{ model.title }}</strong>
      <div class="text-grey fs-xs">2019-06-19</div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg"></div>
    <div class="px-3 boder-top py-2">
      <div class="d-flex ai-center">
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
      <div>
        <router-link
          class="py-1"
          tag="div"
          :to="`/articles/${item._id}`"
          v-for="item in model.related"
          :key="item._id"
          >{{ item.title }}</router-link
        >
      </div>
    </div>
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
  watch: {
    // id 变化后触发this.fetch()
    id() {
      this.fetch();
    },
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`);
      console.log(res.data);
      this.model = res.data;
    },
  },
};
</script>

<style lang="scss">
.page-article {
  .icon-sangediandian {
    font-size: 1.6923rem;
  }
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      width: 100;
    }
  }
}
</style>
