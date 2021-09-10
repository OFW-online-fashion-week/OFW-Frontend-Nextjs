import React from "react";
import * as S from "./styles";
import SpellCard from "./SpellCard";

export default function BrandSearch() {
  const [spellArr, setSpellArr] = React.useState<string[]>([]);

  React.useEffect(() => {
    let tmpArr = [];
    for (let i = 97; i <= 122; i++) {
      tmpArr.push(String.fromCharCode(i));
    }
    setSpellArr(tmpArr);
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        {spellArr.map((item, index) => (
          <SpellCard spell={item} key={index} />
        ))}
      </S.Container>
    </S.Wrapper>
  );
}
