import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import textVariants from "../../styles/variants/textVariants";

export default function Header() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategory(response.data);
      } catch (error) {
        console.error("Error fetching the data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    // 여기에 검색 로직 추가
  };

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src="/logo.png" alt="Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {category.map((item) => (
              <Nav.Link
                style={{
                  color: "var(--color-high-emphasis)",
                  ...textVariants.H_M_14,
                }}
                as={Link}
                to={`/category/${item}`}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search for products or brands....."
              className="me-2"
              aria-label="Search"
              style={{
                width: "362px",
                backgroundColor: "var(--color-grey)",
                border: "none",
              }}
            />
          </Form>
          <Navbar.Brand style={{ marginLeft: "20px" }}>
            <img src="/heart.png" alt="profile"></img>
          </Navbar.Brand>
          <Navbar.Brand style={{ marginLeft: "10px" }}>
            <img src="/profile.png" alt="profile"></img>
          </Navbar.Brand>
          <Navbar.Brand style={{ marginLeft: "10px" }} as={Link} to="/carts">
            <img src="/cart.png" alt="cart"></img>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
