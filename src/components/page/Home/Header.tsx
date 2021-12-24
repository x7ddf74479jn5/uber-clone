import type { VFC } from "react";
import { UberLogo } from "src/components/model/Uber";
import { UserProfile } from "src/components/model/User";
import tw from "tailwind-styled-components";

export const Header: VFC = () => {
  return (
    <Wrapper>
      <UberLogo />
      <UserProfile />
    </Wrapper>
  );
};

const Wrapper = tw.header`
  flex justify-between items-center
`;
