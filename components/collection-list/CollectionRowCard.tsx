import * as S from "./styles";
import { CollectionCard } from "./../../lib/interfaces/collection";

export default function CollectionRowCard({
  title,
  description,
  coverImg,
  id,
}: CollectionCard) {
  return (
    <S.RowCard>
      <img className="cover-img" src={coverImg} />
      <div>
        <h1 className="collection-title">{title}</h1>
        <p className="collection-description">{description}</p>
      </div>
    </S.RowCard>
  );
}
