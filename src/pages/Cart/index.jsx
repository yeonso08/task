import { React, useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CartList from "./CartList";
import CartCount from "./CartCount";

function Cart() {
  const [basketItems, setBasketItems] = useState([]);
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);
  return (
    <>
      <Layout />
      <Container>
        <Row>
          <Col>
            <CartList basketItems={basketItems} />
          </Col>
          <Col className="d-flex align-items-center">
            <CartCount basketItems={basketItems} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;
