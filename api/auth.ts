import request from "./axios";

export default {
  getGoogleLink() {
    return request({
      method: "get",
      url: "/auth/google",
    });
  },
  brandSignUp({ profile, cover, name, email, psw, url, des }) {
    console.log(cover);
    return request({
      method: "post",
      url: "/auth/brand/signup",
      data: {
        profile_url: profile,
        cover_url: cover,
        name: name,
        email: email,
        password: psw,
        url: url,
        description: des,
      },
    });
  },
};
