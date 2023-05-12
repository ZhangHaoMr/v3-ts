<template>
  <el-table border :data="tableData" style="width: 100%">
    <el-table-column align="center" type="selection" width="55" />
    <el-table-column
      align="center"
      type="index"
      label="序号"
      width="60"
    ></el-table-column>
    <template v-for="(item, index) in propsList" :key="index">
      <el-table-column align="center" v-bind="item">
        <template #default="scope">
          <slot :name="item.slotName" :row="scope.row">
            {{ scope.row[item.prop] }}
          </slot>
        </template>
      </el-table-column>
    </template>
    <el-table-column align="center" label="操作" width="100">
      <template #default>
        <el-button link type="primary" size="small">编辑</el-button>
        <el-button link type="primary" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
  tableData: {
    type: Array,
    required: true
  },
  propsList: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss"></style>
