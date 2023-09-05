import React from "react";
import { Card, Col } from "react-bootstrap";
import textVariants from "../../styles/variants/textVariants";

const ApplyCard = ({ cardColor, cardWidth, contentText }) => {
  return (
    <Card
      body
      style={{
        backgroundColor: cardColor || "var(--color-grey)",
        border: "none",
        width: cardWidth || "380px",
      }}
    >
      <Col style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            color: "var(--color-low-emphasis)",
            ...textVariants.P_M_16,
          }}
        >
          {contentText || "Apply Valid Pincode"}
        </div>
        <div
          style={{
            color: "var(--color-primary)",
            ...textVariants.H_S_14,
          }}
        >
          CHECK
        </div>
      </Col>
    </Card>
  );
};

export default ApplyCard;
