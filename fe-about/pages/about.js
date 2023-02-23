import dynamic from "next/dynamic";
const page = import("@/realPages/about");
const Page = dynamic(() => import("@/realPages/about"));

Page.getInitialProps = async (ctx) => {
  const getInitialProps = (await page).default?.getInitialProps;
  if (getInitialProps) {
    return getInitialProps(ctx);
  }
  return {};
};

export default Page;
