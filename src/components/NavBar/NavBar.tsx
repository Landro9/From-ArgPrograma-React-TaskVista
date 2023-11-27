import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { TaskService } from "../../services/TaskService";
import { Task } from "../../types/Task";
import { toast } from "react-toastify";
import ModalAddTask from "../ModalAddTask/ModalAddTask";
import "./navBar.css";

const NavBar = () =>{
    const navigator = useNavigate()
    const [showModal, setShowModal] = useState(false);
    const showBackButton = location.pathname !== '/'; //Para condicionar el uso del retroceso

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

      //Agregar nueva tarea
      const createTask = async (newTask: Task) => {
        try {
          const result = await TaskService.createTask(newTask);
          console.log('Nueva tarea agregada:', result.id);
          navigator(`/detalle/${result.id}`); //Ir al detalle de la tarea creada
      
          // Muestra una notificación de éxito utilizando react-toastify
          toast.success('Tarea creada correctamente', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000, // Cerrar automáticamente después de 2 segundos
          });
        } catch (error) {
          // Muestra una notificación de error si la creación de la tarea falla
          toast.error('Error al crear la tarea', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
          console.error('Error al crear la tarea:', error);
        }
      };

    return (
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        {showBackButton && (
            <Nav className="ms-auto">
              <div className="d-flex align-items-center gap-1">
                <a href="/" className="d-flex align-items-center justify-content-center border rounded-circle" style={{ top: '25px', left: '25px', height: '25px', width: '25px', textDecoration: 'none' }}>
                  <i className="fa-solid fa-arrow-left"></i>
                </a>
              </div>
            </Nav>
          )}
          <Navbar.Brand href="/">TaskVista</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={()=> navigator("/")}>Inicio</Nav.Link>
              <Nav.Link onClick={handleShowModal}>Agregar</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link onClick={() => navigator("/login")}><i className="fas fa-user"></i></Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ModalAddTask showModal={showModal} handleClose={handleCloseModal} createTask={createTask}></ModalAddTask>
      
      </>
    )
}

export default NavBar