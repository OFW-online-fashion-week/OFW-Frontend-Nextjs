import request from "./axios";

export default {
  getBrandDetail(id): any {
    return request({
      method: "get",
      url: `/brand/${id}`,
    });
  },
};
