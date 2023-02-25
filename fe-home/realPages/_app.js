import "tailwindcss/tailwind.css";

import App from "next/app";
import { DotGothic16 } from "@next/font/google";
import { ThemeProvider } from "next-themes";

// local components
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";

const appFont = DotGothic16({
  weight: "400",
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
