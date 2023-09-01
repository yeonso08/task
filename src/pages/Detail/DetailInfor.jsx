import React from "react";
import StarIcon from "../../components/StarIcon";
import { Row, Stack, Col, Card } from "react-bootstrap";
import CounterBox from "../../components/CounterBox";
import CustomButton from "../../components/Button/CustomButton";
import useCart from "../../hooks/useCart";

function DetailInfor({ productInfor }) {
  const { addToCart } = useCart();
  return (
    <Stack gap={3}>
      <div>
        <h1>{productInfor.title}</h1>
        <div>
          <h4>{productInfor.category}</h4>
        </div>
      </div>
      <div>
        <StarIcon
          rate={productInfor?.rating?.rate}
          count={productInfor?.rating?.count}
        />
      </div>
      <div>${productInfor.price}</div>
      <hr />
      <Row>
        <Col>
          <h5>Delivery Details</h5>
          <div>
            Check estimated delivery <br />
            date/pickup option.
          </div>
        </Col>
        <Col>
          <Card
            body
            style={{
              backgroundColor: "var(--color-grey)",
              border: "none",
              width: "380px",
            }}
          >
            <Col style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ color: "var(--color-low-emphasis)" }}>
                Apply Valid Pincode
              </div>
              <div style={{ color: "var(--color-primary)" }}>Check</div>
            </Col>
          </Card>
        </Col>
      </Row>
      <div style={{ display: "flex" }}>
        Quantity:
        <span style={{ marginLeft: "20px" }}>
          <CounterBox />
        </span>
      </div>
      {/* 쿠폰 카드 */}
      <Card
        style={{
          height: "100px",
          width: "400px",
          borderColor: "var(--color-primary)",
        }}
      >
        <Card.Body className="d-flex align-items-center justify-content-between">
          <div>
            <Card.Subtitle>
              Get up to 30% Off on order <br /> value above $100
            </Card.Subtitle>
            <Card.Text style={{ color: "var(--color-primary)" }}>
              Terms & Conditions
            </Card.Text>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Card
              style={{
                backgroundColor: "var(--color-grey)",
                border: "none",
                height: "70px",
                width: "120px",
                margin: "0",
              }}
            >
              <Card.Body className="d-flex flex-column align-items-center justify-content-center p-0">
                <Card.Text style={{ color: "var(--color-low-emphasis)" }}>
                  Use Code
                </Card.Text>
                <Card.Subtitle>ORDER100</Card.Subtitle>
              </Card.Body>
            </Card>
          </div>
        </Card.Body>
      </Card>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <CustomButton onClick={() => addToCart(productInfor)}>
          Add To Bag
        </CustomButton>
        <CustomButton style={{ marginLeft: "30px" }}>
          Add To Wishlist
        </CustomButton>
      </div>
    </Stack>
  );
}
export default DetailInfor;
