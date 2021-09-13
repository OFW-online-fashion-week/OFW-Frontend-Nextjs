import { useRouter } from "next/dist/client/router";
import React from "react";
import * as S from "./styles";

export default function PageToBrands() {
  const router = useRouter();
  return (
    <S.SliderToBrandsWrap className="page">
      <S.ShadowWrap />
      <div className="contents-wrap" id="brands-contents-wrap">
        <div className="brands-title">
          <div />
          <h1>brands</h1>
          <div />
        </div>
        <p className="sub-title">Check out Fancy Brands on Brands page</p>
        <p className="description">
          The brand provides their own description and collections in Brands{" "}
          <br />
          page. You can also press the like button. Visit the brand's official{" "}
          <br />
          website through the link on the brand page.
        </p>
        <button
          onClick={() => {
            router.push("/brands");
          }}
        >
          show brands
        </button>
      </div>
    </S.SliderToBrandsWrap>
  );
}
