import React from 'react'

export default function Settings() {
    return (
        <div className="p-8 max-w-xl">

            <h2 className="text-2xl font-semibold mb-6">
                Settings
            </h2>

            <div className="bg-white p-6 rounded-xl shadow space-y-4">

                <input placeholder="Admin Name" className="w-full border p-3 rounded-lg" />
                <input placeholder="Email" className="w-full border p-3 rounded-lg" />
                <input placeholder="Change Password" className="w-full border p-3 rounded-lg" />

                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                    Save Changes
                </button>

            </div>
        </div>
    )
}
