import * as S from "./styles";

interface Props {
  modalOn(): void;
}

export default function BrandCard({ modalOn }: Props) {
  return (
    <S.BrandCard>
      <img src="https://i.pinimg.com/originals/29/55/72/2955723128edcf046284853fd0040254.png" />
      <div className="infor-wrap">
        <h1>Supreme</h1>
        <h3>3 days ago</h3>
      </div>
      <div className="control-wrap">
        <button className="view" onClick={modalOn}>
          view
        </button>
        <div className="btn-wrap">
          <button />
          <button />
        </div>
      </div>
    </S.BrandCard>
  );
}
