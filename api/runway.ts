import request from "./axios";
import { A_TOKEN } from "./../lib/export/localstorage";

export default {
  createModel({
    name,
    email,
    description,
    height,
    weight,
    nation,
    male,
    img,
  }): any {
    return request({
      method: "post",
      url: `/model`,
      headers: {
        Authorization: `Bearer ` + localStorage.getItem(A_TOKEN),
      },
      data: {
        name: name,
        email: email,
        introduction: description,
        height: height,
        weight: weight,
        nation: nation,
        gender: male,
        profile_url: img,
      },
    });
  },
  createClothes({ name, style_code, url, description, image_path }): any {
    return request({
      method: "post",
      url: `/clothes`,
      headers: {
        Authorization: `Bearer ` + localStorage.getItem(A_TOKEN),
      },
      data: {
        name: name,
        style_code: style_code,
        url: url,
        description: description,
        image_path: image_path,
      },
    });
  },
  searchModel(name): any {
    return request({
      method: "get",
      url: `/model/search?filter=${name}`,
      headers: {
        Authorization: `Bearer ` + localStorage.getItem(A_TOKEN),
      },
    });
  },
  searchCloth(name): any {
    return request({
      method: "get",
      url: `/clothes/search?filter=${name}`,
      headers: {
        Authorization: `Bearer ` + localStorage.getItem(A_TOKEN),
      },
    });
  },
  createRunway({ bgm, runway, model, clothes, collection_id }) {
    return request({
      method: "post",
      url: `/runway`,
      headers: {
        Authorization: `Bearer ` + localStorage.getItem(A_TOKEN),
      },
      data: {
        collection_id: collection_id,
        model_id: model,
        clothes_id: clothes,
        bgm_url: bgm,
        runway_url: runway,
      },
    });
  },
  submitCollection(collection_id) {
    return request({
      method: "post",
      url: `/collection/submit?collection_id=${collection_id}`,
      headers: {
        Authorization: `Bearer ` + localStorage.getItem(A_TOKEN),
      },
    });
  },
  getRunwayDetail(runway_id): any {
    return request({
      method: "get",
      url: `/runway?runway_id=${runway_id}`,
    });
  },
};
