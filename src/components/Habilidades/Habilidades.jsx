import React from 'react'
import './habilidades.css'

export const Habilidades = () => {
  return (
    <>
        <div className="habilidades">

          <div className="hab_titulo">
            <h1>HABILIDADES</h1>
          </div>

            <div className="hab_container">
            
              <div className="hab_hab">
                <ul>
                  <li><i class="fas fa-window-maximize"></i>Frontend</li>
                  <li><i class="fas fa-code"></i>Backend</li>
                  <li><i class="fas fa-database"></i>Databases</li>
                  <li><i class="fas fa-palette"></i>Diseño</li>
                  <li><i class="fas fa-wrench"></i>Herramientas</li>
                </ul>
              </div>

              <div className="hab_iconos">
                <i class="fab fa-html5"></i>
                <i class="fab fa-css3-alt"></i>
                <i class="fab fa-js-square"></i>
                <i class="fab fa-react"></i>
                <i class="fab fa-bootstrap"></i>
              </div>
              
            </div>
            
        </div>
    </>
  )
}
