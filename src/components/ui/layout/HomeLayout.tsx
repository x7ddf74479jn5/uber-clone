import type { CustomLayout } from "next";
import { Map } from "src/components/model/Map";
import { ActionButtons } from "src/components/ui/ActionButton";
import { InputButton } from "src/components/ui/InputButton";
import tw from "tailwind-styled-components";

import { Header } from "./Header";

export const HomeLayout: CustomLayout = (page) => {
  return (
    <>
      <Main>
        <Map />
        <ActionItems>
          <Header />
          <ActionButtons />
          <InputButton />
        </ActionItems>
        {page}
      </Main>
    </>
  );
};

const Main = tw.main`
    flex flex-col h-screen

`;

const ActionItems = tw.div`
  flex-1 p-4
`;
