import React from "react";
import StarIcon from "../../components/StarIcon";
import { Row, Stack, Col, Card } from "react-bootstrap";
import CounterBox from "../../components/CounterBox";

function DetailInfor({ productInfor }) {
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
    </Stack>
  );
}
export default DetailInfor;
