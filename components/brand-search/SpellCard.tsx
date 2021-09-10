import * as S from "./styles";
import { SpellCardProps } from "./../../lib/interfaces/brandSearch";

export default function SpellCard({ spell }: SpellCardProps) {
  return (
    <S.SpellCard>
      <h1 className="title">part {spell}</h1>
      <h3 className="brand-name">adder errordddddddddddddddddddd</h3>
      <h3 className="brand-name">adder error</h3>
      <h3 className="brand-name">adder error</h3>
      <h3 className="brand-name">adder error</h3>
    </S.SpellCard>
  );
}
