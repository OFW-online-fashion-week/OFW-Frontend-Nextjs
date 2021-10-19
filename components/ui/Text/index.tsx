import { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { COLOR } from "./../../../styles/index";

interface Props {
  size: number;
  weight?: "thin" | "reguler" | "bold" | "extraBold";
  color?: "black" | "gray";
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  className?: string;
  contents: string;
}

const Text: FunctionComponent<Props> = ({
  size,
  weight = 500,
  color = "black",
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  className = "",
  contents,
}) => {
  const BaseText = styled.div`
    font-size: ${size + "px"};
    font-weight: ${weight === "thin"
      ? 300
      : weight === "reguler"
      ? 500
      : weight === "bold"
      ? 600
      : weight === "extraBold"
      ? 800
      : 500};
    color: ${color === "black"
      ? COLOR.text
      : color === "gray"
      ? COLOR.sub_text
      : ""};
    margin-top: ${marginTop + "px"};
    margin-bottom: ${marginBottom + "px"};
    margin-left: ${marginLeft + "px"};
    margin-right: ${marginRight + "px"};
  `;
  return <BaseText className={className}>{contents}</BaseText>;
};

export default Text;
