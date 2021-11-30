import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "http://192.168.137.172:8081/",
  timeout: 10000,
});
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error: AxiosError) {
    return Promise.reject(error);
  }
);
export default instance;
