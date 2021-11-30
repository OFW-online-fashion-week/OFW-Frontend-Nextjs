import * as S from "./styles";
import Text from "./../ui/Text/index";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useCallback, useRef, useState } from "react";
import { getFileData } from "./../../lib/util/getFileData";
import BrandPagePreview from "./BrandPagePreview";
import file from "../../api/file";
import auth from "../../api/auth";
import { useRouter } from "next/dist/client/router";

export default function BrandRegistration() {
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const checkPasswordRef = useRef<HTMLInputElement>(null);
  const [brandImg, setBrandImg] = useState("");
  const [brandCover, setBrandCover] = useState("");
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [brandImgPreview, setBrandImgPreview] = useState<string>(null);
  const [brandCoverImgFileName, setBrandCoverImgFileName] =
    useState<string>(null);
  const [brandCoverImgPreview, setBrandCoverImgPreview] =
    useState<string>(null);
  const inputArr = [
    {
      content: "Name",
      ref: nameRef,
    },
    {
      content: "E-mail",
      ref: emailRef,
    },
    {
      content: "URL",
      ref: urlRef,
    },
    {
      content: "Password",
      ref: passwordRef,
    },
    {
      content: "Check Password",
      ref: checkPasswordRef,
    },
  ];

  const getBrandImg = useCallback((event) => {
    getFileData(event).then((res) => {
      setBrandImgPreview(res.preview);
      file.getS3Link(res.file).then((res) => {
        setBrandImg(res.data);
      });
    });
  }, []);

  const getBrandCoverImg = useCallback((event) => {
    getFileData(event).then((res) => {
      setBrandCoverImgFileName(res.file.name);
      setBrandCoverImgPreview(res.preview);
      file.getS3Link(res.file).then((res) => {
        setBrandCover(res.data);
      });
    });
  }, []);

  const closePreview = useCallback(() => {
    setIsPreview(false);
  }, []);

  const openPreview = useCallback(() => {
    setIsPreview(true);
  }, []);

  const getBrandInfor = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const url = urlRef.current.value;
    const password = passwordRef.current.value;
    const description = descriptionRef.current.value;
    if (checkPasswordRef.current.value !== password) {
      alert("check password");
      return;
    }
    auth
      .brandSignUp({
        cover: brandCover,
        profile: brandImg,
        name: name,
        url: url,
        email: email,
        des: description,
        psw: password,
      })
      .then(() => {
        const router = useRouter();
        alert("Registration has been applied");
        router.push("/");
      });
  };

  return (
    <S.Wrapper>
      {isPreview && (
        <BrandPagePreview
          brandImg={brandImgPreview}
          coverImg={brandCoverImgPreview}
          description={descriptionRef.current.value}
          name={nameRef.current.value}
          closePreview={closePreview}
        />
      )}
      <S.Container>
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={getBrandImg}
          id="brand-img"
        />
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={getBrandCoverImg}
          id="brand-cover-img"
        />
        <Text size={20} weight="reguler" contents="BRAND REGISTRATION" />
        <Text
          size={15}
          weight="thin"
          color="gray"
          contents="WELCOME TO OUR SITE"
        />
        <S.BrandImg>
          <label htmlFor="brand-img">
            {brandImgPreview ? (
              <img src={brandImgPreview} />
            ) : (
              <div>Brnad Image</div>
            )}
          </label>
        </S.BrandImg>
        {inputArr.map((item, index) => (
          <Input
            fontSize={16}
            fontWeight="thin"
            color="gray"
            border="bottom"
            placeholder={item.content}
            columnPadding={15}
            marginTop={15}
            inputRef={item.ref}
            key={index}
          />
        ))}
        <S.TextArea placeholder="Description" ref={descriptionRef} />
        <S.CoverUpload>
          <Button
            isFull={false}
            columnPadding={5}
            rowPadding={13}
            fontSize={16}
            fontWeight="thin"
            isBlack={false}
            contents="Cover Image"
            callback={() => document.getElementById("brand-cover-img").click()}
          />
          <Text
            contents={
              brandCoverImgFileName ? brandCoverImgFileName : "file is empty"
            }
            color="gray"
            size={16}
            marginLeft={20}
            weight="thin"
          />
        </S.CoverUpload>
        <Button
          isBlack={false}
          fontSize={18}
          columnPadding={15}
          contents="PREVIEW"
          marginTop={30}
          callback={openPreview}
        />
        <Button
          isBlack={true}
          fontSize={18}
          columnPadding={15}
          contents="SUBMIT"
          marginTop={20}
          callback={getBrandInfor}
        />
      </S.Container>
    </S.Wrapper>
  );
}
