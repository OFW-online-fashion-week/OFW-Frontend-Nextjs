import { LogoIcon } from "../../assets";
import * as S from "./styles";
import React from "react";
import { useRouter } from "next/dist/client/router";

export default function Header() {
  const router = useRouter();

  const routingToMain = React.useCallback(() => {
    router.push("/");
  }, []);

  const routing = React.useCallback(({ target }) => {
    router.push(`/${target.innerHTML}`);
  }, []);
  return (
    <S.Wrapper>
      <S.Container>
        <S.WebLogo onClick={routingToMain}>
          <LogoIcon />
        </S.WebLogo>
        <S.MenuWrap onClick={routing}>
          <span>collections</span>
          <span>Brands</span>
          <span>Models</span>
          <span>About</span>
        </S.MenuWrap>
      </S.Container>
    </S.Wrapper>
  );
}
