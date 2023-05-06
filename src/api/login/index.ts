import { service } from "@/service";
import type { LoginAccount, IDataType, ILoginResult } from "./type";

// 登录接口
export const AccountLoginPost = (account: LoginAccount) =>
  service.post<IDataType<ILoginResult>>({
    url: "/login",
    data: account
  });

// 获取用户信息
export const getUserInfo = (id: string | number) =>
  service.get<IDataType>({
    url: `/users/${id}`,
    showLoading: false
  });

// 获取当前用户 拥有的菜单
export const getMenus = (id: string | number) =>
  service.get<IDataType>({
    url: `/role/${id}/menu`,
    showLoading: false
  });
