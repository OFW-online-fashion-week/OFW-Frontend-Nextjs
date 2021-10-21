import * as S from "./styles";
import { CollectionCard } from "./../../lib/interfaces/collection";

interface Props extends CollectionCard {
  isAdd?: boolean;
}

export default function CollectionColumnCard({
  title,
  description,
  coverImg,
  id,
  isAdd,
}: Props) {
  return (
    <S.ColumnCard>
      {isAdd ? (
        <button className="add-wrap">+</button>
      ) : (
        <img src={coverImg} className="cover-img" />
      )}
      <h1 className="collection-title">{title}</h1>
      <p className="collection-description">
        {description.length > 100
          ? `${description.substring(0, 100)}...`
          : description}
      </p>
    </S.ColumnCard>
  );
}
