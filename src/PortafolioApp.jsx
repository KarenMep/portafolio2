import { Educacion } from "./components/Educacion/Educacion"
import { Habilidades } from "./components/Habilidades/Habilidades"
import { Inicio } from "./components/Inicio/Inicio"
import { Menu } from "./components/Menu/Menu"

export const PortafolioApp = () => {
    return (
        <>
            <Menu/>
            <Inicio/>
            <Habilidades/>
            <Educacion/>
        </>
    )
}