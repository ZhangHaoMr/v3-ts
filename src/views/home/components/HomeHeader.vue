<template>
  <div class="header">
    <el-icon class="header-icon" size="25" @click="HandleIsShowIcon">
      <Expand v-show="isShowIcon" />
      <Fold v-show="!isShowIcon" />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
const isShowIcon = ref<boolean>(false);

const emits = defineEmits(["isShowIcon"]);
const HandleIsShowIcon = () => {
  isShowIcon.value = !isShowIcon.value;
  emits("isShowIcon", isShowIcon.value);
};
</script>

<style lang="scss">
.header {
  height: 100%;
  display: flex;
  align-items: center;
  .header-icon {
    cursor: pointer;
  }
}
</style>
