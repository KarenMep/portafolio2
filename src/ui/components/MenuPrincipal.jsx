import React from 'react'
import { NavLink } from 'react-router-dom'

export const MenuPrincipal = () => {
  return (
    <nav>
    <div className="nav_menu">

            <NavLink 
                className={ ({isActive}) => `nav_links ${isActive ? 'active' : ''}`} 
                to="/inicio"
            >
                Inicio
            </NavLink>

            <NavLink 
                className={ ({isActive}) => `nav_links ${isActive ? 'active' : ''}`} 
                to="/habilidades"
            >
                Habilidades
            </NavLink>

            <NavLink 
                className={ ({isActive}) => `nav_links ${isActive ? 'active' : ''}`} 
                to="/educacion"
            >
                Educacion
            </NavLink>

            <NavLink 
                className={ ({isActive}) => `nav_links ${isActive ? 'active' : ''}`} 
                to="/proyectos"
            >
                Proyectos
            </NavLink>
    </div>
</nav>
  )
}
