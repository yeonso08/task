import React, { useEffect, useState, useRef } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import axios from "axios";
import "./Home.css"; // CSS 파일을 import 합니다.
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function NewArrivals() {
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState({}); // 각 제품의 좋아요 상태를 저장
  const scrollableRef = useRef(null); // 1. 스크롤을 조정할 ref 생성

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

  const toggleLike = (productId) => {
    setLikedProducts((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollableRef.current) {
        const currentScrollPosition = scrollableRef.current.scrollLeft;
        const maxScroll =
          scrollableRef.current.scrollWidth - scrollableRef.current.clientWidth; // 스크롤 가능한 최대 위치를 계산

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
      <Row className="scrollableRow" ref={scrollableRef}>
        {products.map((item) => (
          <Col
            key={item.id}
            md={4}
            lg={3}
            xl={2}
            style={{ marginRight: "40px" }}
          >
            <Card style={{ width: "18rem", height: "500px", border: "none" }}>
              <Card.Img
                variant="top"
                src={item.image}
                style={{ height: "286px", backgroundColor: "#C4C4C4" }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "18px" }}>
                  {item.title}
                </Card.Title>
                <Card.Subtitle> {item.category}</Card.Subtitle>
                <Card.Text>
                  ${item.price}
                  {likedProducts[item.id] ? (
                    <AiFillHeart
                      style={{ float: "right", color: "red" }}
                      onClick={() => toggleLike(item.id)}
                    />
                  ) : (
                    <AiOutlineHeart
                      style={{ float: "right" }}
                      onClick={() => toggleLike(item.id)}
                    />
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NewArrivals;
