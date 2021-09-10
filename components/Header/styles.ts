import styled from "@emotion/styled";
import { BaseWrapper, HEADER_HEIGHT } from "../../styles";
import { COLOR } from "./../../styles/index";

export const Wrapper = styled(BaseWrapper)`
  border-top: 6px solid ${COLOR.main};
  height: ${HEADER_HEIGHT};
  position: fixed;
  z-index: 5;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WebLogo = styled.div`
  margin-top: 25px;
`;

export const MenuWrap = styled.div`
  margin-top: 30px;
  width: 500px;
  display: flex;
  justify-content: space-between;
  & span {
    text-transform: capitalize;
    font-size: 18px;
  }
`;
