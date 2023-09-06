import { useRef } from "react";
import { Overlay, Popover, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { likedProductsState, showWishModalState } from "../../atom/heartAtom";
import textVariants from "../../styles/variants/textVariants";

function WishModal() {
  const target = useRef(null);
  const wishInfor = useRecoilValue(likedProductsState);
  const [likedProducts, setLikedProducts] = useRecoilState(likedProductsState);
  const [showWishModal, setShowWishModal] = useRecoilState(showWishModalState);

  const setDelete = (id) => {
    const updatedProducts = likedProducts.filter((p) => p.id !== id);
    setLikedProducts(updatedProducts);
  };

  const handleClose = () => {
    setShowWishModal(false);
  };

  const handleToggle = () => {
    setShowWishModal((prevState) => !prevState);
  };

  return (
    <>
      <button
        ref={target}
        style={{ backgroundColor: "var(--color-bright)", border: "none" }}
        onClick={handleToggle}
      >
        <img src="/heart.png" alt="wishlist" />
      </button>

      <Overlay
        target={target.current}
        show={showWishModal}
        placement="bottom"
        rootClose
        onHide={handleClose}
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
                      <Link
                        to={`/products/${item.id}`}
                        style={{
                          color: "var(--color-high-emphasis)",
                          textDecoration: "none",
                          ...textVariants.P_M_12,
                        }}
                      >
                        {item.title}
                      </Link>
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
