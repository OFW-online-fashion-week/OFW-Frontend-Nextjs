import * as S from "./styles";
import Text from "./../ui/Text/index";
import { HeartIcon, LinkIcon } from "../../assets";

interface Props {
  brandImg: string;
  coverImg: string;
  description: string;
  name: string;
  closePreview(): void;
}

export default function BrandPagePreview({
  brandImg,
  coverImg,
  description,
  name,
  closePreview,
}: Props) {
  return (
    <S.BrandPageWrap onClick={closePreview}>
      <div className="preview">
        <div className="brand-info">
          <div className="flex-wrap">
            <img src={brandImg} />
            <Text size={40} weight="bold" contents={name} marginLeft={10} />
            <div className="icon-wrap">
              <LinkIcon size={23} />
              <HeartIcon check={true} size={23} />
            </div>
          </div>
          <p>{description}</p>
          <div className="list-wrap">
            <div />
            <div />
            <div />
          </div>
        </div>
        <img src={coverImg} className="cover-img" />
      </div>
    </S.BrandPageWrap>
  );
}
