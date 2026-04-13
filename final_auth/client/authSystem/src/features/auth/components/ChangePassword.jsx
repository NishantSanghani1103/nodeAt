import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { changePassword } from '../services/authApi';
import { toast, ToastContainer } from 'react-toastify';

export default function ChangePassword() {
    const [formValue, setformValue] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    })

    const { token } = useSelector((store) => store.user)
    console.log(token);

    const handleChange = (event) => {
        const { name, value } = event.target
        setformValue({
            ...formValue,
            [name]: value
        })
    }

    const changePasswordApi = async () => {
        try {
            const res = await changePassword(formValue, token)
            toast.success(res?.data?.message);

        } catch (error) {
            toast.error(
                error?.response?.data?.message
                || error.message
            )

        }
    }

    const handleForm = (event) => {
        console.log(formValue)
        changePasswordApi()
        event.preventDefault()
    }
    return (
        <div className="container mb-5">
            <ToastContainer />
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg p-4">
                        <h3 className="text-center mb-4">Change Password</h3>
                        <form onSubmit={handleForm}>
                            <div className="mb-3">
                                <label className="form-label">Current Password</label>
                                <input
                                    name='oldPassword'
                                    onChange={handleChange}
                                    type="password" className="form-control" placeholder="Enter current password" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">New Password</label>
                                <input
                                    name='newPassword'
                                    onChange={handleChange}
                                    type="password" className="form-control" placeholder="Enter new password" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input
                                    name='confirmPassword'
                                    onChange={handleChange}
                                    type="password" className="form-control" placeholder="Confirm new password" />
                            </div>
                            <button type="submit" className="btn btn-warning w-100">Update Password</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
