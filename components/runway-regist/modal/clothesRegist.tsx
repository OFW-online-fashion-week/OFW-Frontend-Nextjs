import * as S from "./styles";
import { getFileData } from "./../../../lib/util/getFileData";
import file from "../../../api/file";
import { useRef, useState } from "react";
import runway from "../../../api/runway";

export default function ClothesRegist({ modalOff }) {
  const [img, setImg] = useState();
  const nameRef = useRef(null);
  const styleCodeRef = useRef(null);
  const linkRef = useRef(null);
  const descriptionRef = useRef(null);
  const getImgFile = (event) => {
    getFileData(event).then((res) => {
      file.getS3Link(res.file).then((res) => {
        setImg(res.data);
      });
    });
  };
  const subData = () => {
    runway
      .createClothes({
        name: nameRef.current.value,
        style_code: styleCodeRef.current.value,
        url: linkRef.current.value,
        description: descriptionRef.current.value,
        image_path: img,
      })
      .then((res) => {
        alert("success");
        modalOff();
      });
  };
  return (
    <S.Wrapper>
      <input
        type="file"
        id="cloth-img"
        style={{ display: "none" }}
        accept="image/png, image/jpeg, image/jpg"
        onChange={getImgFile}
      />
      <S.Container>
        <h1 className="title">CLOTHES REGISTRATION</h1>
        <p className="description">REGISTRATE NEW CLOTHES FOR RUNWAY</p>
        <S.InputContainer>
          <div>
            <label htmlFor="cloth-img">
              {img ? (
                <img src={img} />
              ) : (
                <span className="none">Clothes IMG Upload</span>
              )}
            </label>
          </div>
          <div>
            <input type="text" placeholder="NAME" ref={nameRef} />
            <input type="text" placeholder="STYLE CODE" ref={styleCodeRef} />
            <input type="text" placeholder="LINK" ref={linkRef} />
            <textarea
              placeholder="DESCRIPTION"
              ref={descriptionRef}
              style={{ height: "300px" }}
            />
            <button onClick={modalOff}>CANCEL</button>
            <button onClick={subData}>SUBMIT</button>
          </div>
        </S.InputContainer>
      </S.Container>
    </S.Wrapper>
  );
}
