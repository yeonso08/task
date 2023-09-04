import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import HeartIcon from "../../components/HeartIcon";
import textVariants from "../../styles/variants/textVariants";

function NewArrivals() {
  const [products, setProducts] = useState([]);
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
      <Row className="justify-content-between" style={{ margin: "20px" }}>
        <Col md="auto">
          <div style={{ color: "var(--color-dark)", ...textVariants.H_S_34 }}>
            New Arrivals
          </div>
        </Col>
        <Col md="auto">
          <div
            style={{ color: "var(--color-primary)", ...textVariants.H_S_14 }}
          >
            View All 〉
          </div>
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
              <Link to={`/products/${item.id}`}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{ height: "286px" }}
                />
              </Link>
              <Card.Body>
                <Card.Title
                  style={{ ...textVariants.P_M_16, textDecoration: "none" }}
                  as={Link}
                  to={`/products/${item.id}`}
                >
                  {item.title}
                </Card.Title>
                <Card.Subtitle
                  style={{
                    color: "var(--color-low-emphasis)",
                    marginTop: "8px",
                    ...textVariants.P_R_14,
                  }}
                >
                  {item.category}
                </Card.Subtitle>
                <Card.Text style={{ marginTop: "8px", ...textVariants.P_M_16 }}>
                  ${item.price}
                  <HeartIcon productId={item.id} style={{ fontSize: "24px" }} />
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