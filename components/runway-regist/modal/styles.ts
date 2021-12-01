import styled from "@emotion/styled";
import { COLOR } from "../../../styles";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  z-index: 40;
  position: absolute;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  & .title {
    color: white;
    font-size: 20px;
    font-weight: 400;
  }
  & .description {
    font-size: 15px;
    font-weight: 300;
    color: ${COLOR.sub_text};
    margin-top: 5px;
  }
`;

export const Container = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;
  height: 600px;
  & .none,
  img {
    width: 400px;
    height: 100%;
    cursor: pointer;
  }
  & .none {
    border: 1px dashed white;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
  }
  & input,
  select {
    width: 100%;
    color: white;
    font-size: 15px;
    padding-bottom: 10px;
    border: none;
    border-bottom: 1px solid white;
    font-weight: 300;
    background: none;
    outline: none;
    &::placeholder {
      color: white;
    }
  }
  & textarea {
    color: white;
    border: 1px solid white;
    padding: 10px;
    font-size: 15px;
    width: 100%;
    height: 100px;
    font-weight: 300;
    &::placeholder {
      color: white;
    }
  }
  & div {
    &:last-of-type {
      width: 540px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  & button {
    width: 100%;
    border: 1px solid white;
    height: 50px;
    font-size: 20px;
    &:first-of-type {
      color: white;
    }
    &:last-of-type {
      background-color: white;
      color: black;
    }
  }
`;
