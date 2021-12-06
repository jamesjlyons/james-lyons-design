import { styled } from "../stitches.config";
import Navbar from "./navbar";

const Wrap = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "640px",
  height:
    "calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom));",
  paddingLeft: "$3",
  paddingRight: "$3",
  margin: "0px auto",
  "& main": {
    paddingTop: "$6",
    paddingBottom: "$6",
  },
  "& nav": {
    position: "fixed",
    bottom: "$3",
    width: "calc(320px - $3)",
    left: "50%",
    transform: "translate(-50%, 0%)",
  },
});

export default function Layout({ children }) {
  return (
    <Wrap>
      <main>{children}</main>
      <Navbar>
        <a href="#">Home</a>
        <a href="#">Work</a>
      </Navbar>
    </Wrap>
  );
}
