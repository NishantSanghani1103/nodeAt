import React from 'react'

export default function Table() {
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
                    <tr>
                        <td>1</td>
                        <td>Nishant</td>
                        <td>nishant@gmail.com</td>
                        <td>9876543210</td>
                        <td>
                            <button className="btn btn-warning btn-sm me-2">
                                Update
                            </button>
                            <button className="btn btn-danger btn-sm">
                                Delete
                            </button>
                        </td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Rahul</td>
                        <td>rahul@gmail.com</td>
                        <td>9999999999</td>
                        <td>
                            <button className="btn btn-warning btn-sm me-2">
                                Update
                            </button>
                            <button className="btn btn-danger btn-sm">
                                Delete
                            </button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
