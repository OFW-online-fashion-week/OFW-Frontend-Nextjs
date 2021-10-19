import styled from "@emotion/styled";
import { BaseWrapper, COLOR } from "./../../styles/index";

export const Wrapper = styled(BaseWrapper)``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-top: 15px;
`;

export const Or = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 10px 0;
  color: ${COLOR.sub_text};
  font-weight: 300;
  &::after,
  ::before {
    content: "";
    width: 100px;
    height: 1px;
    background: ${COLOR.sub_text};
  }
`;
