import request from "./axios";
import { A_TOKEN } from "./../lib/export/localstorage";

export default {
  getBrandDetail(id): any {
    return request({
      method: "get",
      url: `/brand/${id}`,
    });
  },
  getBrandList(spell): any {
    return request({
      method: "get",
      url: `/brand?filter=${spell}`,
    });
  },
  getBrandCollection(brand_id): any {
    return request({
      method: "get",
      url: `/collection/brand/${brand_id}`,
      headers: {
        Authorization: `Bearer ` + localStorage.getItem(A_TOKEN),
      },
    });
  },
};
