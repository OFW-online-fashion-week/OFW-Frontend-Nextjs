import styled from "@emotion/styled";
import { COLOR } from "../../styles";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  background: ${COLOR.admin_background};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Header = styled.header`
  width: 100%;
  height: 100px;
  border-top: 10px solid ${COLOR.yellow};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;
`;

export const Infor = styled.div`
  width: 920px;
  display: flex;
  flex-direction: column;
  & h1 {
    color: ${COLOR.white};
    font-size: 28px;
    font-weight: 400;
  }
  & p {
    color: ${COLOR.sub_text};
    font-size: 16px;
  }
`;

export const BrandCard = styled.div`
  width: 920px;
  display: flex;
  align-items: center;
  position: relative;
  padding-bottom: 30px;
  border-bottom: 1px solid ${COLOR.sub_text};
  & img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  & .infor-wrap {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    & h1 {
      color: ${COLOR.white};
      font-size: 24px;
      font-weight: 400;
    }
    & h3 {
      color: ${COLOR.sub_text};
      font-size: 15px;
      font-weight: 300;
    }
  }
  & .control-wrap {
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 20px;
    & .view {
      width: 100px;
      height: 30px;
      color: ${COLOR.white};
      border: 1px solid ${COLOR.white};
      font-size: 18px;
      font-weight: 300;
    }
    & .btn-wrap {
      display: flex;
      justify-content: flex-end;
      gap: 20px;
      & button {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: ${COLOR.main};
        &:nth-last-of-type(1) {
          background: #f7347a;
        }
      }
    }
  }
`;
