import styled from "@emotion/styled";
import { COLOR } from "../../styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: white;
  position: absolute;
  z-index: 10;
  background-color: ${COLOR.admin_background};
  overflow: hidden;
  & video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Header = styled.header`
  border-top: 5px solid ${COLOR.main};
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 11;
  padding-top: 20px;
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 11;
  bottom: 0;
  padding-bottom: 20px;
`;

export const SideBar = styled.div`
  position: absolute;
  z-index: 11;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transform: translateX(80px);
  & button {
    height: 50px;
    width: 200px;
    background: ${COLOR.main};
    color: ${COLOR.white};
    font-size: 18px;
    transform: rotate(-90deg);
    border-radius: 5px;
  }
`;

export const ModelWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99;
  background-color: rgb(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModelContainer = styled.div`
  width: 1000px;
  & button {
    width: 100%;
    height: 60px;
    border: 1px solid white;
    color: white;
    font-size: 25px;
    margin-top: 40px;
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  height: 600px;
  & img {
    width: 400px;
    height: 100%;
  }
  & .infor {
    width: 550px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Infor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  & span {
    color: ${COLOR.sub_text};
    font-size: 15px;
    text-transform: uppercase;
  }
  & h3 {
    color: white;
    font-size: 25px;
    font-weight: 500;
  }
`;

export const ClothWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgb(0, 0, 0, 0.8);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ClothContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1500px;
  height: 800px;
  & img {
    width: 700px;
    height: 100%;
  }
  & div {
    width: 700px;
    & h1 {
      font-size: 48px;
      color: white;
      font-weight: 500;
    }
    & .style-code {
      color: ${COLOR.sub_text};
      font-size: 20px;
      font-weight: 500;
      margin-top: 5px;
    }
    & .line {
      width: 100%;
      height: 1px;
      background-color: ${COLOR.sub_text};
      margin-top: 30px;
    }
    & p {
      color: white;
      font-size: 18px;
      margin-top: 30px;
    }
    & button {
      width: 100%;
      height: 60px;
      font-size: 25px;
      color: white;
      margin-top: 30px;
      border: 1px solid white;
    }
  }
`;
