import styled from "@emotion/styled";
import { BaseWrapper } from "./../../styles/index";
import Text from "./../ui/Text/index";
import { useEffect, useState } from "react";
import like from "../../api/like";
import { useRouter } from "next/dist/client/router";

export default function LikeList() {
  const [data, setData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    like.getLike().then((res) => {
      setData(res.data.likeBrandContentResponseList);
    });
  }, []);
  return (
    <Wrapper>
      <Container>
        <Text color="black" size={30} contents="Like" />
        <Text
          color="gray"
          marginTop={10}
          size={18}
          contents="Brands you like"
          weight="thin"
        />
        <FlexWrap>
          {data.map((obj, index) => (
            <Brand key={index}>
              <img src={obj.profile_url} onClick={() => router.push(`/brands/${obj.id}`)} />
              <Text color="black" contents={obj.name} size={20} />
            </Brand>
          ))}
        </FlexWrap>
      </Container>
    </Wrapper>
  );
}

export const Wrapper = styled(BaseWrapper)``;

export const Container = styled.div`
  width: 930px;
`;

export const FlexWrap = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 150px);
  justify-content: space-between;
  grid-row-gap: 30px;
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  & img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 0.8;
    }
  }
`;
