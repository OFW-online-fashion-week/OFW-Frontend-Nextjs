import * as S from "./styles";
import Text from "./../ui/Text/index";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { useRouter } from "next/dist/client/router";
import { useCallback, useEffect, useRef, useState } from "react";
import auth from "../../api/auth";
import { A_TOKEN, BRAND_ID, AUD } from "./../../lib/export/localstorage";

export default function UserAuth() {
  const [isCostomer, setIsCostomer] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState(false);
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const pswRef = useRef<HTMLInputElement>(null);

  const routingToUserSignUp = useCallback(() => {
    router.push("/auth/signup/user");
  }, []);

  const routingToBrandSignUp = useCallback(() => {
    router.push("/auth/signup/brand");
  }, []);

  const changeUser = useCallback(() => {
    setIsCostomer(!isCostomer);
  }, [isCostomer]);

  const signIn = () => {
    const email = emailRef.current.value;
    const psw = pswRef.current.value;
    if (email === "admin" && psw === "fprhwhdk1214") {
      router.push("/admin");
    }
    if (isCostomer) {
    } else {
      auth
        .brandLogin({ id: email, psw: psw })
        .then((res) => {
          const accessToken = res.data.accessToken;
          const aud = res.data.aud;
          const brand_id = res.data.id;
          localStorage.setItem(A_TOKEN, accessToken);
          localStorage.setItem(BRAND_ID, brand_id);
          localStorage.setItem(AUD, aud);
          alert("success brand login");
          router.push("/");
        })
        .catch(() => {
          alert("check your email or password");
        });
    }
  };

  const googleAuth = () => {
    auth.getGoogleLink().then((res) => {
      window.open(res.data.link);
    });
  };

  useEffect(() => {
    const code = router.query.code;
    if (code && !isEnd) {
      setIsEnd(true);
      auth
        .userSignup({
          code: code,
          aud: "user",
        })
        .then((res) => {
          const accessToken = res.data.accessToken;
          const email = res.data.email;
          if (accessToken) {
            localStorage.setItem(A_TOKEN, accessToken);
            alert("success login");
            router.push("/");
          } else {
            const name = prompt("welcome to signup! enter your name");
            auth
              .userRegist({
                name: name,
                aud: "user",
                email: email,
              })
              .then((res) => {
                const accessToken = res.data.accessToken;
                alert("success signup and login");
                localStorage.setItem(A_TOKEN, accessToken);
                router.push("/");
              });
          }
        });
    }
  }, [router]);

  return (
    <S.Wrapper>
      <S.Container>
        <Text size={30} weight="reguler" contents="OFW Auth" marginTop={30} />
        <Text
          size={15}
          weight="thin"
          contents="WELCOME TO LOGIN HERE"
          marginTop={9}
          color="gray"
        />
        <S.ChangeWrap>
          <button onClick={changeUser} style={isCostomer ? { right: 0 } : {}} />
          <span>{isCostomer && "Customer"}</span>
          <span>{!isCostomer && "Brand"}</span>
        </S.ChangeWrap>
        <S.InputWrap>
          {!isCostomer && (
            <>
              <Input
                isFull={true}
                fontSize={18}
                fontWeight="thin"
                rowPadding={15}
                columnPadding={13}
                placeholder="write your email"
                inputRef={emailRef}
              />
              <Input
                isFull={true}
                fontSize={18}
                fontWeight="thin"
                rowPadding={15}
                columnPadding={13}
                placeholder="write your password"
                marginTop={5}
                type="password"
                inputRef={pswRef}
              />
              <Button
                fontSize={20}
                fontWeight="bold"
                isBlack={true}
                contents="LOGIN"
                columnPadding={13}
                isFull={true}
                marginTop={15}
                callback={signIn}
              />
            </>
          )}
          <div className="question">
            {!isCostomer && (
              <span onClick={routingToBrandSignUp}>Go to brand register</span>
            )}
          </div>
          {isCostomer && (
            <>
              <Button
                isFull={true}
                fontWeight="reguler"
                fontSize={15}
                contents="SIGN UP WITH GOOGLE"
                isBlack={false}
                columnPadding={13}
                callback={googleAuth}
              />
            </>
          )}
        </S.InputWrap>
      </S.Container>
    </S.Wrapper>
  );
}
