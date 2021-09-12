import React from "react";
import { LogoIcon, OnlineFashionWeekIcon } from "../../assets";
import * as S from "./styles";

export default function SliderToIntro() {
  return (
    <S.SliderToIntroWrap>
      <S.IntroContainer>
        <S.SideLine />
        <S.SideLine style={{ left: 0 }} />
        <div className="top">
          <hr />
          <div className="welcome">
            <h1>welcome</h1>
          </div>
          <hr />
        </div>
        <S.ContentsContainer>
          <LogoIcon color="white" />
          <OnlineFashionWeekIcon />
          <div className="intro-ment">
            <p>We are providing "Online Fashion Show".</p>
            <p>If you want to know more about us, read the pages below</p>
          </div>
        </S.ContentsContainer>
      </S.IntroContainer>
    </S.SliderToIntroWrap>
  );
}
