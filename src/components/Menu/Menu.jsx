import React from 'react'
import './menu.css'

export const Menu = () => {
    return (
        <>
            <nav className='navbar'>

                <div className="nav_container">
                    <a href="" id='nav_logo'> Karen Mep</a>
                    <div className="nav_toggle" id="mobile-menu">
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </div>

                <ul className="nav_menu">
                    <li className="nav_item">
                        <a href="#inico" className='nav_links' id='inicio-page'>Inicio</a>
                    </li>
                    <li className="nav_item">
                        <a href="#habilidades" className='nav_links' id='-page'>Habilidades</a>
                    </li>
                    <li className="nav_item">
                        <a href="#educacion" className='nav_links' id='-page'>Educacion</a>
                    </li>
                    <li className="nav_item">
                        <a href="#proyectos" className='nav_links' id='-page'>Proyectos</a>
                    </li>
                </ul>

                <div className="nav_idioma">
                    <span className="material-symbols-outlined">
                        brightness_2
                    </span>
                    <span className="material-symbols-outlined">
                        language
                    </span>
                </div>

            </nav>

        </>
    )
}
