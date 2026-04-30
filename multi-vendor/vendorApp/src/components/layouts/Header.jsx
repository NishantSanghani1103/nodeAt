import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useDispatch } from 'react-redux'
import { logOut } from '../../store/slice/userSlice'

export default function Header() {
  const { token } = useAuth()
  const dispatch = useDispatch()

  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          EstatePro
        </h1>

        {/* Nav */}
        <nav className="hidden md:flex gap-10 text-gray-600 font-medium">
          <NavLink to={'/'} className="hover:text-blue-600">Home</NavLink>
          <NavLink to={'/properties'} className="hover:text-blue-600">Browse Property</NavLink>
          <a href="#" className="hover:text-blue-600">Rent</a>
          <a href="#" className="hover:text-blue-600">Commercial</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">

          {
            token
              ?
              <Link className='text-gray-600 hover:text-blue-600 font-medium'
                onClick={() => {
                  dispatch(logOut())
                }}
              >Logout</Link>
              :
              <NavLink to={'/login'} className="text-gray-600 hover:text-blue-600 font-medium">
                Login
              </NavLink>
          }



          <NavLink to={'/register'} className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
            Register
          </NavLink>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Post Property
          </button>

        </div>

      </div>
    </header>
  )
}
