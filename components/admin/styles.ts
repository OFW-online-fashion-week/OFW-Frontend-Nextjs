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

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.6);
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 800px;
  height: 500px;
  background-color: ${COLOR.admin_background};
  border-radius: 10px;
  padding: 50px;
`;

export const BrandProfileInfor = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  & img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }
  & h1 {
    color: ${COLOR.white};
    font-size: 40px;
    margin-left: 30px;
  }
  & .btn-wrap {
    position: absolute;
    right: 0;
    display: flex;
    gap: 20px;
    & button {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      &:first-of-type {
        background-color: ${COLOR.pink};
      }
      &:last-of-type {
        background-color: ${COLOR.main};
      }
    }
  }
`;

export const LineTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  & span {
    color: ${COLOR.sub_text};
    font-size: 13px;
  }
  & div {
    width: 300px;
    height: 1px;
    background-color: ${COLOR.sub_text};
  }
`;

export const Email = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: ${COLOR.white};
  margin-top: 20px;
`;

export const Description = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  color: ${COLOR.white};
`;
