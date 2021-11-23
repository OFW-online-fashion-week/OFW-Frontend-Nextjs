import * as S from "./styles";

export default function Modal({ modalOff }) {
  return (
    <S.ModalWrapper onClick={modalOff} id="modal-wrapper">
      <S.Modal>
        <S.BrandProfileInfor>
          <img src="https://jegxdwep1p-flywheel.netdna-ssl.com/wp-content/uploads/2016/09/tumblr_o05v3eZmyT1ugn1wu_og_1280-1080x675.png" />
          <h1>Adder Error</h1>
          <div className="btn-wrap">
            <button />
            <button />
          </div>
        </S.BrandProfileInfor>
        <S.LineTitle>
          <div></div>
          <span>E-MAIL</span>
          <div></div>
        </S.LineTitle>
        <S.Email>jidole041214@naver.com</S.Email>
        <S.LineTitle>
          <div></div>
          <span>DESCRIPTION</span>
          <div></div>
        </S.LineTitle>
        <S.Description>
          sdlfkjsdklfjsdlkfjasdklfjasklfaslfjalsjkfasklfjaslkdfjasdklfjasdklfjkalskfjasklfjasls
          adsfjasdkljfasdjfkajfklasjdfklj
        </S.Description>
      </S.Modal>
    </S.ModalWrapper>
  );
}
