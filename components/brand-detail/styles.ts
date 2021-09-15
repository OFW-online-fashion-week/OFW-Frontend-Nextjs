import styled from "@emotion/styled";
import { BaseWrapper } from "../../styles";

export const Wrapper = styled(BaseWrapper)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .brand-cover-image {
    width: 100%;
    height: 250px;
    background: whitesmoke;
    position: absolute;
    z-index: -1;
  }
`;

export const BiggiestContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1120px;
  display: flex;
  flex-direction: column;
  margin-top: 130px;
  .top-bar {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }
  .profile-image {
    width: 220px;
    height: 220px;
    border-radius: 80%;
  }
  .brand-name {
    font-size: 70px;
    font-weight: 400;
    margin-left: 30px;
  }
  .description {
    width: 100%;
    text-align: center;
    font-size: 18px;
    margin-top: 30px;
  }
`;
