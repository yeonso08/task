import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function ItemList() {
  const { id } = useParams();
  const [likedProducts, setLikedProducts] = useState({}); // 각 제품의 좋아요 상태를 저장
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${id}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching the data: ", error);
      }
    };

    fetchData();
  }, [id]);

  const toggleLike = (productId) => {
    setLikedProducts((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

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
      <Row>
        {products.map((item) => (
          <Col
            key={item.id}
            md={4}
            lg={3}
            xl={2}
            style={{ marginRight: "60px" }}
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
  );}

export default ItemList;
