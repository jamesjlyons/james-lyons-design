import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
import { styled } from "../stitches.config";

const Text = styled("p", {
  fontFamily: "$sans",
  color: "$text1",

  variants: {
    color: {
      1: {
        color: "$text1",
      },
      2: {
        color: "$text2",
      },
      3: {
        color: "$text3",
      },
    },
  },
});

export default function Home() {
  return (
    <div>
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
      <Text as="h1" color="1">
        James Lyons
      </Text>
      <Text as="h2" color="2">
        Product Designer
        <br />
        &amp; Frontend Developer
      </Text>
      <Text color="3" css={{ marginTop: "$4" }}>
        I&apos;m currently a Sr. Product Designer and Front-End Developer at{" "}
        <a href="https://soberlink.com" target="_blank" rel="noreferrer">
          Soberlink
        </a>
        . I also currently design and code stuff with{" "}
        <a href="https://tapfive.dev" target="_blank" rel="noreferrer">
          Tap Five
        </a>
        , a tiny team who like to make things that don&apos;t suck. <br />
        <br />
        Before this was a Product Designer at{" "}
        <a href="https://liferay.com" target="_blank" rel="noreferrer">
          Liferay
        </a>{" "}
        on the Analytics Cloud product team, and previously worked as the Lead
        Designer at{" "}
        <a href="https://grandpad.net" target="_blank" rel="noreferrer">
          GrandPad
        </a>
        .
        <br /> <br /> You can find me on{" "}
        <a
          href="https://dribbble.com/jamesjlyons"
          target="_blank"
          rel="noreferrer"
        >
          Dribbble
        </a>
        , and{" "}
        <a
          href="https://github.com/jamesjlyons"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        , or you can reach out and{" "}
        <a
          href="mailto:hello@jameslyons.design"
          target="_blank"
          rel="noreferrer"
        >
          say hello
        </a>
        .
      </Text>
    </div>
  );
}
