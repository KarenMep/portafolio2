import { Route, Routes } from 'react-router-dom'
import { FrontendPage, BackendPage, DatabasePage, DiseñoPage, HerramientasPage } from '../pages'


export const HabilidadesRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='frontend' element={<FrontendPage/>}/>
            <Route path='backend' element={<BackendPage/>}/>
            <Route path='database' element={<DatabasePage/>}/>
            <Route path='diseño' element={<DiseñoPage/>}/>
            <Route path='herramientas' element={<HerramientasPage/>}/>
            
            {/* <Route path='/' element={<Navigate to='/frontend'/>}/> */}

            {/* <Route path='/*' element={<EducacionRoutes/>}/> */}

            
        </Routes>
    </>
  )
}
