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
