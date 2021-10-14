import { HeartIcon, LogoIcon, UserIcon } from "../../assets";
import * as S from "./styles";
import React from "react";
import { useRouter } from "next/dist/client/router";

export default function Header() {
  const router = useRouter();

  const routingToMain = React.useCallback(() => {
    router.push("/");
  }, []);

  const routing = React.useCallback(({ target }) => {
    if (target.id !== "menu-wrap") {
      router.push(`/${target.innerHTML}`);
    }
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.IconWrap>
          <HeartIcon check={false} color="black" size={20} />
          <UserIcon />
        </S.IconWrap>
        <S.WebLogo onClick={routingToMain}>
          <LogoIcon />
        </S.WebLogo>
        <S.MenuWrap onClick={routing} id="menu-wrap">
          <span>collections</span>
          <span>brands</span>
          <span>models</span>
          <span>about</span>
        </S.MenuWrap>
      </S.Container>
    </S.Wrapper>
  );
}
