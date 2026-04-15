import React from 'react'

export default function Table({ value, deleteMutation, singleViewMutation, setids }) {
    console.log();

    return (
        <div className="card p-4 shadow">
            <h4 className="text-center mb-3">User List</h4>

            <table className="table table-bordered text-center">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        value?.data?.length == 0
                            ?
                            <tr>
                                <td colSpan={5}> User Not Found....</td>
                            </tr>

                            :
                            value?.data?.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{value.user_id}</td>
                                        <td>{value.user_name}</td>
                                        <td>{value.user_email}</td>
                                        <td>{value.user_mobile}</td>
                                        <td>
                                            <button
                                                onClick={() => {
                                                    singleViewMutation(value.user_id)
                                                    setids(value.user_id)
                                                }}
                                                className="btn btn-warning btn-sm me-2">
                                                Update
                                            </button>
                                            <button onClick={() => {
                                                if (confirm("Are You Sure For Delete User ? ")) {

                                                    deleteMutation(value.user_id)
                                                }
                                            }} className="btn btn-danger btn-sm">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
        </div>
    )
}
