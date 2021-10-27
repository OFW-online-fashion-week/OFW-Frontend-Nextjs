import * as S from "./styles";
import { useEffect } from "react";
import { InfoIcon, LogoIcon } from "../../assets";

export default function RunwayShow() {
  const videoControl = () => {
    const deltaTime = 0.05;
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
        <button>
          <LogoIcon color="white" />
        </button>
      </S.Header>
      <S.Footer>
        <InfoIcon />
      </S.Footer>
      <video src="/runway.mp4" id="video" />
    </S.Wrapper>
  );
}
