import { Navigate, Route, Routes } from "react-router-dom"
import { Educacion } from "../components/Educacion/Educacion"
import { Habilidades } from "../components/Habilidades/Habilidades"
import { Inicio } from "../components/Inicio/Inicio"
import { Proyectos } from "../components/Proyectos/Proyectos"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='inicio' element={<Inicio/>}/>
            <Route path='habilidades/*' element={<Habilidades/>}/>
            <Route path='educacion/*' element={<Educacion/>}/>
            <Route path='proyectos' element={<Proyectos/>}/>

            <Route path='/' element={<Navigate to='/inicio'/> }/>
            
        </Routes>
    </>
  )
}
