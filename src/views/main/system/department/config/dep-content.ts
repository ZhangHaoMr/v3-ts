export const contentConfig = {
  showIndexColumn: true,
  showSelectionColumn: true,
  propsList: [
    {
      label: "部门名称",
      prop: "name",
      width: "150",
      align: "center"
    },
    {
      label: "部门领导",
      prop: "leader",
      width: "150",
      align: "center"
    },
    {
      label: "上级部门",
      prop: "parentId",
      width: "150",
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
