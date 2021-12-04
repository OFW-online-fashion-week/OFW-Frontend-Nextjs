import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import model from "../../api/model";
import { COLOR } from "./../../styles/index";

function Information({ title, content }) {
  return (
    <Infor>
      <span>{title}</span>
      <h3>{content}</h3>
    </Infor>
  );
}

export default function ModelDetail({ model_id, offModal }) {
  const [data, setData] = useState<any>();
  useEffect(() => {
    model_id &&
      model.getModelDetail(model_id).then((res) => {
        setData(res.data);
      });
  }, [model_id]);
  return (
    <ModelWrapper>
      {data && (
        <ModelContainer>
          <FlexWrap>
            <img src={data.profile_url} />
            <div className="infor">
              <Information title="name" content={data.name} />
              <Information title="email" content={data.email} />
              <Information title="description" content={data.introduction} />
              <Information title="height" content={data.height + "cm"} />
              <Information title="weight" content={data.weight + "kg"} />
              <Information title="nation" content={data.nation} />
            </div>
          </FlexWrap>
          <button onClick={offModal}>CLOSE</button>
        </ModelContainer>
      )}
    </ModelWrapper>
  );
}

export const ModelWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99;
  background-color: rgb(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModelContainer = styled.div`
  width: 1000px;
  & button {
    width: 100%;
    height: 60px;
    border: 1px solid white;
    color: white;
    font-size: 25px;
    margin-top: 40px;
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  height: 600px;
  & img {
    width: 400px;
    height: 100%;
  }
  & .infor {
    width: 550px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Infor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  & span {
    color: ${COLOR.sub_text};
    font-size: 15px;
    text-transform: uppercase;
  }
  & h3 {
    color: white;
    font-size: 25px;
    font-weight: 500;
  }
`;
