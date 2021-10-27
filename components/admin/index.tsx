import { AdimLogoIcon } from "../../assets";
import * as S from "./styles";
import BrandCard from "./BrandCard";

export default function Admin() {
  return (
    <S.Wrapper>
      <S.Header>
        <AdimLogoIcon />
      </S.Header>
      <S.Infor>
        <h1>Brand List</h1>
        <p>Seeing all brand list in here for you</p>
      </S.Infor>
      <BrandCard />
      <BrandCard />
      <BrandCard />
      <BrandCard />
    </S.Wrapper>
  );
}
