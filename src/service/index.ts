import { BASE_URL, TIMEOUT } from "@/service/request/config";
import Request from "@/service/request";
import LocalCache from "@/utils/cache";

export const service = new Request({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = LocalCache.getCache("token");
      // console.log("token", token);

      // console.log("局部请求成功拦截器");
      if (token) config.headers.Authorization = "Bearer " + token;
      return config;
    },
    requestInterceptorCatch: (error) => {
      // console.log("局部请求失败拦截器");
      return error;
    },
    responseInterceptor: (config) => {
      // console.log("局部响应成功拦截器");
      return config;
    },
    responseInterceptorCatch: (error) => {
      // console.log("局部响应失败拦截器");
      return error;
    }
  }
});
