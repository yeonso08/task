import React from "react";
import "./Button.css";

function CustomButton({ children, style, onClick, variant }) {
  let btnClass = "customButton";
  
  if (variant === "underline") {
    btnClass = "underLineButton";
  }

  return (
    <button className={btnClass} style={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default CustomButton;
