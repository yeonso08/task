import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import useCart from "../../hooks/useCart";
import CustomButton from "../Button/CustomButton";

function CartCard({ basketItems, setReload }) {
  const { removeFromCart } = useCart();

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
    setReload((prev) => !prev);
  };

  return (
    <>
      {basketItems.map((item) => (
        <Card style={{ border: "none", marginTop: "20px" }} key={item.id}>
          <Row>
            <Col sm={2}>
              <Card.Img src={item.image} />
            </Col>
            <Col sm={4}>
              <Card.Title
                style={{
                  fontSize: "14px",
                  color: "var(--color-high-emphasis)",
                }}
              >
                {item.title}
              </Card.Title>
              <Card.Title
                style={{ fontSize: "14px", color: "var(--color-low-emphasis)" }}
              >
                {item.category}
              </Card.Title>
              <Card.Title
                style={{ fontSize: "14px", color: "var(--color-low-emphasis)" }}
              >
                Qty- {item.quantity}
              </Card.Title>
            </Col>
            <Col sm={2}>
              <Card.Text>${item.price}</Card.Text>
            </Col>
            <Col sm={2}>
              <Card.Text>{item.quantity}</Card.Text>
            </Col>
            <Col sm={2}>
              <Card.Text>${item.price * item.quantity}</Card.Text>
            </Col>
          </Row>
          <div style={{ display: "flex", gap: "50px", marginLeft: "500px" }}>
            <CustomButton variant="underline" style={{ width: "130px" }}>
              Move To Wishlist
            </CustomButton>
            <CustomButton
              variant="underline"
              style={{ color: "var(--color-error)", width: "70px" }}
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </CustomButton>
          </div>
        </Card>
      ))}
    </>
  );
}

export default CartCard;
