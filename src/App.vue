<script setup lang="ts">
// import MainContainer from './components/MainContainer.vue';
import language from './components/layout/language.vue';
</script>

<template>
  <language />
  <router-view></router-view>
</template>

<style scoped lang="less">
.languages {
  position: fixed;
  top: 1vh;
  right: 4vw;
  z-index: 999;
}
</style>
