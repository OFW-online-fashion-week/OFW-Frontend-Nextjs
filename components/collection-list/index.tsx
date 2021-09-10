import { ColumnListIcon, RowListIcon } from "../../assets";
import { listData } from "./listData";
import CollectionColumnList from "./CollectionColumnList";
import CollectionRowList from "./CollectionRowList";
import React from "react";
import * as S from "./styles";

export default function CollectionList() {
  const [isColumn, setIsColumn] = React.useState<boolean>(true);

  const sortToColumn = React.useCallback(() => {
    setIsColumn(true);
  }, []);

  const sortToRow = React.useCallback(() => {
    setIsColumn(false);
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.ListShowMethodSelector>
          <RowListIcon isColumn={isColumn} callback={sortToRow} />
          <ColumnListIcon isColumn={isColumn} callback={sortToColumn} />
        </S.ListShowMethodSelector>
        {isColumn ? (
          <CollectionColumnList data={listData} />
        ) : (
          <CollectionRowList data={listData} />
        )}
      </S.Container>
    </S.Wrapper>
  );
}
