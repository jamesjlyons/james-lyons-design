import Navbar from "./navbar.tsx";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Navbar>
        <a href="#">Home</a>
        <a href="#">Work</a>
      </Navbar>
    </>
  );
}
