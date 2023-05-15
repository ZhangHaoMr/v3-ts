import { IForm } from "@/baseUI/from";

export const searchFormConfig: IForm = {
  labelWidth: "100px",
  itemStyle: { padding: "10px" },
  colLayout: { span: 6 },
  formArr: [
    {
      field: "name",
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名",
      rules: []
    },
    {
      field: "realname",
      type: "input",
      label: "真实姓名",
      placeholder: "请输入真实姓名"
    },
    {
      field: "cellphone",
      type: "input",
      label: "手机号码",
      placeholder: "请输入手机号码"
    },
    {
      field: "emable",
      type: "select",
      label: "状态",
      placeholder: "请选择状态",
      options: [
        {
          label: "启用",
          value: 0
        },
        {
          label: "禁用",
          value: 1
        }
      ]
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
