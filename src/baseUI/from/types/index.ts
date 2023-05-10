type IFromType = "input" | "password" | "select" | "datepicker";

export interface IFormItems {
  type: IFromType;
  label?: string;
  placeholder?: string;
  options?: any;
  otherOptions?: any;
  rules?: any[];
}

export interface IForm {
  formArr: IFormItems[];
  colLayout?: any;
  itemStyle?: any;
  labelWidth?: string;
}
