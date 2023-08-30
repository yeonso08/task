import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import axios from "axios";
import HeartIcon from "../../components/HeartIcon";
import StarIcon from "../../components/StarIcon";
import { Link } from "react-router-dom";

function ItemList() {
  const { id } = useParams();
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
              <Link to={`/products/${item.id}`}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{ height: "286px", backgroundColor: "#C4C4C4" }}
                />
              </Link>
              <Card.Body>
                <Card.Title
                  style={{ fontSize: "18px", textDecoration: "none" }}
                  as={Link}
                  to={`/products/${item.id}`}
                >
                  {item.title}
                </Card.Title>
                <Card.Subtitle> {item.category}</Card.Subtitle>
                <Card.Subtitle style={{ marginTop: "5px" }}>
                  <StarIcon rate={item.rating.rate} count={item.rating.count} />
                </Card.Subtitle>
                <Card.Text>
                  ${item.price}
                  <HeartIcon productId={item.id} />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;
