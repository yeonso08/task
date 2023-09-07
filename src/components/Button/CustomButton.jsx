import React from "react";
import "./Button.css";

function CustomButton({ children, style, onClick, variant, className }) {
  let btnClass = "customButton";

  if (variant === "underline") {
    btnClass = "underLineButton";
  }

  if (className) {
    btnClass += ` ${className}`;
  }

  return (
    <button className={btnClass} style={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default CustomButton;
