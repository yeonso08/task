import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';

export default function Header() {

    const handleSearch = (event) => {
        event.preventDefault();
        // 여기에 검색 로직 추가
      }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand as={Link} to="/">CORA'L</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Handbags</Nav.Link>
            <Nav.Link href="#action2">Watches</Nav.Link>
            <Nav.Link href="#action2">Skincare</Nav.Link>
            <Nav.Link href="#action2">Jewellery</Nav.Link>
            <Nav.Link href="#action2">Apparels</Nav.Link>
            {/* 장바구니 만들 때 사용
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="Search for products or brands....."
            className="me-2"
            aria-label="Search"
            style={{ width: '362px' }}
          />
        </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}