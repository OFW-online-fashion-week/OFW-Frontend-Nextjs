import * as S from "./styles";
import Text from "./../ui/Text/index";
import RunwayList from "./RunwayList";

export default function CollectionDetail() {
  return (
    <S.Wrapper>
      <S.Container>
        <Text
          size={60}
          contents="WINTER COLLECTION 2000-20001"
          weight="reguler"
          center={true}
        />
        <p className="description">
          asdlfjasldkfjaklsdfjlaks;dfjl;asdjkfal;sdjfalskfjasdfasdfasdfa
          asdlfjasldkfjaklsdfjlaks;dfjl;asdjkfal;sdjfalskfjasdfasdfasdfa
          asdlfjasldkfjaklsdfjlaks;dfjl;asdjkfal;sdjfalskfjasdfasdfasdfa
          asdlfjasldkfjaklsdfjlaks;dfjl;asdjkfal;sdjfalskfjasdfasdfasdfa
          asdlfjasldkfjaklsdfjlaks;dfjl;asdjkfal;sdjfals
        </p>
        <S.SeeMore>see more</S.SeeMore>
        <h1 className="sub-title">Designer</h1>
        <S.DesingerWrap>
          <img src="https://blog.toss.im/wp-content/uploads/2020/04/toss_branddesigner_1-1024x597.jpg" />
          <div className="designer-infor">
            <div className="flex">
              <Text contents="Jigi jung" size={24} weight="reguler" />
              <Text
                contents="jidole02@anver.com"
                size={16}
                weight="thin"
                color="gray"
              />
            </div>
            <p className="designer-description">
              adsfjlkasdfjlaskjdfkljadsfjlkasdfjlaskjdfkljadsfjlkasdfjlaskjdfkljadsfjlkasdfjlaskjdfkljadsfjlkasdfjlaskjdfkljadsfjlkasdfjlaskjdfkljadsfjlkasdfjlaskjdfkljadsfjlkasdfjlaskjdfklj
            </p>
          </div>
        </S.DesingerWrap>
      </S.Container>
      <RunwayList />
    </S.Wrapper>
  );
}
