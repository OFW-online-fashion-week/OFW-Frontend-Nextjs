import { HeartIcon, LogoIcon, UserIcon } from "../../assets";
import * as S from "./styles";
import { useCallback } from "react";
import { useRouter } from "next/dist/client/router";

export default function Header() {
  const router = useRouter();

  const routingToMain = useCallback(() => {
    router.push("/");
  }, []);

  const routing = useCallback(({ target }) => {
    if (target.id !== "menu-wrap") {
      router.push(`/${target.innerHTML}`);
    }
  }, []);

  const routingToAuth = useCallback(() => {
    router.push("/auth/user");
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.IconWrap>
          <HeartIcon
            check={false}
            color="black"
            size={20}
            callback={() => router.push("/like")}
          />
          <UserIcon callback={routingToAuth} />
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
