import styled from "@emotion/styled";
import { BaseWrapper, BaseContainer, COLOR } from "./../../styles/index";

export const Wrapper = styled(BaseWrapper)``;

export const Contaienr = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  padding-top: 50px;
  & textarea {
    margin-top: 50px;
    height: 200px;
    padding: 10px;
    border: 1px solid ${COLOR.sub_text};
    font-size: 15px;
    font-weight: 300;
    color: ${COLOR.text};
    &::placeholder {
      color: ${COLOR.sub_text};
    }
  }
`;

export const DesignerWrap = styled.div`
  width: 100%;
  box-shadow: 0px 0px 5px rgb(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

export const DProfile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 13px 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
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

export const DCreate = styled.button`
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

export const ChooseDesigner = styled.div`
  width: 100%;
  margin-top: 20px;
  font-size: 18px;
  color: black;
  display: flex;
  align-items: center;
  & span {
    color: ${COLOR.sub_text};
    font-size: 14px;
    margin-left: 10px;
  }
`;
