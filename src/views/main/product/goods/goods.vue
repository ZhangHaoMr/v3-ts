<template>
  <div class="goods">
    <pageForm :searchFormConfig="searchFormConfig" />
    <div class="content">
      <pageConent :contentConfig="contentConfig" url="/goods" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import pageForm from "@/components/page-form";
import pageConent from "@/components/page-content";
import { searchFormConfig } from "./config/goods-form";
import { contentConfig } from "./config/goods-content";
</script>

<style scoped>
.content {
  border-top: 20px solid #f5f5f5;
  padding: 20px;
}
</style>
