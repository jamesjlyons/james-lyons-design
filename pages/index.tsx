import type { NextPage } from "next";
import { styled } from "../stitches.config";

const Text = styled("p", {
  color: "$foregroundDefault",

  variants: {
    color: {
      1: {
        color: "$foregroundDefault",
      },
      2: {
        color: "$foregroundDimmer",
      },
      3: {
        color: "$foregroundDimmest",
      },
    },
  },
});

export default function Home() {
  return (
    <div>
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
