import "../styles/globals.scss";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Youtubify</title>
        <link
          href="/images/logo.png"
          rel="icon"
          type="image/png"
          sizes="512x512"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="description"
          content="Instantly extract audio from any youtube video"
        />
        <meta
          name="keywords"
          content="youtube download,yt mp3,youtube mp3 downloader"
        />
        <link rel="apple-touch-icon" href="/images/logo.png"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
