import "../styles/globals.css";
import Header from "./../components/Header/index";
import styled from "@emotion/styled";
import { HEADER_HEIGHT } from "../styles";

const HeaderHeightMargin = styled.div`
  padding-top: ${HEADER_HEIGHT};
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <HeaderHeightMargin />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
