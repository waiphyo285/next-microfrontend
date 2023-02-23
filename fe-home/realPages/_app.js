import App from "next/app";
import dynamic from "next/dynamic";
import Navbar from "@/components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  return { ...appProps, data: "home" };
};

export default MyApp;
