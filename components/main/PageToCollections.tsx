import { useRouter } from "next/dist/client/router";
import React from "react";
import * as S from "./styles";

export default function PageToCollections() {
  const router = useRouter();

  React.useEffect(() => {
    window.onscroll = () => {
      const contentsWrap = document.getElementById("contents-wrap");
      const scrollY = S.PAGE_HEIGHT * 0 + S.PAGE_HEIGHT / 2;
      if (contentsWrap) {
        if (window.scrollY > scrollY) {
          contentsWrap.style.opacity = (
            window.scrollY /
            scrollY /
            2.3
          ).toString();
          contentsWrap.style.marginTop = "0px";
        } else {
          contentsWrap.style.opacity = "0";
          contentsWrap.style.marginTop = "100px";
        }
      }
    };
  }, []);

  return (
    <S.SliderToCollectionsWrap className="page">
      <div className="contents-wrap" id="contents-wrap">
        <div className="collections-title">
          <div />
          <h1>collections</h1>
          <div />
        </div>
        <p className="sub-title">
          check out the latest collections on collections page
        </p>
        <p className="description">
          Collections of various brands are arranged in the latest order and{" "}
          <br />
          provided. Each collection provides descriptions, designer information,{" "}
          <br />
          and runway videos. Feel their own originality and identity.
        </p>
        <button
          onClick={() => {
            router.push("/collections");
          }}
        >
          show collections
        </button>
      </div>
    </S.SliderToCollectionsWrap>
  );
}
