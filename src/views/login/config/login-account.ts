// 校验规则
export const rules = {
  name: [
    { required: true, message: "必须输入账号", trigger: "blur" },
    {
      pattern: /^[a-zA-Z0-9]{6,20}$/,
      message: "必须是6~20个字符或数字",
      trigger: "blur"
    }
  ],
  password: [
    { required: true, message: "必须输入密码", trigger: "blur" },
    {
      pattern: /^[0-9]{3,}$/,
      message: "必须是3位以上数字",
      trigger: "blur"
    }
  ]
};
