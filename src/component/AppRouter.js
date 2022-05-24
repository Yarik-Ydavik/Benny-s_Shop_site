import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../router'
import CarINFO from '../page/carINFO'
import Saless from '../page/Sales'


const AppRouter = () => {
  return (
    <>
    <Routes>
        
        {ROUTES.map(({path,Component}) =>
          <Route key={path} path={path} element={<Component/>} />
        )}
        <Route path="/car/:id" element={<CarINFO />} />
        <Route path="/car/:id/sales" element={<Saless/>}/>
    </Routes>
    </>
      
  )
}

export default AppRouter
