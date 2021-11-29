import React from "react";
import * as S from "./styles";
import { useRouter } from "next/dist/client/router";

export default function BrandSearch() {
  const router = useRouter();
  return (
    <S.Wrapper>
      <S.Container>
        <h1 className="title">A</h1>
        <S.BrandContainer>
          <span onClick={() => router.push("/brands/1")}>adder error</span>
          <span onClick={() => router.push("/brands/1")}>adder error</span>
          <span onClick={() => router.push("/brands/1")}>adder error</span>
          <span onClick={() => router.push("/brands/1")}>adder error</span>
          <span onClick={() => router.push("/brands/1")}>adder error</span>
        </S.BrandContainer>
      </S.Container>
    </S.Wrapper>
  );
}
