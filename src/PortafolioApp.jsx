import { Educacion } from "./components/Educacion/Educacion"
import { Habilidades } from "./components/Habilidades/Habilidades"
import { Inicio } from "./components/Inicio/Inicio"
import { Menu } from "./components/Menu/Menu"
import Pie from "./components/Pie/Pie"
import { Proyectos } from "./components/Proyectos/Proyectos"
// import { AppRouter } from "./router/AppRouter"

export const PortafolioApp = () => {
    return (
        <>
            {/* <AppRouter/> */}
            <Menu/>
            <Inicio/>
            <Habilidades/>
            <Educacion/>
            <Proyectos/>
            <Pie/>
        </>
    )
}