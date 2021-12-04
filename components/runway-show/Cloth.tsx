import * as S from "./styles";
import { useEffect, useState } from "react";
import runway from "../../api/runway";

export default function Cloth({ id, offModal }) {
  const [data, setData] = useState<any[]>();
  useEffect(() => {
    runway.getClothDetail(id).then((res) => {
      setData(res.data.clothesDetailContentResponseList);
    });
  }, []);
  return (
    <S.ClothWrapper>
      {data && (
        <S.ClothContainer>
          <img src={data[0].image_path} />
          <div>
            <h1>{data[0].name}</h1>
            <h3 className="style-code">References : {data[0].style_code}</h3>
            <div className="line" />
            <p>{data[0].description}</p>
            <button onClick={offModal}>CLOSE</button>
          </div>
        </S.ClothContainer>
      )}
    </S.ClothWrapper>
  );
}
