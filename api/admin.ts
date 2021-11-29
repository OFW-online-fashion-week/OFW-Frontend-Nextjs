import request from "./axios";

export default {
  getAdminMainList(): any {
    return request({
      method: "get",
      url: "/admin",
    });
  },
  getBrandDetail(id): any {
    return request({
      method: "get",
      url: `/admin/${id}`,
    });
  },
  rejectBrand(id): any {
    return request({
      method: "delete",
      url: `/admin/${id}`,
    });
  },
  requestEmail(id): any {
    return request({
      method: "head",
      url: `/admin/email/${id}`,
    });
  },
};
