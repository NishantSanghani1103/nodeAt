import React from 'react'

export default function Reports() {
    return (
        <div className="p-8">

            <h2 className="text-2xl font-semibold mb-6">
                Reports & Analytics
            </h2>

            <div className="grid grid-cols-3 gap-6">

                <div className="bg-white p-6 rounded-xl shadow">
                    <p>Total Revenue</p>
                    <h2 className="text-2xl font-bold mt-2">₹12L</h2>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                    <p>New Users</p>
                    <h2 className="text-2xl font-bold mt-2">45</h2>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                    <p>Property Sales</p>
                    <h2 className="text-2xl font-bold mt-2">30</h2>
                </div>

            </div>

        </div>
    )
}
