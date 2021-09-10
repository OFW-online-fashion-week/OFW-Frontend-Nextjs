import styled from "@emotion/styled";
import { BaseWrapper, BaseContainer } from "../../styles";
import { COLOR } from "./../../styles/index";

export const Wrapper = styled(BaseWrapper)``;

export const Container = styled(BaseContainer)`
  width: 1050px;
`;

export const ListShowMethodSelector = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  & svg {
    cursor: pointer;
  }
`;

export const ColumnCardList = styled.div`
  margin-top: 30px;
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
