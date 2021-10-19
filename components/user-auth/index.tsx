import * as S from "./styles";
import Text from "./../ui/Text/index";
import Button from "../ui/Button";

export default function UserAuth() {
  return (
    <S.Wrapper>
      <S.Container>
        <Text size={30} weight="reguler" contents="OFW Auth" marginTop={30} />
        <Text
          size={15}
          weight="thin"
          contents="WELCOME TO LOGIN HERE"
          marginTop={10}
          color="gray"
        />
        <S.InputWrap>
          <Button
            fontSize={20}
            fontWeight="bold"
            isBlack={true}
            contents="LOGIN"
            columnPadding={15}
            isFull={true}
          />
        </S.InputWrap>
      </S.Container>
    </S.Wrapper>
  );
}
