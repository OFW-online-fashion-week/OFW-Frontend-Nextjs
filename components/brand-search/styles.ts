import styled from "@emotion/styled";
import { BaseContainer, BaseWrapper } from "../../styles";

export const Wrapper = styled(BaseWrapper)``;

export const Container = styled(BaseContainer)`
  margin-top: 30px;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(4, 180px);
  grid-row-gap: 60px;
  justify-content: space-between;
`;

export const SpellCard = styled.div`
  width: 100%;
  word-break: break-all;
  .title {
    font-size: 30px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .brand-name {
    font-size: 18px;
    font-weight: 300;
    margin-top: 20px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
