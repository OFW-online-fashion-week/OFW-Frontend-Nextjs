import * as S from "./styles";
import { SpellCardProps } from "./../../lib/interfaces/brandSearch";
import { useRouter } from "next/dist/client/router";

export default function SpellCard({ spell }: SpellCardProps) {
  const router = useRouter();
  return (
    <S.SpellCard>
      <h1 className="title">part {spell}</h1>
      <h3 className="brand-name" onClick={() => router.push("/brands/1")}>
        adder errordddddddddddddddddddd
      </h3>
      <h3 className="brand-name">adder error</h3>
      <h3 className="brand-name">adder error</h3>
      <h3 className="brand-name">adder error</h3>
    </S.SpellCard>
  );
}
