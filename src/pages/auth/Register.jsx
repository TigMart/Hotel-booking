import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }} className="mt-2">
          <div className="h3">Create account</div>
          <p className="text-muted">Lorem ipsum dolor sit amet.</p>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign up
            </Button>
            <p className="mt-3">
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

export default Register;
