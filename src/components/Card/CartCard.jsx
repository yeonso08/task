import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import useCart from "../../hooks/useCart";
import CustomButton from "../Button/CustomButton";
import textVariants from "../../styles/variants/textVariants";

function CartCard({ basketItems, setReload }) {
  const { removeFromCart } = useCart();

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
    setReload((prev) => !prev);
  };

  return (
    <>
      {basketItems.map((item) => (
        <Card
          style={{
            border: "none",
            marginTop: "20px",
            marginBottom: "60px",
            height: "110px",
          }}
          key={item.id}
        >
          <Row>
            <Col lg={1} xs={2}>
              <Card.Img
                style={{ width: "75px", height: "80px" }}
                src={item.image}
              />
            </Col>
            <Col lg={5} xs={4}>
              <Card.Title style={textVariants.P_M_16}>{item.title}</Card.Title>
              <Card.Title
                style={{
                  color: "var(--color-low-emphasis)",
                  ...textVariants.P_R_16,
                }}
              >
                {item.category}
              </Card.Title>
              <Card.Title
                style={{
                  color: "var(--color-low-emphasis)",
                  ...textVariants.P_R_16,
                }}
              >
                Qty- {item.quantity}
              </Card.Title>
            </Col>
            <Col xs={2}>
              <div style={textVariants.P_R_14}>${item.price}</div>
            </Col>
            <Col xs={2}>
              <div style={textVariants.P_R_14}>{item.quantity}</div>
            </Col>
            <Col xs={2}>
              <div style={textVariants.P_R_14}>
                ${item.price * item.quantity}
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col className="d-flex justify-content-end">
              <CustomButton
                variant="underline"
                style={{ width: "130px", marginRight: "20px" }}
              >
                Move To Wishlist
              </CustomButton>
              <CustomButton
                variant="underline"
                style={{ color: "var(--color-error)", width: "70px" }}
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </CustomButton>
            </Col>
          </Row>
        </Card>
      ))}
    </>
  );
}

export default CartCard;
