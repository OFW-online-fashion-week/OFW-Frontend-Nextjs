import { COLOR } from "./../styles/index";
export default function ColumnListIcon({ isColumn, callback }) {
  const color = isColumn ? COLOR.main : COLOR.text;
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={callback}
    >
      <path d="M15 0H11.25V3.74995H15V0Z" fill={color} />
      <path d="M15 5.625H11.25V9.37497H15V5.625Z" fill={color} />
      <path d="M11.25 11.25H15V15H11.25V11.25Z" fill={color} />
      <path d="M9.375 0H5.625V3.74995H9.375V0Z" fill={color} />
      <path d="M5.625 5.625H9.375V9.37497H5.625V5.625Z" fill={color} />
      <path d="M9.375 11.25H5.625V15H9.375V11.25Z" fill={color} />
      <path d="M0 0H3.75V3.74995H0V0Z" fill={color} />
      <path d="M3.75 5.625H0V9.37497H3.75V5.625Z" fill={color} />
      <path d="M0 11.25H3.75V15H0V11.25Z" fill={color} />
    </svg>
  );
}
