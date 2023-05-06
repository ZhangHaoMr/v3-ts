export interface LoginAccount {
  name: string;
  password: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IDataType<T = any> {
  coder: number;
  data: T;
  message: string;
}

export interface ILoginResult {
  id: number;
  token: string;
  name: string;
}
