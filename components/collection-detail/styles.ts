import styled from "@emotion/styled";
import { BaseContainer, BaseWrapper, COLOR } from "./../../styles/index";

export const Wrapper = styled(BaseWrapper)``;

export const Container = styled(BaseContainer)`
  display: flex;
  justify-content: center;
  & .description {
    text-align: center;
    width: 1120px;
    color: ${COLOR.text};
    font-size: 18px;
    font-weight: 300;
    margin-top: 20px;
  }
  & .sub-title {
    font-size: 35px;
    font-weight: 400;
    color: ${COLOR.text};
    margin-top: 50px;
    text-align: center;
  }
`;

export const SeeMore = styled.div`
  font-size: 14px;
  color: ${COLOR.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  &::before,
  ::after {
    margin: 0 20px;
    content: "";
    width: 100px;
    height: 1px;
    background: ${COLOR.text};
  }
`;

export const DesingerWrap = styled.div`
  display: flex;
  width: 1120px;
  gap: 50px;
  margin-top: 30px;
  & img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
  & .designer-infor {
    display: flex;
    flex-direction: column;
    & .flex {
      display: flex;
      align-items: flex-end;
      gap: 15px;
    }
    & .designer-description {
      margin-top: 15px;
      font-size: 18px;
      font-weight: 300;
      color: ${COLOR.text};
      word-break: break-all;
    }
  }
`;
