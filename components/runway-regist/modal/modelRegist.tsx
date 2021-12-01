import * as S from "./styles";
import { useRef, useState } from "react";
import { getFileData } from "./../../../lib/util/getFileData";
import file from "../../../api/file";
import runway from "../../../api/runway";

export default function ModelRegist({ modalOff }) {
  const [img, setImg] = useState();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const descriptionRef = useRef(null);
  const heightRef = useRef(null);
  const weightRef = useRef(null);
  const nationRef = useRef(null);
  const maleRef = useRef(null);
  const getImgFile = (event) => {
    getFileData(event).then((res) => {
      file.getS3Link(res.file).then((res) => {
        setImg(res.data);
      });
    });
  };
  const subData = () => {
    runway
      .createModel({
        name: nameRef.current.value,
        email: emailRef.current.value,
        description: descriptionRef.current.value,
        height: heightRef.current.value,
        weight: weightRef.current.value,
        nation: nationRef.current.value,
        male: maleRef.current.value,
        img: img,
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
        id="model-img"
        style={{ display: "none" }}
        accept="image/png, image/jpeg, image/jpg"
        onChange={getImgFile}
      />
      <S.Container>
        <h1 className="title">MODEL REGISTRATION</h1>
        <p className="description">REGISTRATE NEW MODEL FOR RUNWAY</p>
        <S.InputContainer>
          <div>
            <label htmlFor="model-img">
              {img ? (
                <img src={img} />
              ) : (
                <span className="none">Model IMG Upload</span>
              )}
            </label>
          </div>
          <div>
            <input type="text" placeholder="NAME" ref={nameRef} />
            <input type="text" placeholder="E-MAIL" ref={emailRef} />
            <textarea placeholder="DESCRIPTION" ref={descriptionRef} />
            <input type="text" placeholder="HEIGHT" ref={heightRef} />
            <input type="text" placeholder="WEIGHT" ref={weightRef} />
            <input type="text" placeholder="NATION" ref={nationRef} />
            <select ref={maleRef}>
              <option value="m">MALE</option>
              <option value="f">FEMALE</option>
            </select>
            <button onClick={modalOff}>CANCEL</button>
            <button onClick={subData}>SUBMIT</button>
          </div>
        </S.InputContainer>
      </S.Container>
    </S.Wrapper>
  );
}
