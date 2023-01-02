import { Link, NavLink } from 'react-router-dom';


export const MenuHabilidades = () => {
    return (
        <nav>
            <div className="hab_hab">

                    <NavLink 
                        className="habilidad" 
                        to="/frontend"
                    >
                        <li><i class="fas fa-window-maximize"></i>Frontend</li>
                    </NavLink>

                    <NavLink 
                        className="habilidad" 
                        to="/backend"
                    >
                        <li><i class="fas fa-code"></i>Backend</li>
                    </NavLink>

                    <NavLink 
                        className="habilidad" 
                        to="/database"
                    >
                        <li><i class="fas fa-database"></i>Databases</li>
                    </NavLink>

                    <NavLink 
                        className="habilidad" 
                        to="/diseño"
                    >
                        <li><i class="fas fa-palette"></i>Diseño</li>
                    </NavLink>

                    <NavLink 
                        className="habilidad" 
                        to="/herramientas"
                    >
                        <li><i class="fas fa-wrench"></i>Herramientas</li>
                    </NavLink>
            </div>
        </nav>
    )
}