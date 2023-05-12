<template>
  <div class="from">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="(item, index) in formArr" :key="index">
          <el-col :span="8">
            <el-form-item :style="itemStyle" :label="item.label">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :type="item.type"
                  :show-password="item.type === 'password'"
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  v-model="formData[item.filed]"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                  v-model="formData[item.filed]"
                >
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
                  v-bind="item.otherOptions"
                  v-model="formData[item.filed]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps, PropType, watch, defineEmits } from "vue";
import { IFormItems } from "@/baseUI/from";

const prop = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
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

const formData = ref({ ...prop.modelValue });
const emits = defineEmits(["updata:formData"]);
watch(
  formData,
  (newValue) => {
    emits("updata:formData", newValue);
  },
  {
    deep: true
  }
);
</script>

<style lang="scss">
.from {
  padding: 10px;
  .el-form {
    width: 100%;
  }
  .footer {
    display: flex;
    justify-content: right;
    margin: 0 0 10px 10px;
  }
}
</style>
