import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import brand from "../../api/brand";

export default function BrandSearch() {
  const [spellArr, setSpellArr] = React.useState<string[]>([]);
  const [nowSpell, setNowSpell] = useState<any>("a");
  const [brandArr, setBrandArr] = useState<any[]>([]);
  const router = useRouter();
  React.useEffect(() => {
    let tmpArr = [];
    for (let i = 97; i <= 122; i++) {
      tmpArr.push(String.fromCharCode(i));
    }
    setSpellArr(tmpArr);
  }, []);
  useEffect(() => {
    brand.getBrandList(nowSpell).then((res) => {
      setBrandArr(res.data.brandContentResponseList);
    });
  }, []);
  return (
    <S.Wrapper>
      <S.SideWrap>
        {spellArr.map((spell, index) => (
          <button
            key={index}
            className={nowSpell === spell ? "active" : ""}
            onClick={() => setNowSpell(spell)}
          >
            {spell}
          </button>
        ))}
      </S.SideWrap>
      <S.Container>
        <h1 className="title">
          A<b>PART</b>
        </h1>
        <S.BrandContainer>
          {brandArr.map((brand, index) => (
            <span
              key={index}
              onClick={() => router.push(`/brands/${brand.id}`)}
            >
              {brand.name}
            </span>
          ))}
        </S.BrandContainer>
      </S.Container>
    </S.Wrapper>
  );
}
