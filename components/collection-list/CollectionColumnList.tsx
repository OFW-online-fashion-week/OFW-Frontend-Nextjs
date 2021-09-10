import { CollectionCard } from "./../../lib/interfaces/collection";
import CollectionColumnCard from "./CollectionColumnCard";
import * as S from "./styles";

export default function CollectionColumnList({ data }) {
  return (
    <S.ColumnCardList>
      {data.map((item: CollectionCard, index) => (
        <CollectionColumnCard
          key={index}
          title={item.title}
          description={item.description}
          coverImg={item.coverImg}
          id={item.id}
        />
      ))}
    </S.ColumnCardList>
  );
}
