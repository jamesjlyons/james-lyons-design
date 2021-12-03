// import '../styles/globals.css'
import { globalCss } from "@stitches/react";
import type { AppProps } from "next/app";

const globalStyles = globalCss({
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
    height: "100%",
  },
  body: {
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
  },
  h1: {
    overflowWrap: "break-word",
  },
  h2: {
    overflowWrap: "break-word",
  },
  h3: {
    overflowWrap: "break-word",
  },
  h4: {
    overflowWrap: "break-word",
  },
  h5: {
    overflowWrap: "break-word",
  },
  h6: {
    overflowWrap: "break-word",
  },
  root: {
    isolation: "isolate",
  },
  __next: {
    isolation: "isolate",
  },
  // end reset
  html: {
    maxWidth: "70ch",
    padding: "3em 1em",
    margin: "auto",
    lineHeight: "1.75",
    fontSize: "1.25em",
    backgroundColor: "$bg",
  },
  a: {
    color: "$accent",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
