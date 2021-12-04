import styled from "@emotion/styled";
import { BaseWrapper, BaseContainer } from "./../../styles/index";
import { useEffect, useState } from "react";
import model from "../../api/model";
import Text from "./../ui/Text/index";
import ModelDetail from "./ModelDetail";

export default function ModelList() {
  const [data, setData] = useState([]);
  const [modelId, setModelId] = useState();
  const [modal, setModal] = useState(false);
  useEffect(() => {
    model.getModelList().then((res) => {
      setData(res.data.modelContentResponseList);
    });
  }, []);
  return (
    <>
      {modal && (
        <ModelDetail model_id={modelId} offModal={() => setModal(false)} />
      )}
      <Wrapper>
        <Container>
          <Text contents="Models" color="black" size={35} />
          <Text
            contents="Models of runway"
            color="gray"
            size={17}
            marginTop={5}
            weight="thin"
          />
          <FlexWrap>
            {data.map((obj, index) => (
              <Model key={index}>
                <img
                  src={obj.profile_url}
                  onClick={() => {
                    setModal(true);
                    setModelId(obj.id);
                  }}
                />
                <Text
                  contents={obj.name}
                  color="black"
                  size={20}
                  marginTop={10}
                />
                <Text
                  contents={obj.gender}
                  weight="thin"
                  color="gray"
                  size={17}
                  marginTop={5}
                />
              </Model>
            ))}
          </FlexWrap>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled(BaseWrapper)``;

const Container = styled(BaseContainer)`
  width: 1000px;
`;

const FlexWrap = styled.div`
  width: 100%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-row-gap: 20px;
  justify-content: space-between;
`;

const Model = styled.div`
  width: 100%;
  & img {
    width: 100%;
    height: 320px;
    cursor: pointer;
    transition: 300ms;
    &:hover {
      opacity: 0.8;
    }
  }
`;
