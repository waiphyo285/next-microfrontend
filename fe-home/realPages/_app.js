import "tailwindcss/tailwind.css";

import App from "next/app";
import { ThemeProvider } from "next-themes";
import { DotGothic16 } from "@next/font/google";

// local components
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";

const appFont = DotGothic16({
  preload: true,
  weight: ["400"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className={appFont.className}>
        <header className="">
          <Navbar />
        </header>

        <main className="" style={{ minHeight: "88vh" }}>
          <Component {...pageProps} />
        </main>

        <footer className="">
          <Footer />
        </footer>
      </div>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  return { ...appProps, data: "home" };
};

export default MyApp;
