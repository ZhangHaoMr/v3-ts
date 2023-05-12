<template>
  <div class="role">
    <pageForm :searchFormConfig="searchFormConfig" />
  </div>
</template>

<script lang="ts" setup>
import pageForm from "@/components/page-form";
import { searchFormConfig } from "./role";
</script>

<style scoped>
.role {
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
}
</style>
