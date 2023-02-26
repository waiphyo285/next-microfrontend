if (process.env.NODE_ENV === "development") {
  require("react/jsx-dev-runtime");
}

import "tailwindcss/tailwind.css";
import dynamic from "next/dynamic";

// local pages
const page = import("@/realPages/_app");
const AppPage = dynamic(() => import("@/realPages/_app"));

const Page = (props) => {
  return <AppPage {...props} />;
};

Page.getInitialProps = async (ctx) => {
  const getInitialProps = (await page).default?.getInitialProps;
  if (getInitialProps) {
    return getInitialProps(ctx);
  }
};

export default Page;
