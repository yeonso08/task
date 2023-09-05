import React from "react";
import { Container ,Stack, Row, Col, Card, Accordion } from "react-bootstrap";
import CartCard from "../../components/Card/CartCard";
import textVariants from "../../styles/variants/textVariants";

function CartList({ basketItems, setReload }) {
  return (
    <Container>
    <Stack gap={3}>
      <div style={{ color: "var(--color-primary)", ...textVariants.H_S_34 }}>My Cart</div>
      <Card style={{ border: "none" }}>
        <Card.Header
          style={{
            backgroundColor: "var(--color-bright)",
            borderBottom: "2px solid var(--color-grey)",
            color: "var(--color-low-emphasis)",
          }}
        >
          <Row style={{color: "var(--color-low-emphasis)", ...textVariants.P_M_16}}>
            <Col sm={6}>Product Name</Col>
            <Col sm={2}>Price</Col>
            <Col sm={2}>Qty</Col>
            <Col sm={2}>Subtotal</Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <CartCard basketItems={basketItems} setReload={setReload} />
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
    </Container>
  );
}

export default CartList;
