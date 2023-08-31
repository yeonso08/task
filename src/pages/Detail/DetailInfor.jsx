import React from "react";
import Stack from "react-bootstrap/Stack";
import StarIcon from "../../components/StarIcon";

function DetailInfor({ productInfor }) {
  return (
    <Stack gap={3}>
      <div>
        <h1>{productInfor.title}</h1>
        <div>
          <h4>{productInfor.category}</h4>
        </div>
      </div>
      <div>
        <StarIcon
          rate={productInfor?.rating?.rate}
          count={productInfor?.rating?.count}
        />
      </div>
      <div>${productInfor.price}</div>
      <div>Fourth item</div>
    </Stack>
  );
}

export default DetailInfor;
