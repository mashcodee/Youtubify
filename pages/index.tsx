import React, { useEffect } from "react";
import { NextPage } from "next";
import Header from "../components/Header";
import Container from "../components/Container";
import { themeSetup } from "../utils/themeSetup";
import styles from "../styles/index.module.scss";

const Home: NextPage = () => {
  useEffect(() => {
    themeSetup();
  }, []);

  return (
    <div className={styles.page}>
      <Header />
      <Container />
    </div>
  );
};

export default Home;
