import type { CustomNextPage } from "next";
import { Home } from "src/components/page/Home";
import { HomeLayout } from "src/components/ui/layout";

const IndexPage: CustomNextPage = () => {
  return <Home />;
};

IndexPage.getLayout = HomeLayout;

export default IndexPage;
