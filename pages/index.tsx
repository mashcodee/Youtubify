import React, { useEffect } from "react";
import { NextPage } from "next";
import Header from "../components/Header";
import Container from "../components/Container";
import { themeSetup } from "../utils/themeSetup";
import styles from "../styles/index.module.scss";
import Head from "next/head";

const Home: NextPage = () => {
  useEffect(() => {
    themeSetup();
  }, []);

  return (
    <>
      <Head>
        <title>Youtubify</title>
      </Head>
      <main className={styles.page}>
        <Header />
        <Container />
      </main>
    </>
  );
};

export default Home;
