import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomButton from "../../components/Button/CustomButton";

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
          <Card.Text>{productDescrip}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DetailFooter;
