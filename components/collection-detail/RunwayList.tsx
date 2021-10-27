import * as S from "./styles";

export default function RunwayList() {
  return (
    <S.RunwayWrap>
      <h1>Runways</h1>
      <S.RunwayList>
        <div className="cover-wrap">
          <img src="http://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2018/10/20/KSK1X9kfGGlX636756537893829737.jpg" />
        </div>
        <div className="cover-wrap">
          <img src="https://lh3.googleusercontent.com/proxy/mPqDqKs7-tnKwc4a0-YIu5f5_2GG7kE_zevlkJksrtR_7IXzvwoSoHtyoCcltb5NVTYFuhOjxXg4uVav0z77fKIYYYQm90hdptm3nRuHY4RkNtTR-i43BurVAiYK9yrK" />
        </div>
        <div className="cover-wrap">
          <img src="https://img.marieclairekorea.com/2018/10/mck_5bc9a83c7458b.jpg" />
        </div>
      </S.RunwayList>
    </S.RunwayWrap>
  );
}
