<template>
    <van-switch v-model="checked" @change="switchLang">
        <template #node>
            <div class="icon-wrapper">
                {{ checked?"En":"中" }}
            </div>
        </template>
    </van-switch>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
let checked = ref(false)

import { useLocale } from "../../hooks/languageHook";
 
const {  currentLocale, changeLocale } =
  useLocale();
 
const switchLang = async () => {
  const nextLocale = currentLocale.value === "zh-CN" ? "en-US" : "zh-CN";
  await changeLocale(nextLocale);
};
</script>

<style lang="less" scoped>
    .icon-wrapper{
        font-size: .5em;
        height: 2em;
        line-height: 2em;
        text-align: center;
        font-weight: bolder;
    }
</style>