import styled from "@emotion/styled";
import { BaseContainer, BaseWrapper, COLOR } from "../../styles";

export const Wrapper = styled(BaseWrapper)``;

export const SideWrap = styled.nav`
  position: absolute;
  width: 130px;
  left: 0;
  margin-left: 130px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 20px;
  & button {
    color: black;
    font-size: 24px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .active {
    color: ${COLOR.main};
    font-weight: bold;
    &::before {
      content: "⬝";
      color: ${COLOR.main};
      position: absolute;
      margin-right: 40px;
      margin-bottom: 3px;
    }
  }
`;

export const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  & .title {
    font-size: 200px;
    font-weight: 700;
    text-transform: uppercase;
    & b {
      font-size: 50px;
      margin-left: 50px;
    }
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
