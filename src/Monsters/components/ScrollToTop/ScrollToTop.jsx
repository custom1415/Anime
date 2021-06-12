import React from "react";
import { FaChevronUp } from "react-icons/fa";

const Scroll = () => {
  const Top = () => {
    window.scrollTo({ top: "0", behavior: "smooth" });
  };
  return (
    <div
      onClick={Top}
      style={{
        position: "fixed",
        bottom: "50px",
        right: "30px",
        background: "rgba(0,0,0,0.5)",
        padding: "15px",
      }}
    >
      <FaChevronUp style={{ color: "white", fontSize: "16px" }} />
    </div>
  );
};
export default Scroll;
