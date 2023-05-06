<template>
  <div class="loain_panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" v-model="currentTab" class="demo-tabs" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <loainAccount ref="loginAccountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <loainPhone />
      </el-tab-pane>
    </el-tabs>
    <div class="account_contorl">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login_button" type="primary" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
// import { UserFilled, Iphone } from "@element-plus/icons-vue";
import loainAccount from "./login-account.vue";
import loainPhone from "./login-phone.vue";

// tab切换的值
const currentTab = ref<string>("account");

// 是否记住密码
const isKeepPassword = ref<boolean>(true);

// 定义loginAccountRef
const loginAccountRef = ref<InstanceType<typeof loainAccount>>();

// 立即登录方法
const handleLoginClick = () => {
  console.log("立即登录");
  if (currentTab.value == "account") {
    // 账号密码登录
    loginAccountRef.value?.loginAction(isKeepPassword.value);
  } else {
    // 手机号登录
  }
};
</script>

<style lang="less">
.loain_panel {
  width: 320px;
  .title {
    text-align: center !important;
  }
  .account_contorl {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .login_button {
    width: 100%;
    padding: 5px 0;
  }
}

.demo-tabs {
  box-shadow: 1px 1px 1px #ccc;
}

.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
