<template>
  <el-breadcrumb separator-icon="ArrowRight">
    <template v-for="(item, index) in breadcrumb" :key="index">
      <el-breadcrumb-item v-if="item.path" :to="{ path: item.path }">
        {{ item.name }}
      </el-breadcrumb-item>
      <el-breadcrumb-item v-else>
        {{ item.name }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>
<script setup lang="ts">
import { PropType, defineProps } from "vue";
import { IBreadcrumb } from "../types";
defineProps({
  breadcrumb: {
    type: Array as PropType<IBreadcrumb[]>,
    default: () => []
  }
});
</script>
