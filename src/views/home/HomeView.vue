<template>
  <div class="home">
    <el-container>
      <el-aside :width="showIcon ? '60px' : '200px'">
        <Aside :isShowIcon="showIcon" />
      </el-aside>
      <el-container>
        <el-header>
          <Header @isShowIcon="getShowIcon" />
        </el-header>
        <el-main>
          <div class="main">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Aside from "./components/HomeAside.vue";
import Header from "./components/HomeHeader/HomeHeader.vue";

const showIcon = ref<boolean>(false);

const getShowIcon = (isShowIcon: boolean) => {
  showIcon.value = isShowIcon;
};
</script>

<style lang="scss">
.home {
  width: 100vw;
  height: 100vh;

  .el-container {
    width: 100%;
    height: 100%;
    .el-aside {
      overflow: hidden;
      transition: width 0.5s linear;
    }
    .el-main {
      height: 100%;
      background-color: #f1f2f6;
      .main {
        background-color: #fff;
        border-radius: 10px;
      }
    }
  }
}
</style>
