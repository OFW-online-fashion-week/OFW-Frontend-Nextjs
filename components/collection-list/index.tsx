import { ColumnListIcon, RowListIcon } from "../../assets";
import CollectionColumnList from "./CollectionColumnList";
import CollectionRowList from "./CollectionRowList";
import React from "react";
import * as S from "./styles";

export default function CollectionList({ dataList, margin, isMine }) {
  const [isColumn, setIsColumn] = React.useState(true);

  const sortToColumn = React.useCallback(() => {
    setIsColumn(true);
  }, []);

  const sortToRow = React.useCallback(() => {
    setIsColumn(false);
  }, []);

  return (
    <S.Container style={{ paddingTop: `${margin}px` }}>
      <S.ListShowMethodSelector>
        <RowListIcon isColumn={isColumn} callback={sortToRow} />
        <ColumnListIcon isColumn={isColumn} callback={sortToColumn} />
      </S.ListShowMethodSelector>
      {isColumn ? (
        <CollectionColumnList data={dataList} isMine={isMine} />
      ) : (
        <CollectionRowList data={dataList} />
      )}
    </S.Container>
  );
}
