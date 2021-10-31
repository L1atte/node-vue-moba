<!--
 * @Author: Latte
 * @Date: 2021-10-22 00:23:41
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-31 18:00:49
 * @FilePath: \web\src\components\ListCard.vue
-->
<template>
  <m-card :icon="icon" :title="title">
    <div class="nav jc-between">
      <div
        class="nav-item"
        v-for="(category, index) in categories"
        :key="index"
        :class="{ active: active === index }"
        @click="$refs.list.$swiper.slideTo(index)"
      >
        <div class="nav-link">{{ category.name }}</div>
      </div>
    </div>
    <div class="pt-3">
      <swiper
        ref="list"
        @slide-change="() => (active = $refs.list.$swiper.activeIndex)"
        :options="{ autoHeight: true }"
      >
        <swiper-slide v-for="(category, i) in categories" :key="i">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </m-card>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    categories: { type: Array, required: true },
  },
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
</style>