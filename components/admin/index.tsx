import { AdimLogoIcon } from "../../assets";
import * as S from "./styles";
import BrandCard from "./BrandCard";
import Modal from "./Modal";
import { useState } from "react";

export default function Admin() {
  const [isModal, setIsModal] = useState<boolean>(false);

  const modalOn = () => {
    setIsModal(true);
  };

  const modalOff = ({ target }) => {
    if (target.id !== "modal-wrapper") return;
    setIsModal(false);
  };

  return (
    <S.Wrapper>
      {isModal && <Modal modalOff={modalOff} />}
      <S.Header>
        <AdimLogoIcon />
      </S.Header>
      <S.Infor>
        <h1>Brand List</h1>
        <p>Seeing all brand list in here for you</p>
      </S.Infor>
      <BrandCard modalOn={modalOn} />
    </S.Wrapper>
  );
}
