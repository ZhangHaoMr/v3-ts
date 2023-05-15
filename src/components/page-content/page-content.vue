<template>
  <ListTable
    :showIndexColumn="contentConfig.showIndexColumn"
    :showSelectionColumn="contentConfig.showSelectionColumn"
    :tableData="usersList"
    :showExpandColumn="contentConfig.showExpandColumn"
    :propsList="contentConfig.propsList"
    :title="titleType[url]"
  >
    <!-- <template #header> <h2>用户列表</h2> </template> -->
    <template #headerHandel>
      <el-button type="primary">新增数据</el-button>
    </template>
    <template #enable="scope">
      <el-button
        size="small"
        :type="scope.row.enable ? 'primary' : 'danger'"
        plain
      >
        {{ scope.row.enable ? "启用" : "禁用" }}
      </el-button>
    </template>
    <template #createAt="scope">
      {{ $filter.switchingTime(scope.row.createAt) }}
    </template>
    <template #updateAt="scope">
      {{ $filter.switchingTime(scope.row.createAt) }}
    </template>
    <template #handles>
      <el-button icon="EditPen" link size="small" type="primary">
        编辑
      </el-button>
      <el-button icon="Delete" link size="small" type="primary">
        删除
      </el-button>
    </template>
    <template #productName="scope">
      <div class="productName">
        <el-tooltip
          class="box-item"
          effect="dark"
          :content="scope.row.name"
          placement="top"
        >
          {{ scope.row.name }}
        </el-tooltip>
      </div>
    </template>
    <template #img="scope">
      <img :src="scope.row.imgUrl" alt="" />
    </template>
  </ListTable>
</template>

<script lang="ts" setup>
import { getSystemList } from "@/api/main/system/system";
import ListTable from "@/baseUI/table";
import { defineProps, ref } from "vue";

const props = defineProps({
  contentConfig: {
    type: Object,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

const titleType = {
  "/users": "用户列表",
  "/role": "角色列表",
  "/menu": "菜单列表",
  "/department": "部门列表",
  "/category": "类别列表",
  "/goods": "商品列表"
};

const pagerList = {
  url: props.url + "/list",
  data: {
    offset: 0,
    size: 10
  }
};

const usersList = ref<any[]>([]);
const listCount = ref<number>(0);

const getList = async () => {
  try {
    const res = await getSystemList(pagerList.url, pagerList.data);
    // console.log("res=>", res);
    usersList.value = res.data.list;
    listCount.value = res.data.totalCount;
    console.log("usersList", usersList.value);
  } catch (error) {
    console.log(error);
  }
};
getList();
</script>

<style lang="scss">
.productName {
  width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
img {
  width: 50px;
  height: 50px;
}
</style>
