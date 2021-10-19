import * as S from "./styles";
import Text from "./../ui/Text/index";
import Input from "./../ui/Input/index";
import Button from "../ui/Button";

export default function UserSignup() {
  return (
    <S.Wrapper>
      <S.Container>
        <Text contents="SIGN UP" size={20} />
        <Text
          contents="WELCOME TO OUR SITE"
          marginTop={5}
          size={15}
          color="gray"
          weight="thin"
        />
        <Input
          fontSize={16}
          color="gray"
          columnPadding={10}
          placeholder="E-mail"
          border="bottom"
          fontWeight="thin"
          marginTop={50}
        />
        <Input
          fontSize={16}
          color="gray"
          columnPadding={10}
          placeholder="Password"
          border="bottom"
          fontWeight="thin"
          marginTop={30}
        />
        <Input
          fontSize={16}
          color="gray"
          columnPadding={10}
          placeholder="Check Password"
          border="bottom"
          fontWeight="thin"
          marginTop={30}
        />
        <Input
          fontSize={16}
          color="gray"
          columnPadding={10}
          placeholder="Name"
          border="bottom"
          fontWeight="thin"
          marginTop={30}
        />
        <Button
          fontSize={20}
          columnPadding={15}
          isBlack={true}
          contents="SUBMIT"
          marginTop={30}
        />
      </S.Container>
    </S.Wrapper>
  );
}
