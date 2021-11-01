import axios from "axios";
import config from "../../config";
import Loading from "../../components/Loading";
import { removePending, addPending } from "./pending";
import { LoadingInstance, closeLoading } from "./loading";
import { httpErrorStatusHandle } from "./httpError";

function request(axiosConfig, customOptions) {
  const service = axios.create({
    baseURL: config.baseApi, // 设置统一的请求前缀
    timeout: 6000, // 设置统一的超时时长
    headers: {
      "Content-Type": "application/json",
    },
  });

  // 自定义配置
  let custom_options = Object.assign(
    {
      repeat_request_cancel: true, // 是否开启取消重复请求, 默认为 true
      loading: false, // 是否开启loading层效果, 默认为false
      reduct_data_format: true, // 是否开启简洁的数据结构响应, 默认为true
      error_message_show: true, // 是否开启接口错误信息展示,默认为true
    },
    customOptions
  );

  // 请求拦截器
  service.interceptors.request.use(
    (config) => {
      // 请求前若当前请求存在先移除
      removePending(config);
      custom_options.repeat_request_cancel && addPending(config);

      // 创建loading实例
      if (custom_options.loading) {
        LoadingInstance._count++;
        if (LoadingInstance._count === 1) {
          LoadingInstance._target = Loading;
          LoadingInstance._target.open();
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // 响应拦截器
  service.interceptors.response.use(
    (response) => {
      removePending(response.config);
      custom_options.loading && closeLoading(custom_options); // 关闭loading
      return custom_options.reduct_data_format ? response.data : response; // 根据条件获取参数信息
    },
    (error) => {
      error.config && removePending(error.config);
      custom_options.loading && closeLoading(custom_options); // 关闭loading
      custom_options.error_message_show && httpErrorStatusHandle(error); // 处理错误状态码
      return Promise.reject(error);
    }
  );

  return service(axiosConfig);
}

export default request;
