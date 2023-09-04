import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import CustomButton from "../../components/Button/CustomButton";
import textVariants from "../../styles/variants/textVariants";

function DetailFooter({ productDescrip }) {
  return (
    <Container>
      <Card
        style={{
          backgroundColor: "var(--color-grey",
          border: "none",
          marginTop: "50px",
        }}
      >
        <Row>
          <Col>
            <CustomButton
              style={{
                color: "var(--color-bright)",
                border: "none",
                backgroundColor: "var(--color-primary)",
              }}
            >
              Product Desription
            </CustomButton>
          </Col>
          <Col>
            <CustomButton
              style={{
                color: "var(--color-low-emphasis)",
                border: "none",
                backgroundColor: "var(--color-grey)",
              }}
            >
              Related Products
            </CustomButton>
          </Col>
          <Col>
            <CustomButton
              style={{
                color: "var(--color-low-emphasis)",
                border: "none",
                backgroundColor: "var(--color-grey)",
              }}
            >
              Ratings and Reviews
            </CustomButton>
          </Col>
        </Row>
      </Card>
      <Card style={{ border: "none", marginTop: "10px" }}>
        <Card.Body>
          <Card.Text
            style={{
              color: "var(--color-low-emphasis)",
              ...textVariants.P_M_16,
            }}
          >
            {productDescrip}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DetailFooter;
