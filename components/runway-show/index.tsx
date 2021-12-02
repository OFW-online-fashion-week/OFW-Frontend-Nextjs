import * as S from "./styles";
import { useEffect, useState } from "react";
import { InfoIcon, LogoIcon } from "../../assets";
import { useRouter } from "next/dist/client/router";
import runway from "../../api/runway";

export default function RunwayShow() {
  const router = useRouter();
  const [data, setData] = useState<any>();

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
    const id = router.query.id;
    if (id !== undefined) {
      runway.getRunwayDetail(id).then((res) => {
        setData(res.data);
      });
    }
  }, [router]);

  useEffect(() => {
    if (data && data.runway_url) {
      videoControl();
      const audio = document.getElementById("audio");
      audio.src = data.bgmPath;
      audio.loop;
      audio.play();
    }
  }, [data]);
  return (
    <S.Wrapper>
      <S.Header>
        <audio id="audio" style={{ display: "none" }}></audio>
        <button onClick={() => router.push("/")}>
          <LogoIcon color="white" />
        </button>
      </S.Header>
      <S.Footer>
        <button>
          <InfoIcon />
        </button>
      </S.Footer>
      <S.SideBar>
        <button>Model</button>
      </S.SideBar>
      {data && <video src={data.runway_url} id="video" />}
    </S.Wrapper>
  );
}
