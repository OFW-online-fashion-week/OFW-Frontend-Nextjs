import styled from "@emotion/styled";
import { BaseWrapper, COLOR } from "./../../styles/index";

export const Wrapper = styled(BaseWrapper)``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & .question {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 15px;
    & span {
      text-decoration: underline;
      color: ${COLOR.text};
      font-weight: 300;
      font-size: 15px;
      cursor: pointer;
    }
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-top: 20px;
`;

export const ChangeWrap = styled.div`
  border-radius: 24px;
  border: 1px solid ${COLOR.text};
  width: 110px;
  padding: 3px;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  position: relative;
  & span {
    font-size: 12px;
    color: ${COLOR.text};
    margin: 0 5px;
  }
  & button {
    width: 40%;
    height: calc(100% - 6px);
    border-radius: 24px;
    position: absolute;
    background: ${COLOR.main};
    margin: 0 3px;
  }
`;

export const Or = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 15px 0;
  color: ${COLOR.sub_text};
  font-weight: 300;
  &::after,
  ::before {
    content: "";
    width: 100px;
    height: 1px;
    background: ${COLOR.sub_text};
  }
`;
