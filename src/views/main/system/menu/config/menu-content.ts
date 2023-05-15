export const contentConfig = {
  showExpandColumn: true,
  propsList: [
    {
      label: "菜单名称",
      prop: "name",
      width: "150",
      align: "center"
    },
    {
      label: "级别",
      prop: "type",
      width: "150",
      align: "center"
    },
    {
      label: "菜单url",
      prop: "url",
      width: "150",
      align: "center"
    },
    {
      label: "菜单icon",
      prop: "icon",
      width: "150",
      align: "center"
    },
    {
      label: "排序",
      prop: "sort",
      width: "150",
      align: "center"
    },
    {
      label: "权限",
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
