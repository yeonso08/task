import React, { useState } from "react";
import StarIcon from "../../components/StarIcon";
import { Row, Stack, Col } from "react-bootstrap";
import CounterBox from "../../components/CounterBox";
import CustomButton from "../../components/Button/CustomButton";
import useCart from "../../hooks/useCart";
import textVariants from "../../styles/variants/textVariants";
import CouponCard from "../../components/Card/CouponCard";
import ApplyCard from "../../components/Card/ApplyCard";

function DetailInfor({ productInfor }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const handleCountChange = (count) => {
    setQuantity(count);
  };

  const handleAddToCart = () => {
    addToCart({ ...productInfor, quantity });
  };

  return (
    <Stack gap={3}>
      <div>
        <div style={{ color: "var(--color-dark)", ...textVariants.H_S_34 }}>
          {productInfor.title}
        </div>
        <div
          style={{ color: "var(--color-low-emphasis)", ...textVariants.H_S_20 }}
        >
          {productInfor.category}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <StarIcon
          style={{ width: "152px", height: "24px" }}
          rate={productInfor?.rating?.rate}
        />
        <span
          style={{
            marginLeft: "8px",
            color: "var(--color-light-text)",
            ...textVariants.P_R_16,
          }}
        >
          ({productInfor?.rating?.count}) Ratings
        </span>
      </div>
      <div
        style={{ color: "var(--color-high-emphasis)", ...textVariants.H_B_52 }}
      >
        ${productInfor.price}
      </div>
      <hr />
      <Row>
        <Col>
          <div style={textVariants.H_S_20}>Delivery Details</div>
          <div
            style={{
              color: "var(--color-low-emphasis)",
              marginTop: "10px",
              ...textVariants.P_M_16,
            }}
          >
            Check estimated delivery <br />
            date/pickup option.
          </div>
        </Col>
        <Col>
          <ApplyCard />
        </Col>
      </Row>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <div style={{ color: "var(--color-dark)", ...textVariants.H_S_20 }}>
          Quantity:
        </div>
        <span style={{ marginLeft: "20px" }}>
          <CounterBox onCountChange={handleCountChange} />
        </span>
      </div>
      <CouponCard
        title="Get up to 30% Off on order value above $100"
        code="ORDER100"
      />
      <div style={{ display: "flex", marginTop: "20px" }}>
        <CustomButton onClick={handleAddToCart}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ marginRight: "10px" }}
              src="/cart.png"
              alt="cart"
            ></img>
            Add To Bag
          </div>
        </CustomButton>
        <CustomButton style={{ marginLeft: "30px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ marginRight: "10px" }}
              src="/heart.png"
              alt="heart"
            ></img>
            Add To Wishlist
          </div>
        </CustomButton>
      </div>
    </Stack>
  );
}
export default DetailInfor;
