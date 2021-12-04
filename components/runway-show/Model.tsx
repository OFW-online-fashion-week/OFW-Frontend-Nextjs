import * as S from "./styles";
import { useEffect, useState } from "react";
import runway from "../../api/runway";

function Infor({ title, content }) {
  return (
    <S.Infor>
      <span>{title}</span>
      <h3>{content}</h3>
    </S.Infor>
  );
}

export default function Model({ offModal, model_id }) {
  const [data, setData] = useState<any>();
  useEffect(() => {
    runway.getModelDetail(model_id).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <S.ModelWrapper>
      {data && (
        <S.ModelContainer>
          <S.FlexWrap>
            <img src={data.profile_url} />
            <div className="infor">
              <Infor title="name" content={data.name} />
              <Infor title="email" content={data.email} />
              <Infor title="description" content={data.introduction} />
              <Infor title="height" content={data.height + "cm"} />
              <Infor title="weight" content={data.weight + "kg"} />
              <Infor title="nation" content={data.nation} />
            </div>
          </S.FlexWrap>
          <button onClick={offModal}>CLOSE</button>
        </S.ModelContainer>
      )}
    </S.ModelWrapper>
  );
}
