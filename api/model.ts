import request from "./axios";
import { A_TOKEN } from "./../lib/export/localstorage";

export default {
  getModelList(): any {
    return request({
      method: "get",
      url: `/model`,
    });
  },
  getModelDetail(id): any {
    return request({
      method: "get",
      url: `/model/${id}`,
    });
  },
};
