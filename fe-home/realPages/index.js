import React, { Fragment } from "react";
import Head from "next/head";

const Home = ({ loaded }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>I am home!</main>
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  return {};
};

export default Home;
