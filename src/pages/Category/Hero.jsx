import Card from "react-bootstrap/Card";

export default function Hero() {
  return (
    <Card style={{ margin: "30px", border: "none" }}>
      <Card.Img src="/hero.png" alt="Card image" style={{ height: "400px" }} />
    </Card>
  );
}
