import styled from "@emotion/styled";
import { BaseWrapper } from "../../styles";

export const Wrapper = styled(BaseWrapper)``;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MainSlider = styled.div`
  width: 100%;
  & img {
    width: 100%;
  }
`;
