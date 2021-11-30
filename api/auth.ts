import request from "./axios";

export default {
  getGoogleLink(): any {
    return request({
      method: "get",
      url: "/auth/google",
    });
  },
  userSignup({ code, aud }): any {
    return request({
      method: "post",
      url: "/auth/user/login",
      data: {
        code: code,
        aud: aud,
      },
    });
  },
  userRegist({ name, code, aud }): any {
    return request({
      method: "post",
      url: "/auth/user/signup",
      data: {
        code: code,
        name: name,
        aud: aud,
      },
    });
  },
  brandSignUp({ profile, cover, name, email, psw, url, des }) {
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
  brandLogin({ id, psw }): any {
    return request({
      method: "post",
      url: "/auth/brand/login",
      data: {
        email: id,
        password: psw,
      },
    });
  },
};
