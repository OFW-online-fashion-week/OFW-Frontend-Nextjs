import styled from "@emotion/styled";
import { BaseContainer, COLOR } from "../../../styles";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.7);
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(5px);
  & input {
    border: none;
    border-bottom: 1px solid white;
    padding-bottom: 10px;
    color: white;
    font-size: 17px;
    font-weight: 300;
    width: 100%;
    margin-top: 30px;
    &::placeholder {
      color: white;
    }
  }
  & textarea {
    width: 100%;
    height: 150px;
    border: 1px solid white;
    padding: 20px;
    color: white;
    font-size: 17px;
    font-weight: 300;
    margin-top: 30px;
    &::placeholder {
      color: white;
    }
  }
  & .btn {
    width: 100%;
    height: 50px;
    font-size: 20px;
    font-weight: 500;
    border: 1px solid white;
    &:first-of-type {
      color: white;
      margin-top: 30px;
    }
    &:last-of-type {
      background-color: white;
      color: black;
      margin-top: 10px;
    }
  }
`;

export const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  padding-top: 100px;
  & h1 {
    font-weight: 400;
    color: white;
    font-size: 20px;
  }
  & h3 {
    font-weight: 400;
    color: ${COLOR.sub_text};
    font-size: 16px;
    margin-top: 5px;
  }
`;

export const CoverUpload = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px dashed white;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
`;

export const CoverImg = styled.img`
  width: 200px;
  border-radius: 50%;
  height: 200px;
  margin-top: 30px;
`;
