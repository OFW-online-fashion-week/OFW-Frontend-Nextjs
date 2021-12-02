import styled from "@emotion/styled";
import { BaseContainer, BaseWrapper, COLOR } from "./../../styles/index";

export const Wrapper = styled(BaseWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0;
`;

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

export const RunwayWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  gap: 30px;
  & h1 {
    font-size: 36px;
    font-weight: 400;
    color: ${COLOR.text};
    text-align: center;
  }
`;

export const RunwayList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  & .cover-wrap {
    width: 100%;
    height: 960px;
    position: relative;
    overflow: hidden;
  }
  & video {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: 0.3s;
    object-fit: cover;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
