import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function ProtectedRoutes({ role }) {
  // console.log(role);

  const { user } = useAuth()
  // console.log(user);

  if (user.userName != "") {
    // console.log("fdkndjf");
    if (!role.includes(user.userRole)) {
      return <Navigate to={'/'}/>
    }
  }
  else {
    return <Navigate to={'/login'} />
  }


  return (
    <div>
      <Outlet />
    </div>
  )
}
