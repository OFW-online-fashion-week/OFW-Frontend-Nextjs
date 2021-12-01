import * as S from "./styles";
import Text from "./../ui/Text/index";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useRef, useState } from "react";
import ModelRegist from "./modal/modelRegist";
import ClothesRegist from "./modal/clothesRegist";
import runway from "../../api/runway";

export default function RunwayRegist() {
  const modelRef = useRef(null);
  const clothesRef = useRef(null);
  const [isModelModal, setIsModelModal] = useState(false);
  const [isClothModal, setIsClothModal] = useState(false);
  const [model, setModel] = useState();
  const [cloth, setCloth] = useState();
  const [modelArr, setModelArr] = useState([]);
  const [modelSearch, setModelSearch] = useState(false);
  const [clothArr, setClothArr] = useState([]);
  const [clothSearch, setClothSearch] = useState(false);
  const searchModel = ({ target }) => {
    const val = target.value;
    if (!val) return;
    setModelSearch(true);
    runway.searchModel(val).then((res) => {
      setModelArr(res.data.modelSearchContentResponseList);
    });
  };
  const searchCloth = ({ target }) => {
    const val = target.value;
    if (!val) return;
    setClothSearch(true);
    runway.searchCloth(val).then((res) => {
      setClothArr(res.data.clothesSearchContentResponseList);
    });
  };
  const modelModalOn = () => {
    setIsModelModal(true);
  };
  const modelModalOff = () => {
    setIsModelModal(false);
  };
  const clothModalOn = () => {
    setIsClothModal(true);
  };
  const clothModalOff = () => {
    setIsClothModal(false);
  };
  return (
    <>
      {isModelModal && <ModelRegist modalOff={modelModalOff} />}
      {isClothModal && <ClothesRegist modalOff={clothModalOff} />}
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
            inputRef={modelRef}
            onChange={searchModel}
          />
          {modelSearch && (
            <S.Wrap>
              {modelArr.map((obj, index) => (
                <S.Profile
                  key={index}
                  onClick={() => {
                    setModel(obj.id);
                    setModelSearch(false);
                    modelRef.current.value = obj.name;
                  }}
                >
                  <h1>{obj.name}</h1>
                  <span>{obj.email}</span>
                </S.Profile>
              ))}
              <S.Create onClick={modelModalOn}>Creact new Model</S.Create>
            </S.Wrap>
          )}
          <Input
            color="gray"
            border="bottom"
            placeholder="Clothes"
            fontSize={18}
            columnPadding={10}
            marginTop={20}
            fontWeight="thin"
            inputRef={clothesRef}
            onChange={searchCloth}
          />
          {clothSearch && (
            <S.Wrap>
              {clothArr.map((obj, index) => (
                <S.Profile
                  key={index}
                  onClick={() => {
                    setCloth(obj.id);
                    setClothSearch(false);
                    clothesRef.current.value = obj.name;
                  }}
                >
                  <h1>{obj.name}</h1>
                  <span>{obj.style_code}</span>
                </S.Profile>
              ))}
              <S.Create onClick={clothModalOn}>Creact new Clothes</S.Create>
            </S.Wrap>
          )}
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
    </>
  );
}
