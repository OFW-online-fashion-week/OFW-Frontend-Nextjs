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
  & video {
    width: 100%;
    height: 100%;
    object-fit: fill;
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
