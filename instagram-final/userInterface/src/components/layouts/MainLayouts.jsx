import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import MobileBottomNavBar from './MobileBottomNavBar'

export default function MainLayouts() {
    return (
        <>
            <Header />
            <Outlet />
            <MobileBottomNavBar/>
        </>
    )
}
