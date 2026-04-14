import React, { useState } from 'react'

export default function Form() {
    const [formData, setformData] = useState({
        userName: "",
        userEmail: "",
        userPassword: "",
        userConfirmPassword: "",
        userMobile: ""
    })
    const handleChange = (event) => {
        const { value, name } = event.target
        setformData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = (event) => {
        console.log(formData);
        
        event.preventDefault()
    }
    return (
        <div className="card p-4 shadow">
            <h4 className="text-center mb-3">User Form</h4>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Username</label>
                    <input onChange={handleChange} name='userName' type="text" className="form-control" placeholder="Enter username" />
                </div>

                <div className="mb-3">
                    <label>Email</label>
                    <input onChange={handleChange}  name='userEmail' type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="mb-3">
                    <label>New Password</label>
                    <input onChange={handleChange}  name='userPassword' type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="mb-3">
                    <label>Confirm Password</label>
                    <input onChange={handleChange}  name='userConfirmPassword' type="password" className="form-control" placeholder="Confirm password" />
                </div>

                <div className="mb-3">
                    <label>Mobile</label>
                    <input onChange={handleChange}  name='userMobile' type="text" className="form-control" placeholder="Enter mobile number" />
                </div>

                <button type='submit' className="btn btn-primary w-100">Submit</button>
            </form>
        </div>
    )
}
