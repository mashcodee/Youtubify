import React, { useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Container from "../components/Container";
import { themeSetup } from "../utils/themeSetup";
import styles from "../styles/index.module.scss";

export default function Home() {
  useEffect(() => {
    themeSetup();
  }, []);

  return (
    <div className={styles.page}>
      <Header />
      <Container />
    </div>
  );
}
