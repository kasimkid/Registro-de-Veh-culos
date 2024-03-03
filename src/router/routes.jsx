import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "../views/Home"
import { NuevoIngreso } from "../views/NuevoIngreso"
import { Vehiculos } from "../views/Vehiculos"
// import SidebarMenu from "../components/SidebarMenu"

export const MyRoutes = () => {
  return (
    <>    
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/nuevo_ingreso" element={<NuevoIngreso/>}/>
            <Route path="/vehiculos" element={<Vehiculos/>}/>
        </Routes>
    </>

    
  )
}