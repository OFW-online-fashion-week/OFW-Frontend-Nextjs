import * as S from "./styles";

export default function ModelRegist({ modalOff }) {
  return (
    <S.Wrapper>
      <S.Container>
        <h1 className="title">MODEL REGISTRATION</h1>
        <p className="description">REGISTRATE NEW MODEL FOR RUNWAY</p>
        <S.InputContainer>
          <div>
            <label htmlFor="">Model IMG Upload</label>
          </div>
          <div>
            <input type="text" placeholder="NAME" />
            <input type="text" placeholder="E-MAIL" />
            <textarea placeholder="DESCRIPTION" />
            <input type="text" placeholder="HEIGHT" />
            <input type="text" placeholder="WEIGHT" />
            <select name="">
              <option value="">Nation</option>
            </select>
            <select name="">
              <option value="">MALE</option>
            </select>
            <button onClick={modalOff}>CANCEL</button>
            <button>SUBMIT</button>
          </div>
        </S.InputContainer>
      </S.Container>
    </S.Wrapper>
  );
}
