import React from 'react'
import HeaderApp from './header/HeaderApp'
import FooterApp from './footer/FooterApp'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <div>
      <HeaderApp />
      <Outlet />
      <FooterApp />
    </div>
  )
}

export default Layout;