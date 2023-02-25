import App from "next/app";
import dynamic from "next/dynamic";
import { DotGothic16 } from "@next/font/google";

const appFont = DotGothic16({
  preload: true,
  weight: ["400"],
  subsets: ["latin", "cyrillic"],
});

const Navbar = dynamic(() => import("home/nav").catch(console.error), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={appFont.className}>
      <Component {...pageProps} />
    </div>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  return { ...appProps, data: "about" };
};

export default MyApp;
