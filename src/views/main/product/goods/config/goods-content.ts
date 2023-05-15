export const contentConfig = {
  showIndexColumn: true,
  showSelectionColumn: true,
  propsList: [
    {
      label: "商品名称",
      prop: "name",
      width: "150",
      align: "center",
      slotName: "productName"
    },
    {
      label: "原价格",
      prop: "oldPrice",
      width: "100",
      align: "center"
    },
    {
      label: "新价格",
      prop: "newPrice",
      width: "100",
      align: "center"
    },
    {
      label: "商品描述",
      prop: "desc",
      width: "150",
      align: "center",
      slotName: "productName"
    },
    {
      label: "状态",
      prop: "status",
      width: "100",
      align: "center"
    },
    {
      label: "图片",
      prop: "imgUrl",
      width: "150",
      align: "center",
      slotName: "img"
    },
    {
      label: "库存",
      prop: "inventoryCount",
      width: "80",
      align: "center"
    },
    {
      label: "销量",
      prop: "saleCount",
      width: "80",
      align: "center"
    },
    {
      label: "收藏",
      prop: "favorCount",
      width: "80",
      align: "center"
    },
    {
      label: "地址",
      prop: "address",
      width: "100",
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
