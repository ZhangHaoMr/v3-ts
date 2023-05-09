<template>
  <div class="header">
    <el-icon class="header-icon" size="25" @click="HandleIsShowIcon">
      <Expand v-show="isShowIcon" />
      <Fold v-show="!isShowIcon" />
    </el-icon>
    <div class="header-right">
      <div>面包屑导航</div>
      <div class="header-dropdown">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{ $store.state.loginModule.userInfo.name }}
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="logout">退出系统</el-dropdown-item>
              <el-dropdown-item command="info" divided>
                个人信息
              </el-dropdown-item>
              <el-dropdown-item command="changePassword">
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
  }
  el-dropdown:focus {
    outline: 0 !important;
  }
  el-dropdown:hover {
    border: none !important;
  }
}
</style>i
