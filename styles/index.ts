import styled from "@emotion/styled";

export const COLOR = {
  main: "#5AC18E",
  pink: "#F7347A",
  text: "#222222",
  sub_text: "#999999",
  white: "#fff",
  admin_background: "#222222",
  yellow: "#FFF68F",
};

export const HEADER_HEIGHT = "150px";

export const BaseWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: ${HEADER_HEIGHT};
  padding-bottom: 100px;
`;

export const BaseContainer = styled.div`
  width: 1150px;
  display: flex;
  flex-direction: column;
`;
