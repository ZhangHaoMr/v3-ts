import axios from "axios";
import type { AxiosInstance } from "axios";
import type { requestConfig, RequestInterceptor } from "./type";
import { loading, DEFAULT_LOADING } from "./loading";

class Request {
  instance: AxiosInstance;
  interceptors?: RequestInterceptor;
  loading?: boolean;
  constructor(config: requestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.loading = config.showLoading ?? DEFAULT_LOADING;

    // 局部请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    // 局部响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.loading) {
          loading.open();
        }
        // console.log("全局请求成功拦截器");
        // config.headers.a = "123";
        return config;
      },
      (error) => {
        loading.close();
        // console.log("全局请求失败拦截器");
        return Promise.reject(error);
      }
    );
    this.instance.interceptors.response.use(
      function (response) {
        loading.close();
        // console.log("全局响应成功拦截器");
        return response.data;
      },
      function (error) {
        loading.close();
        // console.log("全局响应失败拦截器");
        return Promise.reject(error);
      }
    );
  }

  request<T>(config: requestConfig): Promise<T> {
    if (config?.interceptors) {
      // 单个请求拦截器
      this.instance.interceptors.request.use(
        config.interceptors.requestInterceptor,
        config.interceptors.requestInterceptorCatch
      );
      // 单个响应拦截器
      this.instance.interceptors.response.use(
        config.interceptors.responseInterceptor,
        config.interceptors.responseInterceptorCatch
      );
    }
    if (config.showLoading === false) {
      this.loading = config.showLoading;
    }
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          this.loading = DEFAULT_LOADING;
          resolve(res);
          // console.log("res=>", res);
        })
        .catch((error) => {
          this.loading = DEFAULT_LOADING;
          reject(error);
          // console.log("error=>", error);
        });
    });
  }

  get<T = any>(config: requestConfig): Promise<T> {
    return this.request({ ...config, method: "GET" });
  }
  post<T = any>(config: requestConfig): Promise<T> {
    // console.log(config);

    return this.request({ ...config, method: "POST" });
  }
  put<T = any>(config: requestConfig): Promise<T> {
    return this.request({ ...config, method: "PUT" });
  }
  delete<T = any>(config: requestConfig): Promise<T> {
    return this.request({ ...config, method: "DELETE" });
  }
}

export default Request;
