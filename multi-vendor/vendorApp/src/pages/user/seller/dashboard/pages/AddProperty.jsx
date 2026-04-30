import React from 'react'

export default function AddProperty() {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">

            <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow">

                <h2 className="text-2xl font-semibold mb-8">
                    Add New Property
                </h2>

                {/* 🔹 BASIC INFO */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Basic Information</h3>

                    <div className="grid grid-cols-2 gap-4">
                        <input placeholder="Property Title" className="border p-3 rounded-lg" />
                        <input placeholder="Price" className="border p-3 rounded-lg" />
                    </div>

                    <textarea
                        placeholder="Description"
                        className="w-full border p-3 rounded-lg mt-4"
                    />
                </div>

                {/* 🔹 LOCATION */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Location Details</h3>

                    <div className="grid grid-cols-3 gap-4">
                        <input placeholder="City" className="border p-3 rounded-lg" />
                        <input placeholder="Area" className="border p-3 rounded-lg" />
                        <input placeholder="Pincode" className="border p-3 rounded-lg" />
                    </div>
                </div>

                {/* 🔹 PROPERTY DETAILS */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Property Details</h3>

                    <div className="grid grid-cols-3 gap-4">

                        <select className="border p-3 rounded-lg">
                            <option>Property Type</option>
                            <option>flat</option>
                            <option>apartment</option>
                            <option>villa</option>
                            <option>house</option>
                            <option>studio</option>
                            <option>penthouse</option>
                            <option>office</option>
                            <option>townhouse</option>
                            <option>plot</option>
                            <option>commercial</option>
                        </select>

                        <input placeholder="BHK (e.g. 2 BHK)" className="border p-3 rounded-lg" />
                        <input placeholder="Bathrooms" className="border p-3 rounded-lg" />

                        <input placeholder="Area Size (sq.ft)" className="border p-3 rounded-lg" />

                        <select className="border p-3 rounded-lg">
                            <option>Furnishing</option>
                            <option>furnished</option>
                            <option>semi-furnished</option>
                            <option>unfurnished</option>
                        </select>

                    </div>
                </div>

                {/* 🔹 AMENITIES */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Amenities</h3>

                    <div className="grid grid-cols-3 gap-4 text-sm">

                        <label className="flex items-center gap-2">
                            <input type="checkbox" /> Parking
                        </label>

                        <label className="flex items-center gap-2">
                            <input type="checkbox" /> Lift
                        </label>

                        <label className="flex items-center gap-2">
                            <input type="checkbox" /> Gym
                        </label>

                        <label className="flex items-center gap-2">
                            <input type="checkbox" /> Garden
                        </label>

                        <label className="flex items-center gap-2">
                            <input type="checkbox" /> Security
                        </label>

                        <label className="flex items-center gap-2">
                            <input type="checkbox" /> Swimming Pool
                        </label>

                    </div>
                </div>

                {/* 🔹 IMAGES */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Upload Images</h3>

                    <input
                        type="file"
                        multiple
                        className="w-full border p-3 rounded-lg"
                    />
                </div>

                {/* 🔹 SUBMIT */}
                <div className="text-right">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
                        Submit Property
                    </button>
                </div>

            </div>

        </div>
    )
}
