<template>
  <div class="table">
    <div class="header">
      <slot name="header">
        <div class="title">
          {{ title }}
        </div>
      </slot>
      <div class="handel">
        <slot name="headerHandel"></slot>
      </div>
    </div>
    <el-table
      border
      :data="tableData"
      style="width: 100%"
      row-key="id"
      default-expand-all="showExpandColumn"
    >
      <el-table-column
        v-if="showSelectionColumn"
        align="center"
        type="selection"
        width="60"
      />
      <el-table-column
        v-if="showIndexColumn"
        align="center"
        type="index"
        label="序号"
        width="60"
      ></el-table-column>
      <template v-for="(item, index) in propsList" :key="index">
        <el-table-column v-bind="item" sortable="showExpandColumn">
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          :page-sizes="[100, 200, 300, 400]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
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
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectionColumn: {
    type: Boolean,
    default: false
  },
  showExpandColumn: {
    type: Boolean,
    default: false
  },
  title: {
    type: String
  }
});
</script>

<style lang="scss">
.el-table {
  margin: 10px 0;
}
.header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 25px;
    font-weight: 700;
  }
}
.footer {
  display: flex;
  justify-content: right;
}
</style>
