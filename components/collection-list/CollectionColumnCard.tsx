import * as S from "./styles";
import { CollectionCard } from "./../../lib/interfaces/collection";
import { useRouter } from "next/dist/client/router";
import { useCallback } from "react";

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
  const router = useRouter();

  const routingToCollection = useCallback(() => {
    router.push(`/collections/${id}`);
  }, []);

  return (
    <S.ColumnCard>
      {isAdd ? (
        <button
          className="add-wrap"
          onClick={() => router.push("/collectionRegist")}
        >
          +
        </button>
      ) : (
        <img
          src={coverImg}
          onClick={routingToCollection}
          className="cover-img"
        />
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
