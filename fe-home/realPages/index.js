import React, { Fragment } from "react";
import Head from "next/head";

// local comopnents
import HomeComponent from "@/components/Home";

const Home = ({ loaded }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container m-10">
        <HomeComponent />
      </main>
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  return {};
};

export default Home;
