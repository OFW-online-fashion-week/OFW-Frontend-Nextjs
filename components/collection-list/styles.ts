import styled from "@emotion/styled";
import { BaseWrapper, BaseContainer } from "../../styles";
import { COLOR } from "./../../styles/index";

export const Wrapper = styled(BaseWrapper)``;

export const Container = styled(BaseContainer)`
  width: 100%;
  padding-bottom: 100px;
`;

export const ListShowMethodSelector = styled.div`
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  & svg {
    cursor: pointer;
  }
`;

export const ColumnCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 320px);
  grid-row-gap: 50px;
  justify-content: space-between;
`;

export const ColumnCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .cover-img {
    width: 100%;
    height: 480px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      opacity: 0.7;
    }
  }
  .collection-title {
    font-size: 22px;
    margin-top: 25px;
    cursor: pointer;
    transition: 0.5s;
    text-transform: uppercase;
    &:hover {
      opacity: 0.7;
    }
  }
  .collection-description {
    font-size: 16px;
    color: ${COLOR.text};
    margin-top: 15px;
    font-weight: 300;
  }
`;

export const RowCardList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const RowCard = styled.div`
  width: 100%;
  display: flex;
  .cover-img {
    width: 205px;
    height: 310px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      opacity: 0.7;
    }
  }
  & div {
    width: calc(100% - 205px);
    display: flex;
    flex-direction: column;
    word-break: break-all;
    padding-left: 50px;
    .collection-title {
      font-size: 30px;
      font-weight: 400;
      text-transform: uppercase;
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        opacity: 0.7;
      }
    }
    .collection-description {
      color: ${COLOR.text};
      font-size: 17px;
      font-weight: 300;
      margin-top: 20px;
    }
  }
`;
