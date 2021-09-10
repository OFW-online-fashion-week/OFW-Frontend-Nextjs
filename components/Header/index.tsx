import { LogoIcon } from "../../assets";
import * as S from "./styles";

export default function Header() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.WebLogo>
          <LogoIcon />
        </S.WebLogo>
        <S.MenuWrap>
          <span>collections</span>
          <span>Brands</span>
          <span>Models</span>
          <span>About</span>
        </S.MenuWrap>
      </S.Container>
    </S.Wrapper>
  );
}
