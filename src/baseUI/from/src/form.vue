<template>
  <div class="from">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="(item, index) in formArr" :key="index">
          <el-col :span="8">
            <el-form-item :label="item.label">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :type="item.type"
                  :show-password="item.type === 'password'"
                  :placeholder="item.placeholder"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select style="width: 100%" :placeholder="item.placeholder">
                  <el-option
                    v-for="(option, index) in item.options"
                    :label="option.label"
                    :value="option.value"
                    :key="index"
                  >
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  type="daterange"
                  v-bind="item.otherOptions"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { IFormItems } from "@/baseUI/from";

defineProps({
  formArr: {
    type: Array as PropType<IFormItems[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: "100px"
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: "0 0" })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 4,
      lg: 6,
      md: 8,
      sm: 12,
      xs: 24
    })
  }
});
</script>

<style lang="scss">
.from {
  padding: 10px;
  .el-form {
    width: 100%;
  }
}
</style>
