import { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import AlertModal from "../../components/Modal/AlertModal";
import CustomButton from "../../components/Button/CustomButton";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

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
        sessionStorage.setItem("token", response.data.token); // <-- 토큰 저장
        navigate("/");
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
      <div className="login-container">
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
          <CustomButton className={"login-button"} type="submit">
            Login
          </CustomButton>
        </Form>
      </div>
    </>
  );
}
