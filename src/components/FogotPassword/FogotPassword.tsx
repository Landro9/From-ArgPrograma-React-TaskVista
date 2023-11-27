import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./fogotPasword.css";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    try {
      alert(`Se envió un correo de restablecimiento de contraseña a ${email}`);
    } catch (error) {
      console.error('Error al intentar restablecer la contraseña:', error);
      alert('No se pudo enviar el correo de restablecimiento de contraseña. Inténtalo de nuevo.');
    }
  };

  return (
    <Container className="LoginContainer">
      <Row className="justify-content-md-center align-items-center" style={{ minHeight: '100vh' }}>
        <Col md={4} className="LoginBox">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Button className="LoginButton" variant="primary" type="button" onClick={handleResetPassword}>
              Restablecer Contraseña
            </Button>

            <div className="SignupLink">
              <Link to="/login">Volver al inicio de sesión</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;