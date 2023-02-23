import App from "next/app";
import { ThemeProvider } from "next-themes";

// local components
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className="h-screen">
        <header className="">
          <Navbar />
        </header>

        <main className="relative">
          <Component {...pageProps} />
        </main>

        <div className="">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  return { ...appProps, data: "home" };
};

export default MyApp;
