import { MenuEducacion } from '../../ui/components/MenuEducacion'
import './educacion.css'
import { EducacionRoutes } from './routes/EducacionRoutes'

export const Educacion = () => {
  return (
    
    <>
        <div className="educacion">
            <div className="edu_container">

              <div className="edu_titulo">
                <h1>EDUCACIÓN</h1>
              </div>

              <div className="edu_escuelas">
                <div className="edu_upiicsa">
                    <h1>Lic. en ciencias de la Informática</h1>
                    <p>Estudié Ciencias de la informática en UPIICSA-IPN. 
                      Estuve en la comunidad MSTC-UPIICSA donde nos encargabamos de dar talleres y conferenias gratis acerca de la tecnologia</p>
                </div>

                <div className="edu_cetis">
                    <h1>Tecnico en programación</h1>
                    <p>Estudíe programación en el Cetis 31 (2012-2015) y aprendí varias tecnologías entre ellas Visual basic, access y excel.
                      Obtuve varias certificaciones </p>
                </div>
              </div>

              <div className="">
                <MenuEducacion/>
                {/* <div className="cer_menu">
                  <p>Udemy</p>
                  <p>Google</p>
                  <p>Microsoft</p>
                </div> */}

              </div>



              <div className="cer_links">
                <EducacionRoutes/>
                    {/* <ul>
                      <li><i class="fas fa-check-circle"></i>React con Hooks</li>
                      <li><i class="fas fa-check-circle"></i>React con Hooks</li>
                      <li><i class="fas fa-check-circle"></i>React con Hooks</li>
                      <li><i class="fas fa-check-circle"></i>React con Hooks</li>
                    </ul> */}
              </div>

            </div>
        </div>
    </>
  )
}
