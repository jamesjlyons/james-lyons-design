import { createStitches } from "@stitches/react";

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: "system-ui",
    },
    colors: {
      bg: "hsla(0, 0%, 7%, 1)",
      text1: "hsla(0, 0%, 100%, 1)",
      text2: "hsla(0, 0%, 100%, 0.51)",
      text3: "hsla(0, 0%, 100%, 0.67)",
      accent: "hsla(165, 82%, 51%, 1);",
    },
    fontSizes: {
      1: "16px",
      2: "24px",
      3: "32px",
    },
  },
});
