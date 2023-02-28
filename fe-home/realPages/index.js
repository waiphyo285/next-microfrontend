import React, { useState } from "react";
import Head from "next/head";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";

// local comopnents
import HomeComponent from "@/components/Home";

const Home = ({ props }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container m-10">
        <HomeComponent repositoryList={props.pinnedItems} />
      </main>
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  const GITHUB_ACCESS_TOKEN = "";

  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "waiphyo285") {
          pinnedItems(first: 6) {
            totalCount
            edges {
              node {
                ... on Repository {
                  name
                  description
                  id
                  url
                  stargazers {
                    totalCount
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map((edge) => edge.node);

  return {
    props: {
      pinnedItems,
    },
  };
};

export default Home;
