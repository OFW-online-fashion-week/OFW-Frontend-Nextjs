import request from "./axios";

export default {
  fileUpload({ file }) {
    const fd = new FormData();
    fd.append("file", file);
    return request({
      method: "post",
      url: "/upload",
      headers: {
        "Content-type": "multipart/form-data",
      },
      data: fd,
    });
  },
  brandSignUp({
    profileUrl,
    coverUrl,
    name,
    email,
    password,
    url,
    description,
  }) {
    return request({
      method: "post",
      url: "/auth/brand/signup",
      data: { profileUrl, coverUrl, name, email, password, url, description },
    });
  },
};
