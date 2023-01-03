import { Navigate, Route, Routes } from 'react-router-dom'

import { 
  BackendPage,DatabasePage, 
  DiseñoPage, FrontendPage, 
  HerramientasPage } from '../components/Habilidades'


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
