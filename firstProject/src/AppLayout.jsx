import React, { Suspense } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import { BootstrapNavbar } from './BootstrapNavbar'
import {LoadingPage} from './LoadingPage'

export const AppLayout = () => {
  return (
    <>
    
    {/* <Navbar></Navbar> */}
    <BootstrapNavbar></BootstrapNavbar>

    <Suspense fallback={<LoadingPage></LoadingPage>}>
    <Outlet></Outlet>

    </Suspense>

    <footer>This is footer</footer>
    
    </>
  )
}
