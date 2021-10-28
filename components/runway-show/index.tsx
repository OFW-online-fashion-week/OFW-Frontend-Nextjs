import * as S from "./styles";
import { useEffect } from "react";
import { InfoIcon, LogoIcon } from "../../assets";
import { useRouter } from "next/dist/client/router";
import Button from "../ui/Button";

export default function RunwayShow() {
  const router = useRouter();

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
    videoControl();
  }, []);
  return (
    <S.Wrapper>
      <S.Header>
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
      <video src="/runway2.mp4" id="video" />
    </S.Wrapper>
  );
}
