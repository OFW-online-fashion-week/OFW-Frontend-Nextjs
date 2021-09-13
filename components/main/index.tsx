import PageToBrands from "./PageToBrands";
import PageToCollections from "./PageToCollections";
import PageToIntro from "./PageToIntro";
import * as S from "./styles";
import React from "react";
import PageToModels from "./PageToModels";

export default function MainPage() {
  const scrollEvent = React.useCallback((id, indexNum) => {
    const contentsWrap = document.getElementById(id);
    const scrollY = S.PAGE_HEIGHT * indexNum + S.PAGE_HEIGHT / 2;
    if (contentsWrap) {
      if (window.scrollY > scrollY) {
        contentsWrap.style.opacity = (
          window.scrollY /
          scrollY /
          (2 - indexNum / 2)
        ).toString();
        contentsWrap.style.marginTop = "0px";
      } else {
        contentsWrap.style.opacity = "0";
        contentsWrap.style.marginTop = "100px";
      }
    }
  }, []);

  React.useEffect(() => {
    window.onscroll = () => {
      scrollEvent("collections-contents-wrap", 0);
      scrollEvent("brands-contents-wrap", 1);
      scrollEvent("models-contents-wrap", 2);
    };
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <PageToIntro />
        <PageToCollections />
        <PageToBrands />
        <PageToModels />
      </S.Container>
    </S.Wrapper>
  );
}
