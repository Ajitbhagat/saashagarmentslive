import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Search from "../Search/Search";
const Navbar = () => {
  return (
    <div id="main">
      <article>
        <Logo />
        <Search/>
        <Menu />
      </article>
    </div>
  );
};

export default Navbar;
