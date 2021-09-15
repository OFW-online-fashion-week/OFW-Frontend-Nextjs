import { BaseContainer, BaseWrapper, HEADER_HEIGHT } from "../../styles";
import CollectionList from "../collection-list/index";
export default function Collections() {
  return (
    <BaseWrapper>
      <BaseContainer style={{ width: "1050px" }}>
        <CollectionList margin={HEADER_HEIGHT} />
      </BaseContainer>
    </BaseWrapper>
  );
}
