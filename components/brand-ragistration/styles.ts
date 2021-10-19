import styled from "@emotion/styled";
import { BaseWrapper, COLOR, HEADER_HEIGHT } from "./../../styles/index";

export const Wrapper = styled(BaseWrapper)`
  padding-top: 0;
`;

export const Container = styled.div`
  width: 700px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  padding-top: ${HEADER_HEIGHT};
  & input[type="file"] {
    display: none;
  }
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
  & div,
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    cursor: pointer;
  }
  & img {
    border: 1px solid rgb(230, 230, 230);
  }
  & div {
    border: 1px dashed ${COLOR.sub_text};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLOR.sub_text};
    font-size: 16px;
    font-weight: 300;
  }
`;

export const BrandPageWrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgb(0, 0, 0, 0.3);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  & .preview {
    width: 800px;
    background: white;
    position: relative;
    height: 650px;
  }
  & .cover-img {
    width: 100%;
    height: 150px;
  }
  & .brand-info {
    width: 100%;
    padding: 0 50px;
    position: absolute;
    z-index: 2;
    margin-top: 70px;
    & .flex-wrap {
      display: flex;
      align-items: flex-end;
      position: relative;
      & img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 1px solid ${COLOR.sub_text};
      }
      & .icon-wrap {
        display: flex;
        position: absolute;
        right: 0;
        bottom: 0;
        gap: 15px;
      }
    }
  }
  & p {
    color: ${COLOR.sub_text};
    font-size: 16px;
    margin-top: 15px;
    word-break: break-all;
  }
  & .list-wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    & div {
      width: 31%;
      height: 260px;
      background: rgb(0, 0, 0, 0.1);
    }
  }
`;
