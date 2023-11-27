import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './login.css';

const Login = () => {

  const navigator = useNavigate()

  return (
    <Container className="LoginContainer">
      <Row className="justify-content-md-center">
        <Col md={4} className="LoginBox">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>

            <Button className="LoginButton" variant="primary" type="submit">
              Iniciar sesión
            </Button>
          </Form>
          <div className="ForgotPassword">
            <a onClick={() => navigator("/recuperar")}>¿Olvidaste tu contraseña?</a>
          </div>
          <div className="SignupLink">
            ¿No tienes una cuenta? <a onClick={() => navigator("/registro")}>Regístrate</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
