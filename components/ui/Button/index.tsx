import styled from "@emotion/styled";
import { FunctionComponent } from "react";
import { COLOR } from "./../../../styles/index";

interface Props {
  fontSize: number;
  fontWeight?: "thin" | "reguler" | "bold" | "extraBold";
  isBlack: boolean;
  rowPadding?: number;
  columnPadding?: number;
  callback?<T>(): T;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  contents: string;
  className?: string;
  isFull?: boolean;
}

const Button: FunctionComponent<Props> = ({
  fontSize,
  fontWeight = "reguler",
  isBlack,
  rowPadding = 0,
  columnPadding = 0,
  callback = () => {},
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  contents,
  isFull,
  className,
}) => {
  const BaseButton = styled.button`
    font-size: ${fontSize + "px"};
    font-weight: ${fontWeight === "thin"
      ? 300
      : fontWeight === "reguler"
      ? 500
      : fontWeight === "bold"
      ? 600
      : fontWeight === "extraBold"
      ? 800
      : 500};
    background-color: ${isBlack ? COLOR.text : COLOR.white};
    color: ${isBlack ? COLOR.white : COLOR.text};
    padding: ${columnPadding + "px"} ${rowPadding + "px"};
    margin-top: ${marginTop + "px"};
    margin-bottom: ${marginBottom + "px"};
    margin-left: ${marginLeft + "px"};
    margin-right: ${marginRight + "px"};
    width: ${isFull ? "100%" : "auto"};
    letter-spacing: 1px;
  `;
  return (
    <BaseButton onClick={callback} className={className}>
      {contents}
    </BaseButton>
  );
};

export default Button;
