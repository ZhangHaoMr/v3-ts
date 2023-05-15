<template>
  <div class="menu">
    <pageForm :searchFormConfig="searchFormConfig" />
    <div class="content">
      <pageConent :contentConfig="contentConfig" url="/menu" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import pageForm from "@/components/page-form";
import pageConent from "@/components/page-content";
import { searchFormConfig } from "./config/menu-form";
import { contentConfig } from "./config/menu-content";
</script>

<style scoped>
.menu {
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
}

.content {
  border-top: 20px solid #f5f5f5;
  padding: 20px;
}
</style>
