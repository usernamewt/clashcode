<script setup lang="ts">
import { onMounted, ref, watch, nextTick } from "vue";
import Header from "./layout/Header.vue";
import { getStorage } from "../utils/storage";
import router from "../router";
// import BaseMenu from "./layout/BaseMenu.vue";
// 查询表单
// import BaseFormer from "./layout/BaseFormer.vue";
// 加速目标列表
import TargetList from "./component/TargetList.vue";
import BaseTable from "./layout/BaseTable.vue";
import { UnorderedListOutlined, ApiOutlined } from "@ant-design/icons-vue";
import { useLocale } from "../hooks/languageHook";
import { useTestStore } from "../store";
import { getEquipmentList } from "../api/user";
import { message } from "ant-design-vue";
const baseStore = useTestStore();
const { t } = useLocale();
const device_list = ref<any>([]);
const type = ref("equipmentlist");
const onCollapse = (collapsed: boolean, type: string) => {
  console.log(collapsed, type);
};

// 监听菜单通过其他方式切换
watch(
  () => baseStore.menuType,
  (newVal: string) => {
    type.value = newVal;
    if (newVal === "equipmentlist") {
      selectedKeys.value = ["1"];
    } else if (newVal === "acceryon") {
      selectedKeys.value = ["2"];
    }
  }
);

const onBreakpoint = (broken: boolean) => {
  console.log(broken);
};

// 查询表单
// const handelSearchVal = (formVal: any) => {
//   console.log(formVal);
// };

// const handelReset = () => {
//   console.log("reset");
// };

// 当前选中的menu
const selectedKeys = ref<string[]>(["1"]);

// 处理menu切换，如果没有选择设备，无法进入加速目标
const handelmenuswitch = (item: any) => {
  switch (item.key) {
    case "1":
      type.value = "equipmentlist";
      baseStore.menuType = "equipmentlist";
      break;
    case "2":
      if (!baseStore.deviceId) {
        nextTick(() => {
          selectedKeys.value = ["1"];
        });
        message.warning("请先选择设备");
        break;
      } else {
        type.value = "acceryon";
        baseStore.menuType = "acceryon";
        break;
      }
    default:
      router.push("/equipmentlist");
  }
};

// 进入首页判断是否有登陆信息
// TODO
onMounted(() => {
  const userInfo = getStorage("userInfo");
  if (!userInfo.username) {
    router.push("/login");
  } else {
    getList();
  }
});

// 获取设备列表
const getList = async () => {
  let res = await getEquipmentList("2");
  if (res.code === 0) {
    device_list.value = res.data;
  } else {
  }
};
</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo">SD-WAN</div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
        @click="handelmenuswitch"
      >
        <a-menu-item key="1">
          <UnorderedListOutlined />
          <span class="nav-text">{{ t("menu.equipmentlist") }}</span>
        </a-menu-item>
        <a-menu-item key="2">
          <ApiOutlined />
          <span class="nav-text">{{ t("menu.acceleration") }}</span>
        </a-menu-item>
        <!-- <a-menu-item key="3">
          <upload-outlined />
          <span class="nav-text">nav 3</span>
        </a-menu-item> -->
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <Header />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <!-- 设备列表 -->
        <div
          v-if="type === 'equipmentlist'"
          :style="{
            padding: '24px',
            background: '#fff',
            minHeight: '360px',
            overflowX: 'hidden',
          }"
        >
          <!-- 查询表单 -->
          <!-- <BaseFormer @search="handelSearchVal" @reset="handelReset" /> -->
          <BaseTable :tableData="device_list" />
        </div>
        <!-- 加速目标 -->
        <div
          v-else-if="type === 'acceryon'"
          :style="{
            padding: '24px',
            background: '#fff',
            minHeight: '360px',
            overflowX: 'hidden',
          }"
        >
          <TargetList v-if="!baseStore.isShowUrl" />
          <div v-else>
            <!-- TODO url展示编辑页 -->
          </div>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center"> </a-layout-footer>
    </a-layout>
  </a-layout>
  <a-back-top />
</template>

<style scoped lang="less">
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  text-align: center;
  line-height: 32px;
  color: #fff;
  margin: 16px;
  cursor: pointer;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout-sub-header-background {
  background: #141414;
}

.read-the-docs {
  color: #888;
}
.container-layout {
  // height: calc(100vh - 60px);
  width: 100%;
  .sections {
    padding: 2vh 2vw 0;
    box-sizing: border-box;
  }
}
.main-container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
}
</style>
