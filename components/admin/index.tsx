import { AdimLogoIcon } from "../../assets";
import * as S from "./styles";
import BrandCard from "./BrandCard";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import admin from "../../api/admin";
export default function Admin() {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [listArr, setListArr] = useState<any[]>([]);
  const [id, setId] = useState("");

  const modalOn = (id) => {
    setId(id);
    setIsModal(true);
  };

  const modalOff = (event) => {
    setIsModal(false);
  };

  useEffect(() => {
    admin.getAdminMainList().then((res) => {
      setListArr(res.data.adminBrandContentResponseList);
    });
  }, [isModal]);

  return (
    <S.Wrapper>
      {isModal && <Modal modalOff={modalOff} id={id} />}
      <S.Header>
        <AdimLogoIcon />
      </S.Header>
      <S.Infor>
        <h1>Brand List</h1>
        <p>Seeing all brand list in here for you</p>
      </S.Infor>
      {listArr.map((obj, index) => (
        <BrandCard
          modalOn={() => modalOn(obj.id)}
          key={index}
          name={obj.name}
          brandImg={obj.profile_url}
          id={obj.id}
        />
      ))}
      <form
        action="http://172.20.10.4:8081/admin/jidole041214@naver.com"
        method="post"
      >
        <button>asdkfljadsklfjasdfl</button>
      </form>
    </S.Wrapper>
  );
}
