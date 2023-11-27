import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"
import AppRoutes from "./routes/AppRoutes"
import {BrowserRouter as Router} from "react-router-dom";

//Notificaciones al usuario
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <ToastContainer></ToastContainer>
    <Router>
        <NavBar></NavBar>
          <AppRoutes></AppRoutes>
        <Footer></Footer>
    </Router>
    
    </>
  )
}

export default App