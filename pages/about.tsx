import { BaseWrapper } from "./../styles/index";
import styled from "@emotion/styled";
import { LogoIcon } from "../assets";
import Text from "./../components/ui/Text/index";
import { COLOR } from "../styles";

export default function about() {
  return (
    <Wrapper>
      <LogoIcon />
      <Text size={30} contents="Online Runway Platform" />
      <p>
        OFW is an online runway platform where you can meet runways
        <br /> from around the world online. <br /> Discover brands and runway
        models <br />
        from around the world at OFW
      </p>
    </Wrapper>
  );
}

export const Wrapper = styled(BaseWrapper)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding-top: 250px;
  & p {
    color: ${COLOR.sub_text};
    font-size: 17px;
    text-align: center;
  }
`;
