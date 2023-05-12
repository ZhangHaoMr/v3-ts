import { service } from "@/service";

// 获取列表
export const getSystemList = (url: string, data: any) =>
  service.post({ url, data });
