<template>
  <Form v-bind="searchFormConfig" v-model="formData">
    <template #footer>
      <el-button>重置</el-button>
      <el-button type="primary" @click="handelChange">搜索</el-button>
    </template>
  </Form>
</template>

<script lang="ts" setup>
import Form from "@/baseUI/from";
import { ref, defineProps } from "vue";

defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
});

const formData = ref({
  id: "",
  card: "",
  name: "",
  password: "",
  like: "",
  createTime: "",
  emable: "",
  createAt: ""
});

const handelChange = () => {
  console.log(111);
};
</script>
