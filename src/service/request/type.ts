import type {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from "axios";

export interface RequestInterceptor {
  requestInterceptor?: (
    config: InternalAxiosRequestConfig<any>
  ) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch?: (error: any) => any;
}

export interface requestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptor;
  showLoading?: boolean;
}
