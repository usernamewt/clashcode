<template>
    <div class="header">
        <div class="title">{{ t("message.hello") }}</div>
    </div>
</template>

<script lang="ts" setup>

import { useLocale } from "../../hooks/languageHook";
 
const { t } = useLocale();
</script>


<style lang="less" scoped>
.header {
    width: 100%;
    height: 9vh;
    border-bottom: 1px solid #eee;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vh 2vw;
    flex-direction: row;
    flex-wrap: nowrap;
    .title {
        font-weight: 600;
        font-size: 20px;
    }
    :deep.van-switch__node {
        line-height: 1em;
        text-align:center;
    }
    .icon-wrapper{
        font-size: .5em;
        height: 2em;
        line-height: 2em;
        text-align: center;
        font-weight: bolder;
    }
}

</style>