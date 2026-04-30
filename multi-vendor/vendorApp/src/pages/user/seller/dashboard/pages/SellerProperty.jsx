import React from 'react'

export default function SellerProperty() {
    return (
        <div className="p-8">

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">My Properties</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    + Add Property
                </button>
            </div>

            <div className="bg-white rounded-xl shadow p-6">

                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b text-gray-500">
                            <th className="py-3">Property</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr className="border-b">
                            <td className="py-4">Luxury Villa</td>
                            <td>Rajkot</td>
                            <td>₹85 Lakh</td>
                            <td className="text-green-600">Active</td>
                            <td className="space-x-2">
                                <button className="text-blue-600">Edit</button>
                                <button className="text-red-500">Delete</button>
                            </td>
                        </tr>

                        <tr className="border-b">
                            <td className="py-4">Apartment</td>
                            <td>Ahmedabad</td>
                            <td>₹55 Lakh</td>
                            <td className="text-yellow-500">Pending</td>
                            <td className="space-x-2">
                                <button className="text-blue-600">Edit</button>
                                <button className="text-red-500">Delete</button>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </div>
    )
}
