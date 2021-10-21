import * as S from "./styles";
import Text from "./../ui/Text/index";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { useRouter } from "next/dist/client/router";
import { useCallback, useState } from "react";

export default function UserAuth() {
  const [isCostomer, setIsCostomer] = useState<boolean>(true);
  const router = useRouter();

  const routingToUserSignUp = useCallback(() => {
    router.push("/auth/signup/user");
  }, []);

  const routingToBrandSignUp = useCallback(() => {
    router.push("/auth/signup/brand");
  }, []);

  const changeUser = useCallback(() => {
    setIsCostomer(!isCostomer);
  }, [isCostomer]);

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
          <Input
            isFull={true}
            fontSize={18}
            fontWeight="thin"
            rowPadding={15}
            columnPadding={13}
            placeholder="write your email"
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
          />
          <Button
            fontSize={20}
            fontWeight="bold"
            isBlack={true}
            contents="LOGIN"
            columnPadding={13}
            isFull={true}
            marginTop={15}
          />
          <div className="question">
            {isCostomer ? (
              <span onClick={routingToUserSignUp}>Don't you have account?</span>
            ) : (
              <span onClick={routingToBrandSignUp}>Go to brand register</span>
            )}
          </div>
          {isCostomer && (
            <>
              <S.Or>or</S.Or>
              <Button
                isFull={true}
                fontWeight="reguler"
                fontSize={15}
                contents="SIGN UP WITH GOOGLE"
                isBlack={false}
                columnPadding={13}
              />
            </>
          )}
        </S.InputWrap>
      </S.Container>
    </S.Wrapper>
  );
}
