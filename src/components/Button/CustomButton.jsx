import React from "react";
import "./Button.css";

function CustomButton({ children, style, onClick }) {
  return (
    <button className="customButton" style={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default CustomButton;
