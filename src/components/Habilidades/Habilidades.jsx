import React from 'react'
import { AppRouter } from '../../router/AppRouter'
import { MenuHabilidades } from '../../ui/components'
import './habilidades.css'

export const Habilidades = () => {
  return (
    <>
        <div className="habilidades">

          <div className="hab_titulo">
            <h1>HABILIDADES</h1>
          </div>

            <div className="hab_container">
              <div className="">
                <MenuHabilidades/>
              </div>

              <div className="hab_iconos">
                <AppRouter/>
              </div>
              
            </div>
            
        </div>
    </>
  )
}
