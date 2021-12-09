import { createStitches } from "@stitches/react";

export const { styled, css, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      backgroundDefault: "hsla(0, 0%, 7%, 1)",
      backgroundHigher: "hsla(0, 0%, 10%, 1)",
      backgroundHigherTransparent: "hsla(0, 0%, 10%, 0.7)",

      foregroundDefault: "hsla(0, 0%, 100%, 1)",
      foregroundDimmer: "hsla(0, 0%, 100%, 0.67)",
      foregroundDimmest: "hsla(0, 0%, 100%, 0.51)",

      text1: "hsla(0, 0%, 100%, 1)",
      text2: "hsla(0, 0%, 100%, 0.67)",
      text3: "hsla(0, 0%, 100%, 0.51)",
      accentPrimaryDefault: "hsla(165, 82%, 51%, 1);",
    },
    fonts: {
      system: "system-ui, sans-serif",
      sans: "Supreme Variable, sans-serif",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "20px",
      5: "24px",
      6: "32px",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "64px",
      6: "128px",
    },
    sizes: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "64px",
      6: "128px",
    },
    radii: {
      1: "2px",
      2: "4px",
      3: "8px",
      round: "9999px",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
  },
});
