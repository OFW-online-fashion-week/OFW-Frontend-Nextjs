import styled from "@emotion/styled";
import { BaseWrapper, COLOR } from "./../../styles/index";

export const Wrapper = styled(BaseWrapper)``;

export const Container = styled.div`
  width: 700px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid ${COLOR.sub_text};
  color: ${COLOR.sub_text};
  font-size: 16px;
  font-weight: 300;
  padding: 10px 20px;
  height: 160px;
  margin-top: 30px;
`;

export const CoverUpload = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const BrandImg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  & button {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px dashed ${COLOR.sub_text};
    color: ${COLOR.sub_text};
    font-size: 16px;
    font-weight: 300;
  }
`;
