import "../styles/globals.scss";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/logo.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/logo.ico" />
        <meta name="robots" content="index, follow" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta
          name="description"
          content="Instantly extract audio from any youtube video"
        />
        <meta
          name="keywords"
          content="youtube download,yt mp3,youtube mp3 downloader"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
