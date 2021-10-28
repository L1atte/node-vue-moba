<!--
 * @Author: Latte
 * @Date: 2021-10-07 11:08:16
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-29 00:17:15
 * @FilePath: \web\src\views\Home.vue
-->
<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/0ba3d77e75b8a66647ba931b0d26284f.jpeg"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/c4d498bfe84ec732cd6ecc500e670111.jpeg"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/cb2dd275998dd0278d71885826790008.jpeg"
        />
      </swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right px-3 pb-2"
        slot="pagination"
      ></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->

    <m-list-card icon="cc-menu-circle" title="新闻资讯" :categories="newsCats">
      <template #items="{ category }">
        <div
          class="py-2 fs-lg d-flex"
          v-for="(news, index) in category.newsList"
          :key="index"
        >
          <span class="text-info">[{{ news.categoryName }}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{ news.title }}</span>
          <span class="text-grey-1">{{ news.createdAt | date }}</span>
        </div>
      </template>
    </m-list-card>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  filters: {
    date(val) {
      return dayjs(val).format('MM/DD')
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".pagination-home",
        },
      },
      newsCats: [],
    };
  },
  created() {
    this.fetchNewsList()
  },
  methods: {
    async fetchNewsList() {
      const res = await this.$http.get('news/list')
      this.newsCats = res.data
    }
  },
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    // 去掉每第四个元素的右边框
    &:nth-child(4n) {
      border-right: none;
    }
  }
}

// sprite
.sprite {
  background: url("../assets/images/index.png") no-repeat 0 0;
  background-size: 28.8462rem;
  display: inline-block;
  &.sprite-news {
    width: 1.7692rem;
    height: 1.5385rem;
    background-position: -17.2308rem -5.1538rem;
  }
  &.sprite-arrow {
    width: 0.7692rem;
    height: 0.7692rem;
    background-position: -10.8462rem -17.8462rem;
  }
}
</style>
