<template>
  <div class="menu">
    <pageForm :searchFormConfig="searchFormConfig" />
  </div>
</template>

<script lang="ts" setup>
import pageForm from "@/components/page-form";
import { searchFormConfig } from "./menu";
</script>

<style scoped>
.menu {
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
}
</style>
