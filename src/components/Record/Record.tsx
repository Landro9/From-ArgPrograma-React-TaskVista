import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './record.css';

const Record = () =>{
    const navigator = useNavigate()

    return (
        <Container className="RegistroContainer">
      <Row className="justify-content-md-center">
        <Col md={4} className="RegistroBox">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Correo electrónico" />
            </Form.Group>

            <Form.Group controlId="formBasicUsername">
              <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>

            <Form.Group controlId="formBasicUsername">
              <Form.Control type="text" placeholder="Apellido" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>

            <Button className="RegistroButton" variant="primary" type="submit">
              Registrarse
            </Button>
          </Form>
          <div className="Terms">
            Al registrarte, aceptas nuestras <span className="Link" onClick={() => navigator("/condiciones")}>Condiciones</span>. 
            Obtén más información sobre cómo recopilamos, usamos y compartimos tu información en nuestra{' '}
            <span className="Link" onClick={() => navigator("/politicaDatos")}>Política de datos</span>, así como el uso de cookies en nuestro{' '}
            <span className="Link" onClick={() => navigator("/politicaCookies")}>Política de cookies</span>.
          </div>
        </Col>
      </Row>
    </Container>
    )
}

export default Record