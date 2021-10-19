import styled from "@emotion/styled";
import { FunctionComponent, HTMLInputTypeAttribute } from "react";
import { COLOR } from "./../../../styles/index";

interface Props {
  fontSize: number;
  fontWeight?: "thin" | "reguler" | "bold" | "extraBold";
  color?: "black" | "gray";
  rowPadding?: number;
  columnPadding?: number;
  ref?: any;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  placeholder: string;
  className?: string;
  isFull?: boolean;
  border?: "bottom" | "all";
  type?: HTMLInputTypeAttribute;
}

const Input: FunctionComponent<Props> = ({
  fontSize,
  fontWeight = "reguler",
  rowPadding = 0,
  columnPadding = 0,
  ref,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  placeholder,
  className,
  isFull,
  color = "black",
  border = "all",
  type = "text",
}) => {
  const BaseInput = styled.input`
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
    color: ${color === "black"
      ? COLOR.text
      : color === "gray"
      ? COLOR.sub_text
      : ""};
    border-bottom: 1px solid
      ${color === "black" ? COLOR.text : color === "gray" ? COLOR.sub_text : ""};
    border: ${border === "all"
      ? `1px solid ${
          color === "black"
            ? COLOR.text
            : color === "gray"
            ? COLOR.sub_text
            : ""
        }`
      : "none"};
    border-bottom: 1px solid
      ${border === "bottom" && color === "black"
        ? COLOR.text
        : color === "gray"
        ? COLOR.sub_text
        : ""};
    padding: ${columnPadding + "px"} ${rowPadding + "px"};
    margin-top: ${marginTop + "px"};
    margin-bottom: ${marginBottom + "px"};
    margin-left: ${marginLeft + "px"};
    margin-right: ${marginRight + "px"};
    width: ${isFull ? "100%" : "auto"};
    &::placeholder {
      font-size: ${fontSize + "px"};
      color: ${COLOR.sub_text};
    }
  `;
  return (
    <BaseInput
      ref={ref}
      placeholder={placeholder}
      className={className}
      type={type}
    />
  );
};

export default Input;
