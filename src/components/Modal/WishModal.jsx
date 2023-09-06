import { useState, useRef } from "react";
import { Overlay, Popover, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { likedProductsState } from "../../atom/heartAtom";
import textVariants from "../../styles/variants/textVariants";

function WishModal() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const wishInfor = useRecoilValue(likedProductsState);

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
                    marginTop: "20px",
                    marginBottom: "60px",
                    height: "110px",
                  }}
                  key={item.id}
                >
                  <Link
                    to={`/products/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Row>
                      <Col xs={4}>
                        <Card.Img
                          style={{ width: "75px", height: "80px" }}
                          src={item.image}
                        />
                      </Col>
                      <Col xs={8}>
                        <Card.Title
                          style={{
                            color: "var(--color-high-emphasis)",
                            ...textVariants.P_M_12,
                          }}
                        >
                          {item.title}
                        </Card.Title>
                      </Col>
                    </Row>
                  </Link>
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
