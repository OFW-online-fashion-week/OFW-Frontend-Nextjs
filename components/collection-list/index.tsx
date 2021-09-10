import { ColumnListIcon, RowListIcon } from "../../assets";
import CollectionColumnCard from "./CollectionColumnCard";
import * as S from "./styles";

export default function CollectionList() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ListShowMethodSelector>
          <RowListIcon />
          <ColumnListIcon />
        </S.ListShowMethodSelector>
        <S.ColumnCardList>
          <CollectionColumnCard
            title="2020 Summer collections"
            description="this collection is very very amazing man."
            coverImg="https://t1.daumcdn.net/cfile/tistory/9940404B5BD6D1FA01"
            id="1"
          />
        </S.ColumnCardList>
      </S.Container>
    </S.Wrapper>
  );
}
