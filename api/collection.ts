import request from "./axios";
import { A_TOKEN } from "./../lib/export/localstorage";

export default {
  createCollection({ title, description, brand_id, designer_id }): any {
    return request({
      method: "post",
      url: `/collection`,
      headers: {
        Authorization: `Bearer ` + localStorage.getItem(A_TOKEN),
      },
      data: {
        title: title,
        description: description,
        brand_id: brand_id,
        designer_id: designer_id,
      },
    });
  },
  getCollectionDetail(collection_id): any {
    return request({
      method: "get",
      url: `/collection/${collection_id}`,
    });
  },
  getCollectionRunway(collection_id): any {
    return request({
      method: "get",
      url: `/runway/brand?collection_id=${collection_id}`,
    });
  },
  getAllCollection(): any {
    return request({
      method: "get",
      url: `/collection/all?page=0`,
    });
  },
};
