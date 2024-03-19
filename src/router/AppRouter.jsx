import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
import {HeroRouter} from '../heroes'
export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path='/login' element={<LoginPage />} />
        {/* <Route path='/' element={<HeroRouter />} /> */}
        {/* <Route path='/*' element={<div>Error pAge</div>} /> */}
        <Route path='/*' element={<HeroRouter />} />
        
    </Routes>
    </>
  )
}
