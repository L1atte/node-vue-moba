<!--
 * @Author: Latte
 * @Date: 2021-10-18 22:44:06
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-20 23:51:39
 * @FilePath: \web\src\views\Main.vue
-->
<template>
  <div>
    <div class="topbar bg-black py-2 px-4 d-flex ai-center">
      <img src="../assets/logo.png" height="30" />
      <div class="px-2 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1 fs-xxs">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primary">立即下载</button>
    </div>

    <div class="bg-primary pt-3 pb-2">
      <div class="nav nav-inverse text-white pb-1 jc-around">
        <div class="nav-item active">
          <router-link class="nav-link" to="/">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="/">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="/">赛事中心</router-link>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>