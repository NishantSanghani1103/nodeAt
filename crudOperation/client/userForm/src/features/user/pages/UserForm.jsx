import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import Table from '../components/Table'
import { toast, ToastContainer } from 'react-toastify'
import { userDeleteApi, userSingleViewApi, userViewApi } from '../services/user.service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export default function UserForm() {
    const queryClient = useQueryClient()
    const [ids, setids] = useState(null)
    const [formData, setformData] = useState({
        userName: "",
        userEmail: "",
        userPassword: "",
        userConfirmPassword: "",
        userMobile: ""
    })
    const userView = async () => {
        const res = await userViewApi()
        return res.data
    }
    const userDelete = async (id) => {
        const res = await userDeleteApi(id)
        return res.data
    }

    const userSingleView = async (id) => {
        const res = await userSingleViewApi(id)
        return res.data
    }
    const { data, isError, error, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: userView
    })

    const deleteMutation = useMutation({
        mutationFn: userDelete,
        onSuccess: (data) => {
            toast.success(data?.message)
            queryClient.invalidateQueries(["users"])
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || "Network Error...!!")
        }
    })

    const singleViewData = useMutation({
        mutationFn: userSingleView,
        onSuccess: (data) => {
            const singleDataValue = data?.data
            // console.log(singleDataValue);
            setformData({
                userName: singleDataValue?.user_name || "",
                userEmail: singleDataValue?.user_email || "",
                userPassword: "",
                userConfirmPassword: "",
                userMobile: singleDataValue?.user_mobile || ""
            })
            // console.log(formData);
            queryClient.invalidateQueries(["users"])

        }
    })
    // console.log(data?.data);

    return (
        <div className="container mt-5">
            <ToastContainer />
            <div className="row">

                {/* LEFT SIDE - FORM */}
                <div className="col-md-5">
                    <Form formData={formData} setformData={setformData} ids={ids} />
                </div>

                {/* RIGHT SIDE - TABLE */}
                <div className="col-md-7">
                    {
                        isLoading
                            ?
                            <p>Loading....</p>
                            :
                            isError
                                ?
                                <p>{error.message}</p>
                                :
                                <Table value={data}
                                    singleViewMutation={singleViewData.mutate}
                                    deleteMutation={deleteMutation.mutate} 
                                    setids={setids}
                                    />

                    }

                </div>
            </div>
        </div>
    )
}
