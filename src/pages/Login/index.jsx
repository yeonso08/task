import { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import AlertModal from "../../components/Modal/AlertModal";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowAlert(false);

    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: id,
        password: password,
      });

      if (response.data && response.data.token) {
        console.log("Login successful!", response.data.token);
      } else {
        setShowAlert(true);
      }
    } catch (error) {
      setShowAlert(true);
    }
  };

  return (
    <>
      <AlertModal 
      show={showAlert} 
      onHide={() => setShowAlert(false)} 
      title="Error" 
      body="Please check your ID or password"
      />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="id"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
        </Form.Group>
        <button type="submit">Login</button>{" "}
      </Form>
    </>
  );
}
