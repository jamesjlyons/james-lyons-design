// import '../styles/globals.css'
import { globalCss } from "@stitches/react";
import type { AppProps } from "next/app";

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
    maxWidth: "70ch",
    // padding: "3em 1em",
    paddingTop: "$6",
    margin: "auto",
    lineHeight: "1.75",
    fontSize: "1.25em",
    backgroundColor: "$bg",
  },
  body: {
    // height: "100%",
    lineHeight: "1.5",
    WebkitFontSmoothing: "antialiased",
  },
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
  },
  h1: {
    overflowWrap: "break-word",
    fontWeight: "700",
    letterSpacing: "-0.02em",
  },
  h2: {
    overflowWrap: "break-word",
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
  __next: {
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
  return <Component {...pageProps} />;
}

export default MyApp;
