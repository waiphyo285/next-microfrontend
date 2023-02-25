import App from "next/app";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("home/nav").catch(console.error), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  return { ...appProps, data: "about" };
};

export default MyApp;
