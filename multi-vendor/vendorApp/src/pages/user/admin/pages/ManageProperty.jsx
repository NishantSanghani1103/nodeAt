import React from 'react'

export default function ManageProperty() {
    return (
        <div className="p-8">

            <h2 className="text-2xl font-semibold mb-6">
                Manage Properties
            </h2>

            <div className="bg-white p-6 rounded-xl shadow">

                <table className="w-full text-left">

                    <thead>
                        <tr className="border-b text-gray-500">
                            <th className="py-3">Title</th>
                            <th>Owner</th>
                            <th>City</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr className="border-b">
                            <td className="py-4">Luxury Villa</td>
                            <td>Nishant</td>
                            <td>Rajkot</td>
                            <td>₹85 Lakh</td>
                            <td className="text-green-600">Approved</td>
                            <td>
                                <button className="text-red-500">Remove</button>
                            </td>
                        </tr>

                        <tr className="border-b">
                            <td className="py-4">Apartment</td>
                            <td>Rahul</td>
                            <td>Ahmedabad</td>
                            <td>₹55 Lakh</td>
                            <td className="text-yellow-500">Pending</td>
                            <td>
                                <button className="text-red-500">Remove</button>
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>
        </div>
    )
}
