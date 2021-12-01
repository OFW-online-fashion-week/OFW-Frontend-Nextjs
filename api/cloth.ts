import request from "./axios";
import { A_TOKEN } from "./../lib/export/localstorage";

export default {
  searchDesigner(name): any {
    return request({
      method: "get",
      url: `/designer/search/${name}`,
    });
  },
};
