import type { CustomNextPage } from "next";
import { Home } from "src/components/page/Home";
import { Layout } from "src/components/ui/layout";

const IndexPage: CustomNextPage = () => {
  return <Home />;
};

IndexPage.getLayout = Layout;

export default IndexPage;
