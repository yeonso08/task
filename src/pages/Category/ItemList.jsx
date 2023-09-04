import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import HeartIcon from "../../components/HeartIcon";
import StarIcon from "../../components/StarIcon";
import textVariants from "../../styles/variants/textVariants";

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
      <Row className="justify-content-between" style={{marginLeft: "10px", marginRight: "10px"}}>
        <Col md="auto">
        <img src="/grid.png" alt="grid"></img>
        <span style={{ marginLeft: "10px", ...textVariants.P_M_16 }}>showing 1 - {products.length} of {products.length} item</span>
        </Col>
        <Col md="auto">
        </Col>
      </Row>
      <Row style={{marginTop: "30px", marginLeft: "60px"}}>
        {products.map((item) => (
          <Col
            key={item.id}
            md={4}
            lg={3}
            xl={2}
            style={{ marginRight: "60px", }}
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
                  style={{ ...textVariants.P_M_16, textDecoration: "none" }}
                  as={Link}
                  to={`/products/${item.id}`}
                >
                  {item.title}
                </Card.Title>
                <Card.Subtitle
                  style={{
                    ...textVariants.P_R_14,
                    color: "var(--color-low-emphasis)",
                    marginTop: "5px",
                  }}
                >
                  {item.category}
                </Card.Subtitle>
                <Card.Subtitle style={{ marginTop: "5px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <StarIcon
                      rate={item.rating.rate}
                      style={{ width: "120px", height: "24px" }}
                    />
                    <span
                      style={{
                        marginLeft: "10px",
                        color: "var(--color-primary)",
                        fontSize: "14px",
                        ...textVariants.H_M_14,
                      }}
                    >
                      {item?.rating?.count} Ratings
                    </span>
                  </div>
                </Card.Subtitle>
                <Card.Text style={{ marginTop: "5px", ...textVariants.P_M_16 }}>
                  ${item.price}
                  <HeartIcon
                    productId={item.id}
                    style={{ width: "24px", height: "24px" }}
                  />
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
