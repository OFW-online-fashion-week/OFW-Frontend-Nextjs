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

  React.useEffect(() => {
    window.onwheel = (e) => {
      const scrollY = window.scrollY;
      if (e.deltaY > 0 && scrollY < S.PAGE_HEIGHT * 3) {
        window.scrollTo({
          top: (scrollY / S.PAGE_HEIGHT + 1) * S.PAGE_HEIGHT,
          behavior: "smooth",
        });
      } else if (e.deltaY < 0 && scrollY > 100) {
        window.scrollTo({
          top: (scrollY / S.PAGE_HEIGHT - 1) * S.PAGE_HEIGHT,
          behavior: "smooth",
        });
      }
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
