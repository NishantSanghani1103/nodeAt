import React, { useState } from 'react'
import { register } from '../services/authApi'
import { ToastContainer, toast } from 'react-toastify';
export default function Register() {
    const [formValue, setformValue] = useState({
        userName: "",
        userEmail: "",
        userPassword: ""
    })
    const handleChange = (event) => {
        const { name, value } = event.target
        setformValue({
            ...formValue,
            [name]: value
        })
    }

    const registerAdd = async () => {
        try {
            const data = await register(formValue)
            console.log(data);
            if (data.status) {
                toast.success(data?.data?.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(
                error?.response?.data?.message
                || error.message
            )
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        registerAdd()
    }
    return (
        <div className="col-md-6 p-5 bg-light">
            <h3 className="mb-4 text-center">Register</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input name='userName' type="text" className="form-control" placeholder="Enter name"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input name='userEmail' type="email" className="form-control" placeholder="Enter email"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input name='userPassword' type="password" className="form-control" placeholder="Enter password"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>
   
        </div>
    )
}
