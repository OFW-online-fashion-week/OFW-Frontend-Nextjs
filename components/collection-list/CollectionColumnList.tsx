import { useEffect, useState } from "react";
import { CollectionCard } from "./../../lib/interfaces/collection";
import CollectionColumnCard from "./CollectionColumnCard";
import * as S from "./styles";

interface Props {
  data: CollectionCard[];
  isMine?: boolean;
}

export default function CollectionColumnList({ data, isMine = false }: Props) {
  const [arr, setArr] = useState(data);

  useEffect(() => {
    if (isMine) {
      setArr([
        {
          title: "Add Collection",
          description: "Add your new collection for new season",
          coverImg: "",
          id: "",
          isAdd: true,
        },
        ...arr,
      ]);
    }
  }, []);

  return (
    <S.ColumnCardList>
      {arr.map((item: CollectionCard, index) => (
        <CollectionColumnCard
          key={index}
          title={item.title}
          description={item.description}
          coverImg={item.coverImg}
          id={item.id}
          isAdd={item.isAdd}
        />
      ))}
    </S.ColumnCardList>
  );
}
