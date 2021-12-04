import request from "./axios";
import { A_TOKEN, USER_ID } from "./../lib/export/localstorage";

export default {
  like(id): any {
    return request({
      method: "post",
      url: `/like?brand_id=${id}&user_id=${localStorage.getItem(USER_ID)}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(A_TOKEN),
      },
    });
  },
  unLike(id): any {
    return request({
      method: "delete",
      url: `/like?brand_id=${id}&user_id=${localStorage.getItem(USER_ID)}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(A_TOKEN),
      },
    });
  },
  getLike(): any {
    return request({
      method: "get",
      url: `/like?user_id=${localStorage.getItem(USER_ID)}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(A_TOKEN),
      },
    });
  },
};
