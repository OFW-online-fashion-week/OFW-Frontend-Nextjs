import * as S from "./styles";
import { useEffect, useState } from "react";
import admin from "../../api/admin";

export default function Modal({ modalOff, id }) {
  const [data, setData] = useState<any>();
  useEffect(() => {
    setTimeout(() => {
      admin.getBrandDetail(id).then((res) => {
        setData(res.data);
      });
    }, 100);
  }, []);
  const rejetBrand = () => {
    admin.rejectBrand(id).then((res) => {
      alert("success to brand delete");
      modalOff();
    });
  };
  const requestEmail = () => {
    admin.requestEmail(id).then((res) => {
      alert("success to request email");
      modalOff();
    });
  };
  return (
    <S.ModalWrapper onClick={modalOff} id="modal-wrapper">
      <S.Modal>
        {data && (
          <>
            <S.BrandProfileInfor>
              <img src={data.profile_url} />
              <h1>{data.name}</h1>
              <div className="btn-wrap">
                <button onClick={rejetBrand} />
                <button onClick={requestEmail} />
              </div>
            </S.BrandProfileInfor>
            <S.LineTitle>
              <div></div>
              <span>E-MAIL</span>
              <div></div>
            </S.LineTitle>
            <S.Email>{data.id}</S.Email>
            <S.LineTitle>
              <div></div>
              <span>DESCRIPTION</span>
              <div></div>
            </S.LineTitle>
            <S.Description>{data.description}</S.Description>
          </>
        )}
      </S.Modal>
    </S.ModalWrapper>
  );
}
