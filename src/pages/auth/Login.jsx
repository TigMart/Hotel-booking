import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { login } from "../../actions/auth/auth";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    
    try {
      const response = await login({ email, password });
      if (response.data) {
        // 1. save user Info
        window.localStorage.setItem("auth", JSON.stringify(response.data));
        dispatch({
          type: "LOGGED_IN_USER",
          payload: response.data,
        });
        // 2. navigate to /dashboard
        navigate("/dashboard");
      }
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }} className="mt-4">
          <div className="h3">Welcome</div>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
            explicabo.
          </p>
          <Form onSubmit={loginHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign in
            </Button>
            <p className="mt-4">
              <small className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
                ducimus?
              </small>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
