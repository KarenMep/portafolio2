import React from 'react'

import './inicio.css'

export const Inicio = () => {
  return (
    <>
      <div className="inicio">
        <div className="inicio_container">

          <div className="inicio_desc">
            <h1>Hola, mi nombre es Karen</h1>
            <h2>Desarrolladora Web</h2>
            <p>Desde pequeña siempre me ha gustado el mundo de la tecnología y me he dedicado a estudiar diferentes recnolgía para desarrollar diferentes sistemas. </p>
            
            <div className="inicio_redes">
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-github-square"></i>
              <i class="fab fa-codepen"></i>
            </div>
          </div>

          <div className="inicio_img">
            <img src="./public/img/inicio.png" alt="" />
          </div>

        </div>
      </div>
    </>
  )
}
