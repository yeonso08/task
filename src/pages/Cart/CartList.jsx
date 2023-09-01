import React from "react";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import CartCard from "../../components/Card/CartCard";

function CartList({ basketItems }) {
  return (
    <Stack gap={3}>
      <h1 style={{ color: "var(--color-primary)" }}>My Cart</h1>
      <Card style={{ border: "none" }}>
        <Card.Header
          style={{
            backgroundColor: "var(--color-bright)",
            borderBottom: "2px solid var(--color-grey)",
            color: "var(--color-low-emphasis)",
          }}
        >
          <Row>
            <Col sm={6}>Product Name</Col>
            <Col sm={2}>Price</Col>
            <Col sm={2}>Qty</Col>
            <Col sm={2}>Subtotal</Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <CartCard basketItems={basketItems} />
        </Card.Body>
      </Card>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" style={{ border: "none" }}>
          <Accordion.Header
            style={{ borderBottom: "2px solid var(--color-grey)" }}
          >
            Aplly Coupon Code
          </Accordion.Header>
          <Accordion.Body
            style={{ borderBottom: "2px solid var(--color-grey)" }}
          >
            1
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Stack>
  );
}

export default CartList;
