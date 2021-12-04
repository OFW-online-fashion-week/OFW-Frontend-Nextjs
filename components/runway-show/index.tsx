import * as S from "./styles";
import { useEffect, useState } from "react";
import { InfoIcon, LogoIcon } from "../../assets";
import { useRouter } from "next/dist/client/router";
import runway from "../../api/runway";
import Model from "./Model";
import Cloth from "./Cloth";

export default function RunwayShow() {
  const router = useRouter();
  const id = router.query.id;
  const [data, setData] = useState<any>();
  const [modelModal, setmodelModal] = useState(false);
  const [clothModal, setClothModal] = useState(false);

  const onmodelModal = () => {
    setmodelModal(true);
  };
  const offmodelModal = () => {
    setmodelModal(false);
  };

  const onClothModal = () => {
    setClothModal(true);
  };
  const offClothModal = () => {
    setClothModal(false);
  };

  const videoControl = () => {
    const deltaTime = 0.1;
    const video = document.querySelector("video");
    window.addEventListener("wheel", (event) => {
      if (event.deltaY > 0 && video.currentTime < video.duration) {
        video.currentTime = video.currentTime + deltaTime;
      } else if (event.deltaY < 0 && video.currentTime > 0) {
        video.currentTime = video.currentTime - deltaTime;
      }
    });
  };

  useEffect(() => {
    if (id !== undefined) {
      runway.getRunwayDetail(id).then((res) => {
        setData(res.data);
      });
    }
  }, [router]);

  useEffect(() => {
    if (data && data.runway_url) {
      videoControl();
      const audio: any = document.getElementById("audio");
      audio.src = data.bgmPath;
      audio.loop;
      audio.play();
    }
  }, [data]);
  return (
    <S.Wrapper>
      {modelModal && (
        <Model offModal={offmodelModal} model_id={data.model_id} />
      )}
      {clothModal && <Cloth id={id} offModal={offClothModal} />}
      <S.Header>
        <audio id="audio" style={{ display: "none" }}></audio>
        <button onClick={() => router.push("/")}>
          <LogoIcon color="white" />
        </button>
      </S.Header>
      <S.Footer>
        <button onClick={onClothModal}>
          <InfoIcon />
        </button>
      </S.Footer>
      <S.SideBar>
        <button onClick={onmodelModal}>Model</button>
      </S.SideBar>
      {data && <video src={data.runway_url} id="video" />}
    </S.Wrapper>
  );
}
