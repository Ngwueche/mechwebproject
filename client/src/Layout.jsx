import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='static'>
      <Header />
      <Outlet />
    </div>
  )
}
