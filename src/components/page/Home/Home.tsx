import Head from "next/head";
import { Map } from "src/components/model/Map";
import { ActionButtons } from "src/components/page/Home/ActionButton";
import { InputButton } from "src/components/page/Home/InputButton";
import tw from "tailwind-styled-components";

import { Header } from "./Header";

export const Home: React.VFC = () => {
  return (
    <>
      <Head>
        <title>Uber</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Map />
        <ActionItems>
          <Header />
          <ActionButtons />
          <InputButton />
        </ActionItems>
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
