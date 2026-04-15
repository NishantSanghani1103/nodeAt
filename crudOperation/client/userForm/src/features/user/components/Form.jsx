import React, { useState } from 'react'
import { addUser, userUpdateApi } from '../services/user.service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
export default function Form({ setformData, formData, ids }) {
    const queryClient = useQueryClient()
    const handleChange = (event) => {
        const { value, name } = event.target
        setformData({
            ...formData,
            [name]: value
        })
    }
    const userAddApi = async () => {
        const res = await addUser(formData)
        return res.data
    }

    const userEditApi = async () => {
        const res = await userUpdateApi(ids, formData)
        return res.data
    }
    const mutation = useMutation({
        mutationFn: userAddApi,
        onSuccess: (data) => {
            toast.success(data?.message)
            setformData({
                userName: "",
                userEmail: "",
                userPassword: "",
                userConfirmPassword: "",
                userMobile: ""
            })
            queryClient.invalidateQueries(["users"])
        },
        onError: (error) => {
            // console.error("Error:", error?.response?.data?.message)
            toast.error(error?.response?.data?.message ?? "Networ Error....!!")
        }
    })


    const updateMutation = useMutation({
        mutationFn: userEditApi,
        onSuccess: (data) => {
            toast.success(data?.message)
            setformData({
                userName: "",
                userEmail: "",
                userPassword: "",
                userConfirmPassword: "",
                userMobile: ""
            })
            queryClient.invalidateQueries(["users"])
        },
        onError: (error) => {
            console.log(error);

            // console.error("Error:", error?.response?.data?.message)
            toast.error(error?.response?.data?.message ?? "Networ Error....!!")
        }
    })


    const handleSubmit = (event) => {
        event.preventDefault()
        if (ids) {
            updateMutation.mutate(formData)
        }
        else {
            mutation.mutate(formData)
        }
    }
    return (
        <div className="card p-4 shadow">
            <h4 className="text-center mb-3">User Form</h4>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Username</label>
                    <input
                        name="userName"
                        value={formData.userName || ""}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Enter username"
                    />
                </div>

                <div className="mb-3">
                    <label>Email</label>
                    <input
                        name="userEmail"
                        value={formData.userEmail || ""}
                        onChange={handleChange}
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>

                <div className="mb-3">
                    <label>New Password</label>
                    <input
                        name="userPassword"
                        value={formData.userPassword || ""}
                        onChange={handleChange}
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>

                <div className="mb-3">
                    <label>Confirm Password</label>
                    <input
                        name="userConfirmPassword"
                        value={formData.userConfirmPassword || ""}
                        onChange={handleChange}
                        type="password"
                        className="form-control"
                        placeholder="Confirm password"
                    />
                </div>

                <div className="mb-3">
                    <label>Mobile</label>
                    <input
                        name="userMobile"
                        value={formData.userMobile || ""}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Enter mobile number"
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    {ids ? "UPDATE" : "Submit"}
                </button>
            </form>
        </div>
    )
}
