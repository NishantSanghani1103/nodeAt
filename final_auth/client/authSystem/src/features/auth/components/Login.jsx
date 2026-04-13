import React, { useState } from 'react'
import { login } from '../services/authApi'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../userSlice';
export default function Login() {
    const [formValue, setformValue] = useState({
        userEmail: "",
        userPassword: ""
    })
    const dispatch = useDispatch()
    const user = useSelector((store) => store.user)
    const handleChange = (event) => {
        const { name, value } = event.target
        setformValue({
            ...formValue,
            [name]: value
        })
    }

    const loginUser = async () => {
        try {
            const res = await login(formValue)
            if (res.status) {
                toast.success(res?.data?.message)
                dispatch(logIn({ token: res?.data?.token, user: res?.data?.user }))
            }
        } catch (error) {
            console.log(error);

            toast.error(
                error?.response?.data?.message
                || error.message
            )
        }
    }

    const handleLogin = (event) => {
        console.log(formValue);
        loginUser()

        event.preventDefault()
    }
    return (
        <div className="col-md-6 p-5 bg-white">
            <ToastContainer />
            <h3 className="mb-4 text-center">Login</h3>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input name='userEmail' type="email" onChange={handleChange} className="form-control" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name='userPassword' onChange={handleChange} className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-success w-100">Login</button>
            </form>
        </div>
    )
}
