import * as S from "./styles";

export default function ClothesRegist({ modalOff }) {
  return (
    <S.Wrapper>
      <S.Container>
        <h1 className="title">CLOTHES REGISTRATION</h1>
        <p className="description">REGISTRATE NEW CLOTHES FOR RUNWAY</p>
        <S.InputContainer>
          <div>
            <label htmlFor="">Clothes IMG Upload</label>
          </div>
          <div>
            <input type="text" placeholder="NAME" />
            <input type="text" placeholder="STYLE CODE" />
            <input type="text" placeholder="LINK" />
            <textarea placeholder="DESCRIPTION" style={{ height: "300px" }} />
            <button onClick={modalOff}>CANCEL</button>
            <button>SUBMIT</button>
          </div>
        </S.InputContainer>
      </S.Container>
    </S.Wrapper>
  );
}
