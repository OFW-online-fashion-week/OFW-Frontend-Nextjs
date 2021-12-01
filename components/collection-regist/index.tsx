import * as S from "./styles";
import Text from "./../ui/Text/index";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useRef, useState } from "react";
import DesignerModal from "./designer-modal/index";
import designer from "../../api/designer";
import { useRouter } from "next/dist/client/router";
import collection from "../../api/collection";

export default function CollectionRegist() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const designerRef = useRef(null);
  const [searchVal, setSearchVal] = useState();
  const [isModal, setIsModal] = useState(false);
  const [nowDesigner, setNowDesigner] = useState<any>();
  const [searchResult, setSearchResult] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const router = useRouter();
  const modalOn = () => {
    setIsModal(true);
  };
  const modalOff = () => {
    setIsModal(false);
  };
  const searchDesigner = (event) => {
    setIsSearch(true);
    const modelName = event.target.value;
    if (!modelName) return;
    setSearchVal(modelName);
    designer
      .searchDesigner(modelName)
      .then((res) => {
        setSearchResult(res.data.responses);
      })
      .catch(() => {
        return;
      });
  };
  const submit = () => {
    const title = titleRef.current.value;
    const description = designerRef.current.value;
    const designer_id = nowDesigner.id;
    const brand_id = router.query.id;
    collection
      .createCollection({
        title: title,
        description: description,
        designer_id: designer_id,
        brand_id: brand_id,
      })
      .then((res) => {
        alert("success");
        router.push(`/runwayRegist?collection_id=${res.data.collection_id}`);
      });
  };
  return (
    <>
      {isModal && <DesignerModal modalOff={modalOff} />}
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
            placeholder="Search Designer"
            border="bottom"
            color="gray"
            columnPadding={10}
            marginTop={40}
            fontWeight="thin"
            onChange={searchDesigner}
            inputRef={designerRef}
          />
          {searchVal && isSearch && (
            <S.DesignerWrap>
              {searchResult.map((obj, index) => (
                <S.DProfile
                  key={index}
                  onClick={() => {
                    setNowDesigner({
                      id: obj.id,
                      name: obj.name,
                      email: obj.email,
                    });
                    designerRef.current.value = obj.name;
                    setIsSearch(false);
                  }}
                >
                  <h1>{obj.name}</h1>
                  <span>{obj.email}</span>
                </S.DProfile>
              ))}
              <S.DCreate onClick={modalOn}>Creact New Designer</S.DCreate>
            </S.DesignerWrap>
          )}
          <Button
            fontSize={20}
            isBlack={true}
            contents="SUBMIT"
            columnPadding={10}
            marginTop={30}
            callback={submit}
          />
        </S.Contaienr>
      </S.Wrapper>
    </>
  );
}
