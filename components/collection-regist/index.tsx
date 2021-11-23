import * as S from "./styles";
import Text from "./../ui/Text/index";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function CollectionRegist() {
  return (
    <S.Wrapper>
      <S.Contaienr>
        <Text size={20} contents="COLLECTION REGISTRATION" />
        <Text
          size={13}
          color="gray"
          marginTop={5}
          contents="REGISTRATE NEW SEASON FOR THE SEASON"
          weight="thin"
        />
        <Input
          fontSize={15}
          placeholder="Title"
          border="bottom"
          color="gray"
          columnPadding={10}
          marginTop={50}
          fontWeight="thin"
        />
        <textarea placeholder="Description" />
        <Input
          fontSize={15}
          placeholder="Designer"
          border="bottom"
          color="gray"
          columnPadding={10}
          marginTop={50}
          fontWeight="thin"
        />
        <Button
          fontSize={20}
          isBlack={true}
          contents="SUBMIT"
          columnPadding={10}
          marginTop={50}
        />
      </S.Contaienr>
    </S.Wrapper>
  );
}
