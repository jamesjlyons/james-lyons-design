// export default function Nav() {
//   return (
//     <nav>
//       <a href="#">Home</a>
//       <a href="#">Work</a>
//     </nav>
//   );
// }
import React from "react";
import { styled } from "../stitches.config";
import Link from "next/link";

const Nav = styled("nav", {
  display: "flex",
  position: "fixed",
  bottom: "$4",
  width: "inherit",
  maxWidth: "640px",
  background: "rgba(25, 25, 25, 0.7)",
  border: "1px solid #484848",
  boxShadow: "0px 9px 30px rgba(0, 0, 0, 0.16)",
  backdropFilter: "blur(20px)",
  borderRadius: "20px",
  padding: "$4",
  fontSize: "$5",
  gap: "$3",
});

function Navbar() {
  return (
    <Nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/work">
        <a>Work</a>
      </Link>
    </Nav>
  );
}

export default Navbar;
