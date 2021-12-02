import * as S from "./styles";
import Text from "./../ui/Text/index";
import RunwayList from "./RunwayList";
import { useEffect, useState } from "react";
import collection from "../../api/collection";
import { useRouter } from "next/dist/client/router";

export default function CollectionDetail() {
  const router = useRouter();
  const [data, setData] = useState<any>();
  const id = router.query.id;
  useEffect(() => {
    if (id !== undefined) {
      console.log(id);
      collection.getCollectionDetail(id).then((res) => {
        setData(res.data);
      });
    }
  }, [router]);
  return (
    <S.Wrapper>
      {data && (
        <S.Container>
          <Text
            size={60}
            contents={data.title}
            weight="reguler"
            center={true}
          />
          <p className="description">{data.description}</p>
          <S.SeeMore>see more</S.SeeMore>
          <h1 className="sub-title">Designer</h1>
          <S.DesingerWrap>
            <img src={data.designerProfile} />
            <div className="designer-infor">
              <div className="flex">
                <Text contents={data.designerName} size={24} weight="reguler" />
                <Text
                  contents={data.designerEmail}
                  size={16}
                  weight="thin"
                  color="gray"
                />
              </div>
              <p className="designer-description">{data.designerDescription}</p>
            </div>
          </S.DesingerWrap>
        </S.Container>
      )}
      {id && <RunwayList id={id} />}
    </S.Wrapper>
  );
}
