<template>
  <div class="user">
    <pageForm :searchFormConfig="searchFormConfig" />
    <div class="content">
      <ListTable :tableData="usersList" :propsList="propsList">
        <template #enable="scope">
          <el-button
            size="small"
            :type="scope.row.enable ? 'primary' : 'danger'"
            plain
          >
            {{ scope.row.enable ? "启用" : "禁用" }}
          </el-button>
        </template>
      </ListTable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import pageForm from "@/components/page-form";
import ListTable from "@/baseUI/table";
import { searchFormConfig, propsList, usersList } from "./user";
</script>

<style scoped>
.content {
  border-top: 20px solid #f5f5f5;
  padding: 20px;
}
</style>
