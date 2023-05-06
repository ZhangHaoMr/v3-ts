import { App } from "vue";
import {
  ElButton,
  ElRow,
  ElForm,
  ElFormItem,
  ElInput,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink
} from "element-plus";
const components = [
  ElButton,
  ElRow,
  ElForm,
  ElFormItem,
  ElInput,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink
];

export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component);
  }
}
