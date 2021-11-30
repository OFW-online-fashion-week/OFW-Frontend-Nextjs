import * as S from "./styles";
import Text from "./../ui/Text/index";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useRef } from "react";

export default function CollectionRegist() {
  const titleRef = useRef();
  const descriptionRef = useRef();
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
          inputRef={titleRef}
        />
        <textarea placeholder="Description" ref={descriptionRef} />
        <Input
          fontSize={15}
          placeholder="Designer"
          border="bottom"
          color="gray"
          columnPadding={10}
          marginTop={50}
          fontWeight="thin"
        />
        <S.DesignerWrap>
          <S.DProfile>
            <h1>김팔복</h1>
            <span>jidole041214@naver.com</span>
          </S.DProfile>
          <S.DCreate>Creact New Designer</S.DCreate>
        </S.DesignerWrap>
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
