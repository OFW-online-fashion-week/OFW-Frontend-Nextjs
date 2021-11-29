import * as S from "./styles";

interface Props {
  modalOn(any): void;
  name: string;
  brandImg: string;
  id: string;
}

export default function BrandCard({ modalOn, name, brandImg, id }: Props) {
  return (
    <S.BrandCard>
      <img src={brandImg} />
      <div className="infor-wrap">
        <h1>{name}</h1>
        {/*         <h3>3 days ago</h3> */}
      </div>
      <div className="control-wrap">
        <button className="view" onClick={() => modalOn(id)}>
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
