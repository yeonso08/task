import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import axios from "axios";
import "./Home.css"; // CSS 파일을 import 합니다.

function NewArrivals() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching the data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container fluid>
      <Row className="justify-content-between">
        <Col md="auto">
          <div>New Arrivals</div>
        </Col>
        <Col md="auto">
          <div>View All 〉</div>
        </Col>
      </Row>
      <Row className="scrollableRow">
        {products.map((item) => (
          <Col key={item.id} md={4} lg={3} xl={2}>
            <Card style={{ width: "18rem", height: "500px", border: "none" }}>
              <Card.Img
                variant="top"
                src={item.image}
                style={{ height: "286px" }}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.category}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NewArrivals;
