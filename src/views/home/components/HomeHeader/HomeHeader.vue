<template>
  <div class="header">
    <el-icon class="header-icon" size="25" @click="HandleIsShowIcon">
      <Expand v-show="isShowIcon" />
      <Fold v-show="!isShowIcon" />
    </el-icon>
    <div class="header-right">
      <Breadcrumb :breadcrumb="breadcrumbs" />
      <div class="header-dropdown">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <el-avatar
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            />
            <span class="title">
              {{ $store.state.loginModule.userInfo.name }}
            </span>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item icon="CircleClose" command="logout">
                退出系统
              </el-dropdown-item>
              <el-dropdown-item icon="InfoFilled" command="info" divided>
                个人信息
              </el-dropdown-item>
              <el-dropdown-item icon="Unlock" command="changePassword">
                修改密码
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { handleCommand, HandleIsShowIcon, isShowIcon } from "./HomeHeader";
import Breadcrumb from "@/baseUI/Breadcrumb";
import { pathMapBreadcrumb } from "@/utils/router-menu";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();

const breadcrumbs = computed(() => {
  return pathMapBreadcrumb(store.state.loginModule.userMenu, route.path);
});
console.log(breadcrumbs.value);
</script>

<style lang="scss">
.header {
  height: 100%;
  display: flex;
  align-items: center;
  .header-icon {
    cursor: pointer;
  }
  .header-right {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    .header-dropdown {
      height: 100%;
      display: flex;
      align-items: center;
      .el-dropdown {
        height: 100%;
        display: flex;
        align-items: center;
        .el-dropdown-link {
          display: flex;
          align-items: center;
          .title {
            margin-left: 10px;
          }
        }
      }
    }
  }
  :focus {
    outline: 0;
  }
}
</style>
i
