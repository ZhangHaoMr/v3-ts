<template>
  <div class="login_phone">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      label-width="70px"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item label="手机号" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <div class="verification_code">
          <el-input v-model="ruleForm.password" show-password />
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import type { ElForm } from "element-plus";

// 表单数据
const ruleForm = reactive({
  name: "",
  password: ""
});
</script>

<style lang="scss">
.verification_code {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .el-button {
    margin-left: 5px;
  }
}
</style>
