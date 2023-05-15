<template>
  <div class="user">
    <pageForm :searchFormConfig="searchFormConfig" />
    <div class="content">
      <pageConent :contentConfig="contentConfig" url="/users" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import pageForm from "@/components/page-form";
import pageConent from "@/components/page-content";
import { contentConfig } from "./config/user-content";
import { searchFormConfig } from "./config/user-form";
</script>

<style scoped>
.content {
  border-top: 20px solid #f5f5f5;
  padding: 20px;
}
</style>
