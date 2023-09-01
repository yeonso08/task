import { React, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CartCard() {
  const [basketItems, setBasketItems] = useState([]);
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);

  return (
    <>
      {basketItems.map((item) => (
        <Card style={{border: "none"}}>
          <Row>
            <Col sm={2}>
              <Card.Img src={item.image} />
            </Col>
            <Col sm={4}>
            <Card.Title style={{fontSize: "14px", color: "var(--color-high-emphasis)"}}>{item.title}</Card.Title>
            <Card.Title style={{fontSize: "14px", color: "var(--color-low-emphasis)"}}>{item.category}</Card.Title>
            <Card.Title style={{fontSize: "14px", color: "var(--color-low-emphasis)"}}>Qty- {item.quantity}</Card.Title>
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
        </Card>
      ))}
    </>
  );
}

export default CartCard;
