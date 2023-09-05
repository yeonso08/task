import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function StarIcon({ rate, style }) {
  // rate 값을 반올림합니다.
  const roundedRate = Math.round(rate);
  const validRate = roundedRate >= 0 && roundedRate <= 5 ? roundedRate : 0;

  return (
    <div style={{ display: "flex", alignItems: "center", ...style }}>
      {/* 채워진 별을 표시합니다. */}
      {Array(validRate)
        .fill()
        .map((_, i) => (
          <AiFillStar
            key={i}
            style={{ color: "var(--color-highlight)", ...style }}
          />
        ))}
      {/* 빈 별을 표시합니다. */}
      {Array(5 - validRate)
        .fill()
        .map((_, i) => (
          <AiOutlineStar
            key={i + validRate}
            style={{ color: "var(--color-grey)", ...style }}
          />
        ))}
    </div>
  );
}

export default StarIcon;
