import * as S from "./styles";

export default function BrandDetail() {
  return (
    <S.Wrapper>
      <img
        src="https://cdn.shopify.com/s/files/1/0048/6817/7984/products/il_fullxfull.1540907234_91wa_1024x1024.jpg?v=1549647535"
        className="brand-cover-image"
      />
      <S.Container>
        <div className="description">
          {" "}
          Pioneer of the ‘New Look’ that would influence the style of the 1950s,
          there are few designers quite as influential as Christian Dior. <br />{" "}
          An icon then and now, the French maison continues to be a leading
          force in innovative fashion. From the inimitable Saddle bag to <br />
          sought-after accessories and vintage clothing, start the next chapter
          of the story with our selection of pre-owned Christian Dior.
        </div>
      </S.Container>
    </S.Wrapper>
  );
}
