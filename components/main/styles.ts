import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { BaseWrapper } from "../../styles";
import { COLOR } from "./../../styles/index";

export const PAGE_HEIGHT = 900;

export const Wrapper = styled(BaseWrapper)``;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .page {
    width: 100%;
    height: ${`${PAGE_HEIGHT}px`};
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 100px;
  }
`;

const introWrapAnime = keyframes`
0%{
  margin-top:50px;
  opacity:0;
}
100%{
  margin-top:0px;
  opacity:1;
}
`;

export const SliderToIntroWrap = styled.div`
  background-image: url("/slider-intro-image.png");
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IntroContainer = styled.div`
  width: 1300px;
  height: 350px;
  position: relative;
  animation: ${introWrapAnime} 1s;
  .top {
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & hr {
      border: none;
      width: 470px;
      height: 2px;
      background-color: white;
      margin: 0;
      padding: 0;
    }
    .welcome {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      position: absolute;
      & h1 {
        text-transform: uppercase;
        font-size: 60px;
        font-weight: 400;
        color: white;
      }
    }
  }
`;

export const ContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .intro-ment {
    text-align: center;
    margin-top: 60px;
    & p {
      color: white;
      font-size: 18px;
      font-weight: 300;
    }
  }
`;

export const SideLine = styled.div`
  width: 1px;
  height: 100%;
  position: absolute;
  background: linear-gradient(white, rgb(255, 255, 255, 0));
  right: 0;
`;

export const SliderToCollectionsWrap = styled.div`
  background-image: url("/slider-collections-image.png");
  display: flex;
  justify-content: flex-end;
  transition: 0.5s;
  .contents-wrap {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-right: 300px;
    opacity: 0;
    margin-top: 200px;
    transition: 1s;
  }
  .collections-title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & div {
      width: 170px;
      height: 1px;
      background: white;
    }
    & h1 {
      color: white;
      text-transform: capitalize;
      font-weight: 300;
      font-size: 48px;
    }
  }
  .sub-title {
    color: white;
    font-size: 24px;
    font-weight: 300;
    text-transform: capitalize;
    margin-top: 50px;
  }
  .description {
    text-align: center;
    margin-top: 30px;
    color: ${COLOR.text};
  }
  & button {
    border: 1px solid white;
    color: white;
    width: 100%;
    height: 70px;
    font-size: 20px;
    font-weight: 300;
    margin-top: 50px;
  }
`;

export const SliderToBrandsWrap = styled.div`
  background-image: url("/slider-brands-image.png");
  display: flex;
  justify-content: flex-start;
  transition: 0.5s;
  .contents-wrap {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-left: 300px;
    margin-top: 200px;
    transition: 1s;
    z-index: 2;
  }
  .brands-title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & div {
      width: 200px;
      height: 1px;
      background: white;
    }
    & h1 {
      color: white;
      text-transform: capitalize;
      font-weight: 300;
      font-size: 48px;
    }
  }
  .sub-title {
    color: white;
    font-size: 24px;
    font-weight: 300;
    text-transform: capitalize;
    margin-top: 50px;
  }
  .description {
    text-align: center;
    margin-top: 30px;
    color: ${COLOR.text};
  }
  & button {
    border: 1px solid white;
    color: white;
    width: 100%;
    height: 70px;
    font-size: 20px;
    font-weight: 300;
    margin-top: 50px;
  }
`;

export const ShadowWrap = styled.div`
  width: 100%;
  height: ${`${PAGE_HEIGHT}px`};
  position: absolute;
  background: linear-gradient(to right, rgb(0, 0, 0, 0.8), rgb(0, 0, 0, 0));
`;

export const SliderToModelsWrap = styled.div`
  background-image: url("/slider-models-image.png");
  display: flex;
  justify-content: flex-end;
  transition: 0.5s;
  .contents-wrap {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-right: 300px;
    margin-top: 200px;
    transition: 1s;
    z-index: 2;
  }
  .models-title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & div {
      width: 200px;
      height: 1px;
      background: white;
    }
    & h1 {
      color: white;
      text-transform: capitalize;
      font-weight: 300;
      font-size: 48px;
    }
  }
  .sub-title {
    color: white;
    font-size: 24px;
    font-weight: 300;
    text-transform: capitalize;
    margin-top: 50px;
  }
  .description {
    text-align: center;
    margin-top: 30px;
    color: ${COLOR.text};
  }
  & button {
    border: 1px solid white;
    color: white;
    width: 100%;
    height: 70px;
    font-size: 20px;
    font-weight: 300;
    margin-top: 50px;
  }
`;
