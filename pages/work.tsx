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
      <Text as="h1" color="1">
        Work
      </Text>
      <Text as="h2" color="2">
        work work work
      </Text>
    </div>
  );
}
