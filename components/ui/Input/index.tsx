import styled from "@emotion/styled";
import { FunctionComponent, HTMLInputTypeAttribute } from "react";
import { COLOR } from "./../../../styles/index";

interface Props {
  fontSize: number;
  fontWeight?: "thin" | "reguler" | "bold" | "extraBold";
  color?: "black" | "gray";
  rowPadding?: number;
  columnPadding?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  placeholder: string;
  isFull?: boolean;
  border?: "bottom" | "all";
  type?: HTMLInputTypeAttribute;
  inputRef?: any;
  onChange?(any): void;
}

const BaseInput = styled.input<Props>`
  font-size: ${({ fontSize }) => fontSize + "px"};
  font-weight: ${({ fontWeight }) =>
    fontWeight === "thin"
      ? 300
      : fontWeight === "reguler"
      ? 500
      : fontWeight === "bold"
      ? 600
      : fontWeight === "extraBold"
      ? 800
      : 500};
  color: ${({ color }) =>
    color === "black" ? COLOR.text : color === "gray" ? COLOR.sub_text : ""};
  border-bottom: 1px solid
    ${({ color }) =>
      color === "black" ? COLOR.text : color === "gray" ? COLOR.sub_text : ""};
  border: ${({ border, color }) =>
    border === "all"
      ? color === "black"
        ? `1px solid ${COLOR.text}`
        : `1px solid ${COLOR.sub_text}`
      : "none"};
  border-bottom: 1px solid
    ${({ border, color }) =>
      border === "bottom" && color === "black"
        ? COLOR.text
        : color === "gray"
        ? COLOR.sub_text
        : ""};
  padding: ${({ columnPadding, rowPadding }) =>
    `${columnPadding + "px"} ${rowPadding + "px"}`};
  margin-top: ${({ marginTop }) => marginTop + "px"};
  margin-bottom: ${({ marginBottom }) => marginBottom + "px"};
  margin-left: ${({ marginLeft }) => marginLeft + "px"};
  margin-right: ${({ marginRight }) => marginRight + "px"};
  width: ${({ isFull }) => (isFull ? "100%" : "auto")};
  &::placeholder {
    font-size: ${({ fontSize }) => fontSize + "px"};
    color: ${COLOR.sub_text};
  }
`;

const Input: FunctionComponent<Props> = ({
  fontSize,
  fontWeight = "reguler",
  rowPadding = 0,
  columnPadding = 0,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  placeholder,
  isFull,
  color = "black",
  border = "all",
  type = "text",
  inputRef,
  onChange,
}) => {
  return (
    <BaseInput
      ref={inputRef}
      type={type}
      placeholder={placeholder}
      fontSize={fontSize}
      fontWeight={fontWeight}
      rowPadding={rowPadding}
      columnPadding={columnPadding}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      isFull={isFull}
      color={color}
      border={border}
      onChange={onChange}
    />
  );
};

export default Input;
