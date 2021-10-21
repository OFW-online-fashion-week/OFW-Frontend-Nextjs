import { HeartIcon, LinkIcon } from "../../assets";
import CollectionList from "../collection-list";
import * as S from "./styles";

export default function BrandDetail() {
  return (
    <S.Wrapper>
      <S.BiggiestContainer>
        <img
          src="https://cdn.shopify.com/s/files/1/0048/6817/7984/products/il_fullxfull.1540907234_91wa_1024x1024.jpg?v=1549647535"
          className="brand-cover-image"
        />
        <S.Container>
          <div className="top-bar">
            <img
              className="profile-image"
              src="https://img.freepik.com/free-vector/heraldry-lion-brand-logo-design_260747-104.jpg?size=338&ext=jpg"
            />
            <h1 className="brand-name">Adder Error</h1>
            <div className="icon-wrap">
              <LinkIcon callback={() => {}} />
              <HeartIcon check={true} callback={() => {}} />
            </div>
          </div>
          <div className="description">
            Pioneer of the ‘New Look’ that would influence the style of the
            1950s, there are few designers quite as influential as Christian
            Dior. <br /> An icon then and now, the French maison continues to be
            a leading force in innovative fashion. From the inimitable Saddle
            bag to <br />
            sought-after accessories and vintage clothing, start the next
            chapter of the story with our selection of pre-owned Christian Dior.
          </div>
          <CollectionList margin={30} isMine={true} />
        </S.Container>
      </S.BiggiestContainer>
    </S.Wrapper>
  );
}
