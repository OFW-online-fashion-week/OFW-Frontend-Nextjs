import { useRouter } from "next/dist/client/router";
import React from "react";
import * as S from "./styles";

export default function PageToModels() {
  const router = useRouter();
  return (
    <S.SliderToModelsWrap className="page">
      <div className="contents-wrap" id="models-contents-wrap">
        <div className="models-title">
          <div />
          <h1>models</h1>
          <div />
        </div>
        <p className="sub-title">
          Check out the greatest models on models page
        </p>
        <p className="description">
          You can see the models who participated in the runway on the Models{" "}
          <br />
          page. You can also see the profiles of the models. If you need a{" "}
          <br />
          model, just chat them.
        </p>
        <button
          onClick={() => {
            router.push("/models");
          }}
        >
          show Models
        </button>
      </div>
    </S.SliderToModelsWrap>
  );
}
