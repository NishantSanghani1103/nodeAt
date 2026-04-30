import React from 'react'

export default function Enquiry() {
    return (
        <div className="p-8">

            <h2 className="text-2xl font-semibold mb-6">
                Buyer Inquiries
            </h2>

            <div className="bg-white p-6 rounded-xl shadow">

                <table className="w-full text-left">

                    <thead>
                        <tr className="border-b text-gray-500">
                            <th className="py-3">Name</th>
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
                            <td>Interested in this property</td>
                        </tr>

                        <tr className="border-b">
                            <td className="py-4">Amit</td>
                            <td>amit@gmail.com</td>
                            <td>Apartment</td>
                            <td>Need more details</td>
                        </tr>

                    </tbody>

                </table>

            </div>
        </div>
    )
}
