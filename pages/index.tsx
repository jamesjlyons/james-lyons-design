import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
import { styled } from "../stitches.config";

const Text = styled("p", {
  fontFamily: "$system",
  color: "$text1",

  variants: {
    size: {
      1: {
        fontSize: "$1",
        color: "$text3",
      },
      2: {
        fontSize: "$2",
        color: "$text2",
      },
      3: {
        fontSize: "$3",
        color: "$text1",
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text as="h1" size="3">
        James Lyons
      </Text>
      <Text as="h2" size="2">
        Product Designer & Frontend Developer
      </Text>
      <Text size="1">
        I‘m currently a Sr. Product Designer and Front-End Developer at{" "}
        <a href="https://soberlink.com" target="_blank">
          Soberlink
        </a>
        . I also currently design and code stuff with{" "}
        <a href="https://tapfive.dev" target="_blank">
          Tap Five
        </a>
        , a tiny team who like to make things that don't suck. <br />
        <br />
        Before this was a Product Designer at{" "}
        <a href="https://liferay.com" target="_blank">
          Liferay
        </a>{" "}
        on the Analytics Cloud product team, and previously worked as the Lead
        Designer at{" "}
        <a href="https://grandpad.net" target="_blank">
          GrandPad
        </a>
        .
        <br /> <br /> You can find me on{" "}
        <a href="https://dribbble.com/jamesjlyons" target="_blank">
          Dribbble
        </a>
        , and{" "}
        <a href="https://github.com/jamesjlyons" target="_blank">
          GitHub
        </a>
        , or you can reach out and{" "}
        <a href="mailto:hello@jameslyons.design" target="_blank">
          say hello
        </a>
        .
      </Text>
    </div>
  );
}
