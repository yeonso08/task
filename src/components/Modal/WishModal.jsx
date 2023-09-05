import { useState, useRef } from "react";
import { Overlay, Popover, Card, Row, Col } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { likedProductsState } from "../../atom/heartAtom";

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
              {Object.keys(wishInfor).map((id) => (
                <Card
                  style={{
                    border: "none",
                    marginTop: "20px",
                    marginBottom: "60px",
                    height: "110px",
                  }}
                  key={id}
                >
                  <Row>
                    <Col lg={1} xs={2}>
                      <Card.Img
                        style={{ width: "75px", height: "80px" }}
                        src={id}
                      />
                    </Col>
                  </Row>
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
