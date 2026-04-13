import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import { ToastContainer } from 'react-toastify'
import ChangePassword from '../components/ChangePassword'

export default function Auth() {
    return (
        <div>
            <ToastContainer />
            {/* Main Section */}
            <div className="container my-5">
                <div className="row shadow-lg rounded overflow-hidden">
                    <Register />
                    <Login />
                </div>
            </div>
            <ChangePassword />
        </div>
    )
}
