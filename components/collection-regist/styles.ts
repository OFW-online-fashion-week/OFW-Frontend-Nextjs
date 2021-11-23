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
