<template>
  <div class="category">
    <pageForm :searchFormConfig="searchFormConfig" />
    <div class="content">
      <pageConent :contentConfig="contentConfig" url="/category" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import pageForm from "@/components/page-form";
import pageConent from "@/components/page-content";
import { searchFormConfig } from "./config/category-form";
import { contentConfig } from "./config/category-content";
</script>

<style scoped>
.content {
  border-top: 20px solid #f5f5f5;
  padding: 20px;
}
</style>
