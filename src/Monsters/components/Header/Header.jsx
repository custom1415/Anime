import React from "react";

import Logo from "../../Assets/Logo.png";
import "./Header.styles.css";
const Header = () => {
  const [Class, setClass] = React.useState("Header");
  const Scroll = () => {
    if (window.scrollY <= 100) {
      setClass("Header");
    } else {
      setClass("Header animate");
    }
  };
  window.addEventListener("scroll", Scroll);

  return (
    <div  className={Class}>
      <div className="ImageBox">
        <img src={Logo} alt="" className="logo" />
      </div>
      <div className="links">
        {/* <div>Home</div>
        <div>About</div> */}
      </div>
    </div>
  );
};
export default Header;
