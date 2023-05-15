import { IForm } from "@/baseUI/from";

export const searchFormConfig: IForm = {
  labelWidth: "100px",
  itemStyle: { padding: "10px 20px" },
  colLayout: { span: 6 },
  formArr: [
    {
      field: "name",
      type: "input",
      label: "部门名称",
      placeholder: "请输入部门名称",
      rules: []
    },
    {
      field: "realname",
      type: "input",
      label: "部门领导",
      placeholder: "请输入部门领导"
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
