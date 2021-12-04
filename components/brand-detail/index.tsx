import { HeartIcon, LinkIcon } from "../../assets";
import CollectionList from "../collection-list";
import * as S from "./styles";
import brand from "../../api/brand";
import { useEffect, useState } from "react";
import like from "../../api/like";
import { useRouter } from "next/dist/client/router";
import { BRAND_ID, USER_ID } from "../../lib/export/localstorage";
import { AUD } from "./../../lib/export/localstorage";

export default function BrandDetail() {
  const [data, setData] = useState<any>();
  const [collectionData, setCollectionData] = useState([]);
  const [isLike, setIsLike] = useState(false);
  const router = useRouter();
  const brand_id = router.query.id;
  useEffect(() => {
    if (brand_id) {
      if (localStorage.getItem(AUD) === "user") {
        brand.getIsLike(brand_id, localStorage.getItem(USER_ID)).then((res) => {
          setIsLike(res.data);
        });
      }
    }
  }, [brand_id]);
  useEffect(() => {
    brand.getBrandDetail(1).then((res) => {
      setData(res.data);
    });
  }, []);
  const requestLike = () => {
    if (isLike) {
      like.unLike(brand_id).then((res) => {});
      setIsLike(false);
    } else {
      like.like(brand_id).then((res) => {});
      setIsLike(true);
    }
  };
  useEffect(() => {
    const id = router.query.id;
    id &&
      brand.getBrandCollection(id).then((res) => {
        setCollectionData(res.data.collectionContentResponses);
      });
  }, [router]);

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
                <HeartIcon check={isLike} callback={requestLike} />
              </div>
            </div>
            <div className="description">{data.description}</div>
            <CollectionList
              margin={30}
              isMine={
                router.query.id === localStorage.getItem(BRAND_ID) &&
                localStorage.getItem(AUD) === "brand"
              }
              dataList={collectionData}
            />
          </S.Container>
        </S.BiggiestContainer>
      )}
    </S.Wrapper>
  );
}
