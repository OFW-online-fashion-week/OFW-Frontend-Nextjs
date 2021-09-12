import PageToCollections from "./PageToCollections";
import PageToIntro from "./PageToIntro";
import * as S from "./styles";

export default function MainPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <PageToIntro />
        <PageToCollections />
        <PageToCollections />
      </S.Container>
    </S.Wrapper>
  );
}
