import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GooglePage, MicrosoftPage, UdemyPage } from '../pages'

export const EducacionRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='udemy' element={<UdemyPage/>}/>
            <Route path='google' element={<GooglePage/>}/>
            <Route path='microsoft' element={<MicrosoftPage/>}/>
        </Routes>
    </>
  )
}
