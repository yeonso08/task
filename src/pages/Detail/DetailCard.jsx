import React from "react";
import Image from "react-bootstrap/Image";

function DetailCard({ productImg }) {
  return (
    <Image
      src={productImg}
      rounded
      style={{ width: "605px", height: "605px" }}
    />
  );
}

export default DetailCard;
