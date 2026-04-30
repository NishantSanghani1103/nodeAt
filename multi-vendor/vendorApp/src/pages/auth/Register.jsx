import React from 'react'

export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

                <h2 className="text-2xl font-bold text-center mb-6">
                    Create Account
                </h2>

                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border px-4 py-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border px-4 py-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border px-4 py-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                    Register
                </button>

                <p className="text-sm text-center mt-4 text-gray-500">
                    Already have an account? <span className="text-blue-600 cursor-pointer">Login</span>
                </p>

            </div>

        </div>
    )
}
