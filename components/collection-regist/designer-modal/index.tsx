import * as S from "./styles";
import { useRef, useState } from "react";
import { getFileData } from "./../../../lib/util/getFileData";
import file from "../../../api/file";
import designer from "../../../api/designer";

interface Props {
  modalOff(): void;
}

export default function DesignerModal({ modalOff }: Props) {
  const [imgFile, setImgFile] = useState();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const descriptionRef = useRef(null);
  const getImg = (event) => {
    getFileData(event).then((res) => {
      file.getS3Link(res.file).then((res) => {
        setImgFile(res.data);
      });
    });
  };
  const subData = () => {
    designer
      .createDesigner({
        email: emailRef.current.value,
        name: nameRef.current.value,
        description: descriptionRef.current.value,
        profile_path: imgFile,
      })
      .then((res) => {
        alert("success");
        modalOff();
      });
  };
  return (
    <S.Wrapper>
      <S.Container>
        <input
          type="file"
          id="cover"
          style={{ display: "none" }}
          accept="image/png, image/jpeg, image/jpg"
          onChange={getImg}
        />
        <div style={{ width: "100%" }}>
          <h1>DESIGNER REGISTRATION</h1>
          <h3>REGISTRATE NEW DESIGNER FOR BRAND</h3>
        </div>
        <label htmlFor="cover">
          {!imgFile ? (
            <S.CoverUpload>COVER UPLOAD</S.CoverUpload>
          ) : (
            <S.CoverImg src={imgFile} />
          )}
        </label>
        <input type="text" placeholder="NAME" ref={nameRef} />
        <input type="text" placeholder="EMAIL" ref={emailRef} />
        <textarea placeholder="DESCRIPTION" ref={descriptionRef} />
        <button onClick={modalOff} className="btn">
          CANCEL
        </button>
        <button className="btn" onClick={subData}>
          SUBMIT
        </button>
      </S.Container>
    </S.Wrapper>
  );
}
