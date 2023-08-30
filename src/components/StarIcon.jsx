import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function StarIcon({ rate, count }) {
  // rate 값을 반올림합니다.
  const roundedRate = Math.round(rate);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* 채워진 별을 표시합니다. */}
      {Array(roundedRate)
        .fill()
        .map((_, i) => (
          <AiFillStar key={i} style={{ color: "#FF8C4B" }} />
        ))}
      {/* 빈 별을 표시합니다. */}
      {Array(5 - roundedRate)
        .fill()
        .map((_, i) => (
          <AiOutlineStar key={i + roundedRate} style={{ color: "#F1F1F1" }} />
        ))}
      <span style={{ marginLeft: "8px", color: "#1B4B66", fontSize: "14px" }}>
        {count} Ratings
      </span>
    </div>
  );
}

export default StarIcon;
