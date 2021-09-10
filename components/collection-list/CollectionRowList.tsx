import { CollectionCard } from "./../../lib/interfaces/collection";
import CollectionRowCard from "./CollectionRowCard";
import * as S from "./styles";

export default function CollectionRowList({ data }) {
  return (
    <S.RowCardList>
      {data.map((item: CollectionCard, index) => (
        <CollectionRowCard
          key={index}
          title={item.title}
          description={item.description}
          coverImg={item.coverImg}
          id={item.id}
        />
      ))}
    </S.RowCardList>
  );
}
