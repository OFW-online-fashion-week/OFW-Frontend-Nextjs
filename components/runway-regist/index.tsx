import * as S from "./styles";
import Text from "./../ui/Text/index";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function RunwayRegist() {
  const searchClothes = ({ target }) => {
    const val = target.value;
  };
  return (
    <S.Wrapper>
      <S.Container>
        <Text contents="RUNWAY REGISTRATION" size={20} color="black" />
        <Text
          contents="REGISTRATE NEW RUNWAY FOR COLLECTION"
          weight="thin"
          size={15}
          color="gray"
          marginTop={5}
        />
        <S.FileBtnWrap>
          <button>Runway Video</button>
          <span>no file..</span>
        </S.FileBtnWrap>
        <Input
          color="gray"
          border="bottom"
          placeholder="Model"
          fontSize={18}
          columnPadding={10}
          marginTop={20}
          fontWeight="thin"
        />
        <S.Wrap>
          <S.Profile>
            <h1>김팔복</h1>
            <span>jidole041214@naver.com</span>
          </S.Profile>
          <S.Create>Creact new Model</S.Create>
        </S.Wrap>
        <Input
          color="gray"
          border="bottom"
          placeholder="Clothes"
          fontSize={18}
          columnPadding={10}
          marginTop={20}
          fontWeight="thin"
        />
        <S.Wrap>
          <S.Profile>
            <h1>상의</h1>
            <span>a-123123</span>
          </S.Profile>
          <S.Create>Creact new Clothes</S.Create>
        </S.Wrap>
        <S.FileBtnWrap>
          <button>Runway BGM</button>
          <span>no file..</span>
        </S.FileBtnWrap>
        <Button
          contents="CREATE"
          isBlack={true}
          fontSize={20}
          columnPadding={10}
          marginTop={40}
        />
      </S.Container>
    </S.Wrapper>
  );
}
