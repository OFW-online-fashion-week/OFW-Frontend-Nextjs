import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import collection from "../../api/collection";
import { useEffect, useState } from "react";

export default function RunwayList({ id }) {
  const router = useRouter();
  const [data, setData] = useState([]);
  useEffect(() => {
    collection.getCollectionRunway(id).then((res) => {
      setData(res.data.runwayContentResponseList);
    });
  }, []);
  return (
    <S.RunwayWrap>
      <h1>Runways</h1>
      <S.RunwayList>
        {data.map((obj, index) => (
          <div className="cover-wrap" key={index}>
            <video
              onClick={() => router.push(`/runway?id=${obj.id}`)}
              src={obj.runway_url}
            />
          </div>
        ))}
      </S.RunwayList>
    </S.RunwayWrap>
  );
}
