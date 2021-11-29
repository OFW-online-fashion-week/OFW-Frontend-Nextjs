import React, { useState } from "react";
import * as S from "./styles";
import { useRouter } from "next/dist/client/router";

export default function BrandSearch() {
  const [spellArr, setSpellArr] = React.useState<string[]>([]);
  const [nowSpell, setNowSpell] = useState<any>("a");
  const router = useRouter();
  React.useEffect(() => {
    let tmpArr = [];
    for (let i = 97; i <= 122; i++) {
      tmpArr.push(String.fromCharCode(i));
    }
    setSpellArr(tmpArr);
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
          <span onClick={() => router.push("/brands/1")}>adder error</span>
          <span onClick={() => router.push("/brands/1")}>adder error</span>
          <span onClick={() => router.push("/brands/1")}>adder error</span>
          <span onClick={() => router.push("/brands/1")}>adder error</span>
          <span onClick={() => router.push("/brands/1")}>adder error</span>
        </S.BrandContainer>
      </S.Container>
    </S.Wrapper>
  );
}
