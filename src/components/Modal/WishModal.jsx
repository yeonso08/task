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
                    height: "110px",
                    position: "relative", // Card에 상대적 위치 설정
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
                          style={{ width: "65px", height: "70px" }}
                          src={item.image}
                        />
                      </Col>
                      <Col xs={7}>
                        <Card.Title
                          style={{
                            color: "var(--color-high-emphasis)",
                            ...textVariants.P_M_12,
                          }}
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
                          onClick={() => {
                            // 원하는 동작을 여기에 넣습니다, 예를 들면 아이템을 위시리스트에서 제거하는 것
                          }}
                        >
                          <img
                            src="/cross.png"
                            alt="delete"
                            style={{ width: "15px", height: "15px" }}
                          ></img>
                        </button>
                      </Col>
                    </Row>
                  </Link>
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
