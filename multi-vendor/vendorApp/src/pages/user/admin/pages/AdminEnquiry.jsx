import React from 'react'

export default function AdminEnquiry() {
    return (
        <div className="p-8">

            <h2 className="text-2xl font-semibold mb-6">
                All Inquiries
            </h2>

            <div className="bg-white p-6 rounded-xl shadow">

                <table className="w-full text-left">

                    <thead>
                        <tr className="border-b text-gray-500">
                            <th className="py-3">User</th>
                            <th>Email</th>
                            <th>Property</th>
                            <th>Message</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr className="border-b">
                            <td className="py-4">Rahul</td>
                            <td>rahul@gmail.com</td>
                            <td>Luxury Villa</td>
                            <td>Interested</td>
                        </tr>

                    </tbody>

                </table>

            </div>
        </div>
    )
}
