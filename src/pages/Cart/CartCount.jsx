import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CustomButton from "../../components/Button/CustomButton";

function CartCount({ basketItems }) {
  const total = basketItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <Card style={{ border: "none" }}>
      <Card.Header as="h5" style={{ backgroundColor: "var(--color-bright)" }}>
        Order Summary
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <Card.Text>Sub Total</Card.Text>
          </Col>
          <Col>
            <Card.Text>${total}</Card.Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Text>Discount</Card.Text>
          </Col>
          <Col>
            <Card.Text>$-0.00</Card.Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Text>Delivery Free</Card.Text>
          </Col>
          <Col>
          <Card.Text>$-0.00</Card.Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Text>Grand Total</Card.Text>
          </Col>
          <Col>
            <Card.Text>${total}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
      <Row>
          <Col>
          <CustomButton>Place Order</CustomButton>
          </Col>
          <Col>
          <CustomButton>Continue Shopping</CustomButton>
          </Col>
        </Row>
    </Card>
  );
}

export default CartCount;
