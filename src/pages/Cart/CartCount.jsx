import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import CustomButton from "../../components/Button/CustomButton";
import textVariants from "../../styles/variants/textVariants";

function CartCount({ basketItems }) {
  const total = basketItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <Card style={{ border: "none" }}>
      <Card.Header
        style={{
          backgroundColor: "var(--color-bright)",
          color: "var(--color-dark)",
          ...textVariants.H_S_20,
        }}
      >
        Order Summary
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <div
              style={{
                color: "var(--color-low-emphasis)",
                ...textVariants.P_M_16,
              }}
            >
              Sub Total
            </div>
          </Col>
          <Col>
            <div
              style={{
                ...textVariants.M_X_16,
              }}
            >
              ${total}
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col>
            <div
              style={{
                color: "var(--color-low-emphasis)",
                ...textVariants.P_M_16,
              }}
            >
              Discount
            </div>
          </Col>
          <Col>
            <div
              style={{
                ...textVariants.M_X_16,
              }}
            >
              $-0.00
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col>
            <div
              style={{
                color: "var(--color-low-emphasis)",
                ...textVariants.P_M_16,
              }}
            >
              Delivery Free
            </div>
          </Col>
          <Col>
            <div
              style={{
                ...textVariants.M_X_16,
              }}
            >
              $-0.00
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "10px", ...textVariants.S_M_16 }}>
          <Col>
            <div>Grand Total</div>
          </Col>
          <Col>
            <div>${total}</div>
          </Col>
        </Row>
      </Card.Body>
      <Row>
        <Col>
          <CustomButton style={{ width: "180px", marginTop: "20px" }}>
            Place Order
          </CustomButton>
        </Col>
        <Col>
          <CustomButton style={{ width: "180px", marginTop: "20px" }}>
            Continue Shopping
          </CustomButton>
        </Col>
      </Row>
    </Card>
  );
}

export default CartCount;
