<!--
 * @Author: Latte
 * @Date: 2021-11-01 23:05:13
 * @LAstEditors: Latte
 * @LastEditTime: 2021-11-04 23:12:13
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
    <div class="top" :style="{ 'background-image': `url(${model.banner})` }">
      <div class="info text-white p-3 h-100 d-flex flex-column jc-end">
        <div>{{ model.title }}</div>
        <div class="my-2">{{ model.name }}</div>
        <div>{{ model.categories.map((e) => e.name).join("/") }}</div>
        <div class="d-flex jc-between pt-2">
          <div class="scores d-flex ai-center" v-if="model.scores">
            <span>难度</span>
            <span class="badge bg-primary">{{ model.scores.difficult }}</span>
            <span>技能</span>
            <span class="badge bg-blue-1">{{ model.scores.skills }}</span>
            <span>攻击</span>
            <span class="badge bg-danger">{{ model.scores.attack }}</span>
            <span>生存</span>
            <span class="badge bg-dark">{{ model.scores.survive }}</span>
          </div>
          <router-link tag="span" class="text-grey" to="/"
            >皮肤：2 &gt;</router-link
          >
        </div>
      </div>
    </div>
    <!-- end of top -->
    <div>
      <div class="bg-white px-3">
        <div class="nav d-flex jc-around pt-3 pb-2 border-bottom">
          <div class="nav-item active">
            <div class="nav-link">英雄初始</div>
          </div>
          <div class="nav-item active">
            <div class="nav-link">进阶攻略</div>
          </div>
        </div>
      </div>
      <swiper>
        <swiper-slide>
          <div>
            <div class="p-3 bg-white border-bottom">
              <div class="d-flex">
                <router-link class="btn btn-lg flex-1" tag="button" to="/">
                  <i class="iconfont icon-meun1"></i>
                  英雄介绍视频
                </router-link>
                <router-link class="btn btn-lg flex-1 ml-2" tag="button" to="/">
                  <i class="iconfont icon-meun1"></i>
                  英雄介绍视频
                </router-link>
              </div>

              <!-- skills -->
              <div class="skills bg-white mt-4">
                <div class="d-flex jc-around">
                  <img
                    class="icon"
                    :class="{ active: currentSkillIndex === index }"
                    @click="currentSkillIndex = index"
                    v-for="(item, index) in model.skills"
                    :key="item.name"
                    :src="item.icon"
                  />
                </div>
                <div v-if="currentSkill">
                  <div class="d-flex ai-center py-4">
                    <h3 class="m-0">{{ currentSkill.name }}</h3>
                    <span class="text-grey-1 ml-4">
                      （冷却值： {{ currentSkill.delay }} 消耗：
                      {{ currentSkill.cost }}）
                    </span>
                  </div>
                  <p>{{ currentSkill.description }}</p>
                  <div class="border-bottom"></div>
                  <p class="text-grey-1">小提示：{{ currentSkill.tips }}</p>
                </div>
              </div>
            </div>

            <m-card plain icon="menu1" title="出装推荐" class="hero-items">
              <div class="fs-xl">顺风出装</div>
              <div class="d-flex jc-around text-center">
                <div v-for="item in model.items1" :key="item.name">
                  <img :src="item.icon" class="icon" />
                  <div class="fs-xs">{{ item.name }}</div>
                </div>
              </div>
            </m-card>

            <div class="border-bottom mt-3"></div>

            <m-card plain icon="menu1" title="出装推荐" class="hero-items">
              <div class="fs-xl">逆风出装</div>
              <div class="d-flex jc-around text-center">
                <div v-for="item in model.items2" :key="item.name">
                  <img :src="item.icon" class="icon" />
                  <div class="fs-xs">{{ item.name }}</div>
                </div>
              </div>
            </m-card>

            <m-card icon="menu1" title="使用技巧">
              <p class="m-0">{{ model.usageTips }}</p>
            </m-card>
            <m-card icon="menu1" title="对抗技巧">
              <p class="m-0">{{ model.battleTips }}</p>
            </m-card>
            <m-card icon="menu1" title="团战思路">
              <p class="m-0">{{ model.teamTips }}</p>
            </m-card>
            <m-card icon="menu1" title="英雄关系">
              <div class="fs-xl">最佳搭档</div>
              <div v-for="item in model.partners" :key="item.name">
                <div class="d-flex pt-3">
                  <img :src="item.hero.avatar" height="50" />
                  <p class="flex-1 m-0 ml-3">{{ item.description }}</p>
                </div>
                <div class="border-bottom mt-3"></div>
              </div>
            </m-card>
          </div>
        </swiper-slide>
        <swiper-slide></swiper-slide>
      </swiper>
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
      currentSkillIndex: 0,
    };
  },
  computed: {
    currentSkill() {
      return this.model.skills[this.currentSkillIndex];
    },
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`heroes/${this.id}`);
      this.model = res.data;
      console.log(this.model);
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
.page-hero {
  .top {
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: auto 100%;
  }
  .info {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    .scores {
      .badge {
        margin: 0 0.23rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.6rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }
  .skills {
    img.icon {
      border: 3px solid map-get($map: $colors, $key: "white");
      width: 5.3846rem;
      height: 5.3846rem;
      &.active {
        border-color: map-get($map: $colors, $key: "primary");
        border-radius: 50%;
      }
    }
  }
  .hero-items {
    img.icon {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }
}
</style>