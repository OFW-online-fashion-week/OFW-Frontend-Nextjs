import * as S from "./styles";
import { CollectionCard } from "./../../lib/interfaces/collection";

export default function CollectionRowCard({
  title,
  description,
  runwayPath,
  id,
}: CollectionCard) {
  return (
    <S.RowCard>
      <video className="cover-img" src={runwayPath} />
      <div>
        <h1 className="collection-title">{title}</h1>
        <p className="collection-description">{description}</p>
      </div>
    </S.RowCard>
  );
}
