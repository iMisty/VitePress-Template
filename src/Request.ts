/*
 * @Description: Axios Encapsulation
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-04-20 14:39:00
 * @LastEditors: Mirage
 * @LastEditTime: 2022-04-20 15:54:25
 */
import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface RequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  // @ts-ignore
  requestInterceptorsCatch?: (error: any) => any;

  responseInterceptors?: <T = AxiosResponse>(config: T) => T;
  // @ts-ignore
  responseInterceptorsCatch?: (error: any) => any;
}

interface CustomRequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors;
}

class Request {
  // Axios Example
  public instance: AxiosInstance;
  // Custom Interceptor
  public interceptorsObject?: RequestInterceptors;

  constructor(config: CustomRequestConfig) {
    this.instance = axios.create(config);
    this.interceptorsObject = config.interceptors;

    /**
     * Example Request Interceptors
     */
    this.instance.interceptors.request.use(
      this.interceptorsObject?.requestInterceptors,
      this.interceptorsObject?.requestInterceptorsCatch
    );

    /**
     * Example Response Interceptors
     */
    this.instance.interceptors.response.use(
      this.interceptorsObject?.responseInterceptors,
      this.interceptorsObject?.responseInterceptorsCatch
    );

    /**
     * Global Request Interceptors
     */
    this.instance.interceptors.request.use(
      (request: AxiosRequestConfig) => {
        return request;
      },
      (error: any) => error
    );

    /**
     * Global Response Interceptors
     */
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: any) => error
    );
  }

  public async request<T>(config: CustomRequestConfig): Promise<T | unknown> {
    if (config.interceptors?.requestInterceptors) {
      config = config.interceptors.requestInterceptors(config);
    }
    try {
      let setRequestData = await this.instance.request<T, any>(config);

      if (config.interceptors?.responseInterceptors) {
        setRequestData = await config.interceptors?.responseInterceptors<T>(
          setRequestData
        );
      }
      return setRequestData;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default Request;
