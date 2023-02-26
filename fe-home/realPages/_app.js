import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import "tailwindcss/tailwind.css";

// local components
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=DotGothic16&display=swap');
        </style>
      </Head>
      <ThemeProvider>
        <div className="scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300">
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
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  return { ...appProps, data: "home" };
};

export default MyApp;
