export const contentConfig = {
  showIndexColumn: true,
  showSelectionColumn: true,
  propsList: [
    {
      label: "分类名称",
      prop: "name",
      align: "center"
    },
    {
      label: "创建时间",
      prop: "createAt",
      slotName: "createAt",
      align: "center"
    },
    {
      label: "更新时间",
      prop: "updateAt",
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
