<template>
  <div class="user">
    <Form v-bind="searchFormConfig" />
  </div>
</template>

<script lang="ts" setup>
import Form from "@/baseUI/from";
import { searchFormConfig } from "./user";
</script>

<style scoped>
.user {
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
}
</style>
