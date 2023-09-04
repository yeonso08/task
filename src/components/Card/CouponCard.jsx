import React from "react";
import { Card } from "react-bootstrap";

function CouponCard({ title, code }) {
  return (
    <Card
      style={{
        height: "90px",
        width: "400px",
        marginTop: "20px",
        borderColor: "var(--color-primary)",
      }}
    >
      <Card.Body className="d-flex align-items-center justify-content-between">
        <div>
          <Card.Subtitle>{title}</Card.Subtitle>
          <Card.Text style={{ color: "var(--color-primary)" }}>
            Terms & Conditions
          </Card.Text>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Card
            style={{
              backgroundColor: "var(--color-grey)",
              border: "none",
              height: "60px",
              width: "120px",
              margin: "0",
            }}
          >
            <Card.Body className="d-flex flex-column align-items-center justify-content-center p-0">
              <Card.Subtitle style={{ color: "var(--color-low-emphasis)" }}>
                Use Code
              </Card.Subtitle>
              <Card.Text>{code}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CouponCard;
