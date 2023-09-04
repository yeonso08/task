import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import DetailCard from "./DetailCard";
import DetailInfor from "./DetailInfor";
import DetailFooter from "./DetailFooter";

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching the data: ", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Layout />
      <Container>
        <Row>
          <Col>
            <DetailCard productImg={product.image} />
          </Col>
          <Col>
            <DetailInfor productInfor={product} />
          </Col>
        </Row>
        <DetailFooter productDescrip={product.description} />
      </Container>
    </>
  );
}

export default Detail;
