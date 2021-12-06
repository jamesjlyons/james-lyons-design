// import '../styles/globals.css'
import { globalCss } from "@stitches/react";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import Head from "next/head";

const globalStyles = globalCss({
  // font import
  "@font-face": {
    fontFamily: "Supreme Variable",
    fontWeight: "1 999",
    fontDisplay: "swap",
    src: "url(/fonts/Supreme-Variable.woff2) format('woff2'), url(/fonts/Supreme-Variable.woff) format('woff')",
  },
  // reset
  "*": {
    margin: "0",
    "::before": {
      boxSizing: "border-box",
    },
    "::after": {
      boxSizing: "border-box",
    },
  },
  html: {
    // height: "100%",
    //  not reset
    background:
      "radial-gradient(100% 256% at 0% 0%, #1BE9B7 0%, rgba(27, 233, 183, 0) 42.71%), $bg",
    backgroundBlendMode: "color, normal",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    backgroundSize: "cover",
  },
  body: {
    // height: "100%",
    fontFamily: "$sans",
    lineHeight: "1.5",
    WebkitFontSmoothing: "antialiased",
  },
  // main: {
  //   paddingBottom: "160px",
  // },
  img: {
    display: "block",
    maxWidth: "100%",
  },
  picture: {
    display: "block",
    maxWidth: "100%",
  },
  video: {
    display: "block",
    maxWidth: "100%",
  },
  canvas: {
    display: "block",
    maxWidth: "100%",
  },
  svg: {
    display: "block",
    maxWidth: "100%",
  },
  input: {
    font: "inherit",
  },
  button: {
    font: "inherit",
  },
  textarea: {
    font: "inherit",
  },
  select: {
    font: "inherit",
  },
  p: {
    overflowWrap: "break-word",
    fontWeight: "400",
    fontSize: "$3",
  },
  h1: {
    overflowWrap: "break-word",
    fontSize: "$6",
    fontWeight: "700",
    letterSpacing: "-0.02em",
  },
  h2: {
    overflowWrap: "break-word",
    fontSize: "$5",
    fontWeight: "700",
    letterSpacing: "-0.02em",
  },
  h3: {
    overflowWrap: "break-word",
    letterSpacing: "-0.02em",
  },
  h4: {
    overflowWrap: "break-word",
    letterSpacing: "-0.02em",
  },
  h5: {
    overflowWrap: "break-word",
    letterSpacing: "-0.02em",
  },
  h6: {
    overflowWrap: "break-word",
    letterSpacing: "-0.02em",
  },
  root: {
    isolation: "isolate",
  },
  "#__next": {
    isolation: "isolate",
  },
  // end reset
  a: {
    color: "$accent",
    "&:hover": {
      color: "$text1",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <Layout>
      <Head>
        <title>James Lyons</title>
        <meta
          name="description"
          content="Product Designer & Frontend Developer"
        />
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="preload"
          href="/fonts/Supreme-Variable.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Supreme-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
