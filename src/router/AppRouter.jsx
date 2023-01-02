import { Navigate, Route, Routes } from 'react-router-dom'

import { BackendPage } from '../components/Habilidades/pages/BackendPage'
import { DatabasePage } from '../components/Habilidades/pages/DatabasePage'
import { DiseñoPage } from '../components/Habilidades/pages/DiseñoPage'
import { FrontendPage } from '../components/Habilidades/pages/FrontendPage'
import { HerramientasPage } from '../components/Habilidades/pages/HerramientasPage'

// import { MenuHabilidades } from '../ui/components'

export const AppRouter = () => {
  return (
    <>
      {/* <MenuHabilidades/> */}
        <Routes>
            <Route path='frontend' element={<FrontendPage/>}/>
            <Route path='backend' element={<BackendPage/>}/>
            <Route path='database' element={<DatabasePage/>}/>
            <Route path='diseño' element={<DiseñoPage/>}/>
            <Route path='herramientas' element={<HerramientasPage/>}/>
            
            <Route path='/' element={<Navigate to='/frontend'/>}/>

        </Routes>
    </>
  )
}
