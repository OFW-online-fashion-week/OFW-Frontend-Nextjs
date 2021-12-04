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
    });
  },
  getIsLike(brand_id, user_id): any {
    return request({
      method: "get",
      url: `/like/is?brand_id=${brand_id}&user_id=${user_id}`,
      headers: {
        Authorization: `Bearer ` + localStorage.getItem(A_TOKEN),
      },
    });
  },
};
