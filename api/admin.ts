import request from "./axios";

export default {
  getAdminMainList() {
    return request({
      method: "get",
      url: "/admin",
    });
  },
};
