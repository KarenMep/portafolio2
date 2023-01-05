import { NavLink } from "react-router-dom"

export const MenuEducacion = () => {
    return (
        <nav>
            <div className="certificaciones">

                    <NavLink 
                        className={ ({isActive}) => `cer_menu ${isActive ? 'active' : ''}`} 
                        to="udemy"
                    >
                        <li><i class="fas fa-window-maximize"></i>Udemy</li>
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `cer_menu ${isActive ? 'active' : ''}`} 
                        to="google"
                    >
                        <li><i class="fas fa-code"></i>Google</li>
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `cer_menu ${isActive ? 'active' : ''}`} 
                        to="microsoft"
                    >
                        <li><i class="fas fa-database"></i>Microsoft</li>
                    </NavLink>
            </div>
        </nav>
    )
}
