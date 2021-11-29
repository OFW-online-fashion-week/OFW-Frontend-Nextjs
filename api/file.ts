import request from "./axios";

export default {
  getS3Link(file): any {
    const fd = new FormData();
    fd.append("file", file);
    return request({
      method: "post",
      url: "/upload",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: fd,
    });
  },
};
