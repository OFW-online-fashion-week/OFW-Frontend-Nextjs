import styled from "@emotion/styled";
import { BaseContainer, COLOR } from "../../styles";
import { BaseWrapper } from "./../../styles/index";

export const Wrapper = styled(BaseWrapper)``;

export const Container = styled(BaseContainer)`
  width: 700px;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

export const FileBtnWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 30px;
  gap: 10px;
  & div {
    padding: 10px 10px;
    border: 1px solid black;
    color: black;
    font-size: 15px;
    cursor: pointer;
  }
  & span {
    color: ${COLOR.sub_text};
    font-size: 15px;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  box-shadow: 0px 0px 5px rgb(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 13px 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  & h1 {
    font-size: 17px;
    font-weight: 400;
    color: black;
  }
  & span {
    color: ${COLOR.text};
    font-size: 15px;
    font-weight: 300;
  }
`;

export const Create = styled.button`
  width: 100%;
  font-size: 17px;
  font-weight: 400;
  color: ${COLOR.sub_text};
  padding: 15px 10px;
  text-align: left;
  &:hover {
    text-decoration: underline;
  }
`;
