import request from "./axios";
import { A_TOKEN } from "./../lib/export/localstorage";

export default {
  createDesigner({ email, name, profile_path, description }): any {
    return request({
      method: "post",
      url: `/designer`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem(A_TOKEN)}`,
      },
      data: {
        email: email,
        name: name,
        profile_path: profile_path,
        description: description,
      },
    });
  },
  searchDesigner(name): any {
    return request({
      method: "get",
      url: `/designer/search/${name}`,
    });
  },
};
