import React, { useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import useCart from "../../hooks/useCart";

function CartCard({ basketItems }) {
  const { removeFromCart } = useCart();
  useEffect(() => {}, [removeFromCart]);
  return (
    <>
      {basketItems.map((item) => (
        <Card style={{ border: "none", marginTop: "20px" }}>
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
          <button onClick={() => removeFromCart(item.id)}>Delete</button>
        </Card>
      ))}
    </>
  );
}

export default CartCard;
