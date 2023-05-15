export const contentConfig = {
  showIndexColumn: true,
  showSelectionColumn: true,
  propsList: [
    {
      label: "用户名",
      prop: "name",
      width: "150",
      align: "center"
    },
    {
      label: "真实名",
      prop: "realname",
      width: "150",
      align: "center"
    },
    {
      label: "手机号码",
      prop: "cellphone",
      width: "150",
      align: "center"
    },
    {
      label: "状态",
      prop: "enable",
      width: "150",
      slotName: "enable",
      align: "center"
    },
    {
      label: "创建时间",
      prop: "createAt",
      width: "300",
      slotName: "createAt",
      align: "center"
    },
    {
      label: "更新时间",
      prop: "updateAt",
      width: "300",
      slotName: "updateAt",
      align: "center"
    },
    {
      label: "操作",
      align: "center",
      slotName: "handles",
      width: "200"
    }
  ]
};
