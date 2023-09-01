import React from "react";
import Layout from "../../components/Layout/Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CartList from "./CartList";
import CartCount from "./CartCount";

function Cart() {
  return (
    <>
      <Layout />
      <Container>
        <Row>
          <Col>
            <CartList />
          </Col>
          <Col>
            <CartCount />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;
