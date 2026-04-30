import React from 'react'

export default function ManageUser() {
    return (
        <div className="p-8">

            <h2 className="text-2xl font-semibold mb-6">
                Manage Users
            </h2>

            <div className="bg-white p-6 rounded-xl shadow">

                <table className="w-full text-left">

                    <thead>
                        <tr className="border-b text-gray-500">
                            <th className="py-3">Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr className="border-b">
                            <td className="py-4">Nishant</td>
                            <td>nishant@gmail.com</td>
                            <td>Seller</td>
                            <td className="text-green-600">Active</td>
                            <td>
                                <button className="text-red-500">Delete</button>
                            </td>
                        </tr>

                        <tr className="border-b">
                            <td className="py-4">Rahul</td>
                            <td>rahul@gmail.com</td>
                            <td>Buyer</td>
                            <td className="text-green-600">Active</td>
                            <td>
                                <button className="text-red-500">Delete</button>
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>
        </div>
    )
}
