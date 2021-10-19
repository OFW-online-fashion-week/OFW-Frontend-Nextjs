import * as S from "./styles";
import Text from "./../ui/Text/index";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function UserAuth() {
  return (
    <S.Wrapper>
      <S.Container>
        <Text size={30} weight="reguler" contents="OFW Auth" marginTop={30} />
        <Text
          size={15}
          weight="thin"
          contents="WELCOME TO LOGIN HERE"
          marginTop={9}
          color="gray"
        />
        <S.InputWrap>
          <Input
            isFull={true}
            fontSize={18}
            fontWeight="thin"
            rowPadding={15}
            columnPadding={13}
            placeholder="write your email"
          />
          <Input
            isFull={true}
            fontSize={18}
            fontWeight="thin"
            rowPadding={15}
            columnPadding={13}
            placeholder="write your password"
            marginTop={5}
            type="password"
          />
          <Button
            fontSize={20}
            fontWeight="bold"
            isBlack={true}
            contents="LOGIN"
            columnPadding={13}
            isFull={true}
            marginTop={15}
          />
          <S.Or>or</S.Or>
          <Button
            isFull={true}
            fontWeight="reguler"
            fontSize={15}
            contents="SIGN UP WITH GOOGLE"
            isBlack={false}
            columnPadding={13}
          />
        </S.InputWrap>
      </S.Container>
    </S.Wrapper>
  );
}
