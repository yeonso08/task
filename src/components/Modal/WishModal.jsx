import { useState, useRef } from "react";
import { Overlay, Popover, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { likedProductsState } from "../../atom/heartAtom";
import textVariants from "../../styles/variants/textVariants";

function WishModal() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const wishInfor = useRecoilValue(likedProductsState);
  const [likedProducts, setLikedProducts] = useRecoilState(likedProductsState);

  const setDelete = (id) => {
    const updatedProducts = likedProducts.filter((p) => p.id !== id);
    setLikedProducts(updatedProducts);
  };

  return (
    <>
      <button
        ref={target}
        style={{ backgroundColor: "var(--color-bright)", border: "none" }}
        onClick={() => setShow(!show)}
      >
        <img src="/heart.png" alt="wishlist" />
      </button>

      <Overlay
        target={target.current}
        show={show}
        placement="bottom"
        rootClose
        onHide={() => setShow(false)}
      >
        {(props) => (
          <Popover id="popover-contained" {...props}>
            <Popover.Body>
              {wishInfor.map((item) => (
                <Card
                  style={{
                    border: "none",
                    height: "110px",
                    position: "relative",
                  }}
                  key={item.id}
                >
                  <Row>
                    <Col xs={4}>
                      <Link to={`/products/${item.id}`}>
                        <Card.Img
                          style={{ width: "65px", height: "70px" }}
                          src={item.image}
                        />
                      </Link>
                    </Col>
                    <Col xs={7}>
                      <Card.Title
                        style={{
                          color: "var(--color-high-emphasis)",
                          textDecoration: "none",
                          ...textVariants.P_M_12,
                        }}
                        as={Link}
                        to={`/products/${item.id}`}
                      >
                        {item.title}
                      </Card.Title>
                    </Col>
                    <Col xs={1}>
                      <button
                        style={{
                          position: "absolute",
                          top: "-5px",
                          right: "-5px",
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => setDelete(item.id)}
                      >
                        <img
                          src="/cross.png"
                          alt="delete"
                          style={{ width: "15px", height: "15px" }}
                        ></img>
                      </button>
                    </Col>
                  </Row>
                  <hr />
                </Card>
              ))}
            </Popover.Body>
          </Popover>
        )}
      </Overlay>
    </>
  );
}

export default WishModal;
