import { Button, Card } from "react-bootstrap";
import "./Home.css";
import textVariants from "../../styles/variants/textVariants";

export default function Hero() {
  return (
    <Card
      style={{
        margin: "30px",
        borderRadius: "24px",
        color: "var(--color-primary)",
      }}
    >
      <Card.Img
        src="/HomePic.png"
        alt="Card image"
        style={{ height: "400px", borderRadius: "24px" }}
      />
      <Card.Body
        className="custom-card-body"
        style={{
          position: "absolute",
          top: "50%",
          right: "0",
          borderRadius: "24px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(222, 222, 222, 0.7)",
        }}
      >
        <Card.Title
          style={{
            fontWeight: 800,
            fontSize: "60px",
            lineHeight: "84px",
          }}
        >
          Carry your Funk
        </Card.Title>
        <Card.Text
          style={{
            fontWeight: 500,
            fontSize: "28px",
            lineHeight: "38px",
          }}
        >
          Trendy handbags collection for your <br />
          party animal
        </Card.Text>
        <Button
          style={{
            width: "180px",
            height: "44px",
            backgroundColor: "#1B4B66",
            border: "none",
            ...textVariants.P_M_16,
          }}
        >
          → See more
        </Button>
      </Card.Body>
    </Card>
  );
}
