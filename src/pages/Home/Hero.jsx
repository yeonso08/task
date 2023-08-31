import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Home.css";

export default function Hero() {
  return (
    <Card style={{ margin: "30px", borderRadius: "24px", color: "#1B4B66" }}>
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
        <Card.Title style={{ fontWeight: 1000, fontSize: 50 }}>
          Carry your Funk
        </Card.Title>
        <Card.Text>
          Trendy handbags collection for your <br />
          party animal
        </Card.Text>
        <Button style={{ backgroundColor: "#1B4B66", border: "none" }}>
          → See more
        </Button>
      </Card.Body>
    </Card>
  );
}
