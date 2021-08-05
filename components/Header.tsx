import React, { useState, useEffect, FC } from "react";
import Image from "next/image";
import styles from "../styles/header.module.scss";
import logo from "../public/images/logo.svg";
import { switchTheme } from "../utils/themeSetup";

interface Props {}

const Header: FC<Props> = (props) => {
  const [darkTheme, setDarkTheme] = useState<boolean>();
  const changeTheme = () => {
    switchTheme();
    setDarkTheme(!darkTheme);
  };
  useEffect(() => {
    if (localStorage.getItem("youtubify-theme")) {
      setDarkTheme(
        localStorage.getItem("youtubify-theme") === "dark" ? true : false
      );
    } else {
      const userPreferedTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkTheme(userPreferedTheme);
    }
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo"></Image>
        <span>Youtubify</span>
      </div>
      <div onClick={changeTheme} className={styles.themeBtn} id="themeBtn">
        {darkTheme ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </div>
    </header>
  );
};

export default Header;
