import * as S from "./styles";
import Text from "./../ui/Text/index";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function BrandRegistration() {
  return (
    <S.Wrapper>
      <S.Container>
        <Text size={20} weight="reguler" contents="BRAND REGISTRATION" />
        <Text
          size={15}
          weight="thin"
          color="gray"
          contents="WELCOME TO OUR SITE"
        />
        <S.BrandImg>
          <button>Brnad Image</button>
        </S.BrandImg>
        <Input
          fontSize={16}
          fontWeight="thin"
          color="gray"
          border="bottom"
          placeholder="Name"
          columnPadding={15}
          marginTop={10}
        />
        <Input
          fontSize={16}
          fontWeight="thin"
          color="gray"
          border="bottom"
          placeholder="E-mail"
          columnPadding={15}
          marginTop={15}
        />
        <Input
          fontSize={16}
          fontWeight="thin"
          color="gray"
          border="bottom"
          placeholder="URL"
          columnPadding={15}
          marginTop={15}
        />
        <S.TextArea placeholder="Description" />
        <S.CoverUpload>
          <Button
            isFull={false}
            columnPadding={5}
            rowPadding={13}
            fontSize={16}
            fontWeight="thin"
            isBlack={false}
            contents="Cover Image"
          />
          <Text
            contents="file is empty"
            color="gray"
            size={16}
            marginLeft={20}
            weight="thin"
          />
        </S.CoverUpload>
        <Button
          isBlack={false}
          fontSize={18}
          columnPadding={15}
          contents="PREVIEW"
          marginTop={30}
        />
        <Button
          isBlack={true}
          fontSize={18}
          columnPadding={15}
          contents="SUBMIT"
          marginTop={20}
        />
      </S.Container>
    </S.Wrapper>
  );
}
