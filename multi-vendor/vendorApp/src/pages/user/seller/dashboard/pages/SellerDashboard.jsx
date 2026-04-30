import React from 'react'


export default function SellerDashboard() {
    return (
        <div className="grid grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl shadow">
                <p className="text-gray-500">Total Properties</p>
                <h2 className="text-2xl font-bold mt-2">12</h2>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
                <p className="text-gray-500">Active Listings</p>
                <h2 className="text-2xl font-bold mt-2">8</h2>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
                <p className="text-gray-500">Inquiries</p>
                <h2 className="text-2xl font-bold mt-2">25</h2>
            </div>
        </div>


    )
}
