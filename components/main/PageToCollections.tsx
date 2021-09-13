import { useRouter } from "next/dist/client/router";
import React from "react";
import * as S from "./styles";

export default function PageToCollections() {
  const router = useRouter();
  return (
    <S.SliderToCollectionsWrap className="page">
      <div className="contents-wrap" id="collections-contents-wrap">
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
