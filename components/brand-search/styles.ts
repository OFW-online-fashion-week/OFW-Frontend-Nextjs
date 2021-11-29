import styled from "@emotion/styled";
import { BaseContainer, BaseWrapper } from "../../styles";

export const Wrapper = styled(BaseWrapper)``;

export const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  & .title {
    font-size: 200px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const BrandContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  & span {
    font-size: 20px;
    font-weight: 300;
    margin-top: 30px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
