import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'

export const AppLayout = () => {
  return (
    <>
    
    <Navbar></Navbar>
    <Outlet></Outlet>

    <footer>This is footer</footer>
    
    </>
  )
}
