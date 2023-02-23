import App from "next/app";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("home/nav").catch(console.error), {
  ssr: false,
});

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
  return appProps;
};

export default MyApp;
