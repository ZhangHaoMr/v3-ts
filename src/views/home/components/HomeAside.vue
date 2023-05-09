<template>
  <div class="aside">
    <div class="AsideHeader">
      <img src="@/assets/img/logo.svg" alt="" />
      <span v-show="!isShowIcon" class="title">V3+TS</span>
    </div>
    <el-menu
      background-color="#031527"
      class="el-menu-vertical-demo"
      :default-active="$route.path"
      text-color="#e6e8ea"
      unique-opened
      :collapse="isShowIcon"
      router
    >
      <template v-for="item in menus" :key="item.id">
        <el-menu-item
          v-if="item.children && item.children.length <= 0"
          :index="item.url"
        >
          {{ item.name }}
        </el-menu-item>
        <el-sub-menu v-else :index="item.url">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item
            v-for="items in item.children"
            :key="items.id"
            :index="items.url"
          >
            {{ items.name }}
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import { computed, defineProps } from "vue";
import { useStore } from "vuex";
const store = useStore();
const menus = computed(() => store.state.loginModule.userMenu);
// console.log(menus);

defineProps({
  isShowIcon: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss">
.aside {
  width: 100%;
  height: 100%;
  background-color: #0f1f32;
  .AsideHeader {
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    img {
      width: 50px;
      height: 100%;
    }
    .title {
      transition: display 0.5s linear;
    }
  }

  .el-menu-vertical-demo {
    border-right: none;
    .is-active {
      background-color: #235fb5;
      color: #fff;
    }
  }
}
</style>
