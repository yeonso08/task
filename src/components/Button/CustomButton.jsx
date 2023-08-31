import React from "react";
import "./Button.css";

function CustomButton({ children, style }) {
  return (
    <button className="customButton" style={style}>
      {children}
    </button>
  );
}

export default CustomButton;
