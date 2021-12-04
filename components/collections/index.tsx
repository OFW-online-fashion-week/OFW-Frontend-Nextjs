import { BaseContainer, BaseWrapper, HEADER_HEIGHT } from "../../styles";
import CollectionList from "../collection-list/index";
import { useEffect, useState } from "react";
import collection from "../../api/collection";
export default function Collections() {
  const [data, setData] = useState([]);
  useEffect(() => {
    collection.getAllCollection().then((res) => {
      setData(res.data.collectionContentResponses);
    });
  }, []);
  return (
    <BaseWrapper>
      <BaseContainer style={{ width: "1050px" }}>
        <CollectionList margin={HEADER_HEIGHT} dataList={data} isMine={false} />
      </BaseContainer>
    </BaseWrapper>
  );
}
