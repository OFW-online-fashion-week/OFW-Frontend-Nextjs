import { HeartIcon, LinkIcon } from "../../assets";
import CollectionList from "../collection-list";
import * as S from "./styles";
import brand from "../../api/brand";
import { useEffect, useState } from "react";

export default function BrandDetail() {
  const [data, setData] = useState<any>();
  useEffect(() => {
    brand.getBrandDetail(1).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <S.Wrapper>
      {data && (
        <S.BiggiestContainer>
          <img src={data.cover_url} className="brand-cover-image" />
          <S.Container>
            <div className="top-bar">
              <img className="profile-image" src={data.profile_url} />
              <h1 className="brand-name">{data.name}</h1>
              <div className="icon-wrap">
                <LinkIcon callback={() => window.open(data.url)} />
                <HeartIcon check={true} callback={() => {}} />
              </div>
            </div>
            <div className="description">{data.description}</div>
            <CollectionList margin={30} isMine={true} />
          </S.Container>
        </S.BiggiestContainer>
      )}
    </S.Wrapper>
  );
}
