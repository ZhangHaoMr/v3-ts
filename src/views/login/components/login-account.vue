<template>
  <div class="login_account">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="60px"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
// 导入表单验证规则
import { rules } from "../config/login-account";
import type { ElForm } from "element-plus";

import localCache from "@/utils/cache";

import { useStore } from "vuex";
const store = useStore();

// 定义ruleFormRef
const ruleFormRef = ref<InstanceType<typeof ElForm>>();

// 表单数据
const ruleForm = reactive({
  name: localCache.getCache("name") ?? "",
  password: localCache.getCache("password") ?? ""
});

// 账号密码登录校验
const loginAction = (isKeepPassword: boolean) => {
  ruleFormRef.value?.validate((valid) => {
    if (valid) {
      console.log("123", valid);

      if (isKeepPassword) {
        localCache.setCache("name", ruleForm.name);
        localCache.setCache("password", ruleForm.password);
      } else {
        localCache.deleteCache("name");
        localCache.deleteCache("password");
      }

      store.dispatch("loginModule/accountLoginActions", { ...ruleForm });
    }
  });
};

defineExpose({
  loginAction
});
</script>
