import { React, useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { Row, Col } from "react-bootstrap";
import CartList from "./CartList";
import CartCount from "./CartCount";

function Cart() {
  const [basketItems, setBasketItems] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, [reload]);

  return (
    <>
      <Layout />
      <Row>
        <Col sm={7}>
          <CartList basketItems={basketItems} setReload={setReload} />
        </Col>
        <Col sm={1}></Col>
        <Col sm={4} className="d-flex align-items-center">
          <CartCount basketItems={basketItems} />
        </Col>
      </Row>
    </>
  );
}

export default Cart;
