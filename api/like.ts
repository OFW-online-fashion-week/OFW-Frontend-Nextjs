import request from "./axios";
import { A_TOKEN } from "./../lib/export/localstorage";

export default {
  like(id): any {
    return request({
      method: "post",
      url: `/like?brand_id=${id}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(A_TOKEN),
      },
    });
  },
};
