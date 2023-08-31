import React, { useState } from "react";
import { Card } from "react-bootstrap";

function CounterBox({ onCountChange }) {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange && onCountChange(newCount);
  };

  const handleDecrease = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      onCountChange && onCountChange(newCount);
    }
  };

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "80px",
        textAlign: "center",
        borderColor: "var(--color-primary)"
      }}
    >
      <button
        style={{ backgroundColor: "white", border: "none" }}
        onClick={handleDecrease}
      >
        -
      </button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button
        style={{ backgroundColor: "white", border: "none" }}
        onClick={handleIncrease}
      >
        +
      </button>
    </Card>
  );
}

export default CounterBox;
