import React from 'react'

import './inicio.css'

export const Inicio = () => {
  return (
    <>
      <div className="inicio" >
        <div className="inicio_container">

          <div className="inicio_desc inicio_img animate__animated animate__backInLeft">
            <h1>Hola, mi nombre es Karen</h1>
            <h2>Desarrolladora Web</h2>
            <p>Desde pequeña siempre me ha gustado el mundo de la tecnología y me he dedicado a estudiar diferentes tecnolgías para desarrollar diferentes sistemas. </p>
            
            <div className="inicio_redes">
              <a href="https://www.linkedin.com/in/karen-mejia-paulino-a58602172/">
                <i className="fab fa-linkedin"></i>
              </a>
              
              <a href="https://codepen.io/karenmep">
                <i className="fab fa-codepen"></i>
              </a>

              <a target='_blank' href="https://github.com/KarenMep">
                <i className="fab fa-github-square"></i>
              </a>

            </div>
          </div>

          <div className="inicio_img animate__animated animate__backInRight">
            <img src="./public/img/inicio.png" alt="" />
          </div>

        </div>
      </div>
    </>
  )
}
