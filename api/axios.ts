import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "http://192.168.35.149:8081/",
  timeout: 30000,
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
