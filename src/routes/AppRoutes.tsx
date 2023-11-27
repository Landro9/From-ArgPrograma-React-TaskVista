import { Route, Routes } from "react-router-dom"
import LandingPage from "../page/LandingPage"
import TaskDetailPeage from "../page/TaskDetailPeage"
import Login from "../components/Login/Login"
import Record from "../components/Record/Record"
import CookiesPolicy from "../components/Policy/CookiesPolicy"
import Conditions from "../components/Policy/Conditions"
import DataPolicy from "../components/Policy/DataPolicy"
import ForgotPassword from "../components/FogotPassword/FogotPassword"

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/detalle/:taskId" element={<TaskDetailPeage></TaskDetailPeage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registro" element={<Record></Record>}></Route>
        <Route path="/condiciones" element={<Conditions></Conditions>}></Route>
        <Route path="/politicaDatos" element={<DataPolicy></DataPolicy>}></Route>
        <Route path="/politicaCookies" element={<CookiesPolicy></CookiesPolicy>}></Route>
        <Route path="/recuperar" element={<ForgotPassword></ForgotPassword>}></Route>
    </Routes>
  )
}

export default AppRoutes