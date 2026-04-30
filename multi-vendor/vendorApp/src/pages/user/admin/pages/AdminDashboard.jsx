import React from 'react'

export default function AdminDashboard() {
    return (
        <>
            <div className="p-8">

                {/* Stats */}
                <div className="grid grid-cols-4 gap-6 mb-10">

                    <div className="bg-white p-6 rounded-xl shadow">
                        <p className="text-gray-500">Total Users</p>
                        <h2 className="text-2xl font-bold mt-2">120</h2>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <p className="text-gray-500">Total Properties</p>
                        <h2 className="text-2xl font-bold mt-2">340</h2>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <p className="text-gray-500">Pending Approvals</p>
                        <h2 className="text-2xl font-bold mt-2">15</h2>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <p className="text-gray-500">Total Inquiries</p>
                        <h2 className="text-2xl font-bold mt-2">560</h2>
                    </div>

                </div>

                {/* Properties Table */}
                {/* <div className="bg-white rounded-xl shadow p-6 mb-10">

                    <h3 className="text-lg font-semibold mb-6">
                        Manage Properties
                    </h3>

                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-gray-500 border-b">
                                <th className="py-3">Title</th>
                                <th>Owner</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr className="border-b">
                                <td className="py-4">Luxury Villa</td>
                                <td>Nishant</td>
                                <td>₹85 Lakh</td>
                                <td className="text-yellow-500">Pending</td>
                                <td className="space-x-2">
                                    <button className="text-green-600">Approve</button>
                                    <button className="text-red-500">Reject</button>
                                </td>
                            </tr>

                            <tr className="border-b">
                                <td className="py-4">Apartment</td>
                                <td>Rahul</td>
                                <td>₹55 Lakh</td>
                                <td className="text-green-600">Approved</td>
                                <td className="space-x-2">
                                    <button className="text-red-500">Remove</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div> */}

                {/* Users Table */}
                {/* <div className="bg-white rounded-xl shadow p-6">

                    <h3 className="text-lg font-semibold mb-6">
                        Manage Users
                    </h3>

                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-gray-500 border-b">
                                <th className="py-3">Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr className="border-b">
                                <td className="py-4">Nishant</td>
                                <td>nishant@gmail.com</td>
                                <td>Seller</td>
                                <td>
                                    <button className="text-red-500">Delete</button>
                                </td>
                            </tr>

                            <tr className="border-b">
                                <td className="py-4">Admin</td>
                                <td>admin@gmail.com</td>
                                <td>Admin</td>
                                <td>
                                    <button className="text-gray-400 cursor-not-allowed">
                                        Protected
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div> */}

            </div>
        </>
              
          
    )
}
