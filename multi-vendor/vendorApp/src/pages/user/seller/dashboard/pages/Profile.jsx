import React from 'react'

export default function Profile() {
    return (
        <div className="p-8 max-w-xl">

            <h2 className="text-2xl font-semibold mb-6">
                My Profile
            </h2>

            <div className="bg-white p-6 rounded-xl shadow space-y-4">

                <input defaultValue="Nishant" className="w-full border p-3 rounded-lg" />
                <input defaultValue="nishant@gmail.com" className="w-full border p-3 rounded-lg" />
                <input placeholder="New Password" className="w-full border p-3 rounded-lg" />

                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                    Update Profile
                </button>

            </div>
        </div>
    )
}
