import { IForm } from "@/baseUI/from";

export const searchFormConfig: IForm = {
  labelWidth: "100px",
  itemStyle: { padding: "10px 20px" },
  colLayout: { span: 6 },
  formArr: [
    {
      field: "name",
      type: "input",
      label: "商品名称",
      placeholder: "请输入商品名称",
      rules: []
    },
    {
      field: "name",
      type: "input",
      label: "商品地址",
      placeholder: "请输入商品地址",
      rules: []
    },
    {
      field: "realname",
      type: "select",
      label: "状态",
      placeholder: "请选择状态"
    },
    {
      field: "createAt",
      type: "datepicker",
      label: "创建时间",
      otherOptions: {
        "start-placeholder": "开始时间",
        "end-placeholder": "结束时间",
        type: "daterange"
      }
    }
  ]
};
