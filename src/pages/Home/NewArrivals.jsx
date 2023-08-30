import React, { useEffect, useState, useRef } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import axios from "axios";
import "./Home.css"; // CSS 파일을 import 합니다.

function NewArrivals() {
  const [products, setProducts] = useState([]);
  const scrollableRef = useRef(null);  // 1. 스크롤을 조정할 ref 생성

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

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollableRef.current) {
        const currentScrollPosition = scrollableRef.current.scrollLeft;
        const maxScroll = scrollableRef.current.scrollWidth - scrollableRef.current.clientWidth;  // 스크롤 가능한 최대 위치를 계산

        if (currentScrollPosition >= maxScroll) {
          // 스크롤이 최대 위치에 도달하면, 다시 시작으로 돌립니다.
          scrollableRef.current.scrollLeft = 0;
        } else {
          // 아니면 스크롤을 계속 진행합니다.
          scrollableRef.current.scrollLeft = currentScrollPosition + 1;
        }
      }
    }, 30);

    return () => clearInterval(scrollInterval);
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
      <Row className="scrollableRow" ref={scrollableRef}>  {/* ref 설정 */}
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
