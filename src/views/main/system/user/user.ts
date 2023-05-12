import { IForm } from "@/baseUI/from";
import { getSystemList } from "@/api/main/system/system";
import { ref } from "vue";

const searchFormConfig: IForm = {
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

const pagerList = {
  url: "/users/list",
  data: {
    offset: 0,
    size: 10
  }
};

const usersList = ref<any[]>([]);
const listCount = ref<number>(0);

const getList = async () => {
  try {
    const res = await getSystemList(pagerList.url, pagerList.data);
    console.log(res);
    usersList.value = res.data.list;
    listCount.value = res.data.totalCount;
  } catch (error) {
    console.log(error);
  }
};
getList();

const propsList = [
  {
    label: "用户名",
    prop: "name",
    width: "100"
  },
  {
    label: "真实名",
    prop: "realname",
    width: "100"
  },
  {
    label: "手机号码",
    prop: "cellphone",
    width: "150"
  },
  {
    label: "状态",
    prop: "enable",
    width: "100",
    slotName: "enable"
  },
  {
    label: "创建时间",
    prop: "createAt",
    width: "210",
    slotName: "createAt"
  },
  {
    label: "更新时间",
    prop: "updateAt",
    width: "210",
    slotName: "updateAt"
  }
];

export { searchFormConfig, propsList, usersList, listCount };
