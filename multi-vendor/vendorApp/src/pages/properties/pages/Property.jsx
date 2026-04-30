import React from 'react'

export default function Property() {
    return (
        <div className="bg-gray-100 min-h-screen">

            {/* 🔹 TOP SEARCH BAR */}
            <div className="bg-white shadow px-8 py-4 flex justify-center">
                <div className="flex w-full max-w-4xl gap-3">

                    <input
                        type="text"
                        placeholder="Search city, locality..."
                        className="flex-1 border px-4 py-3 rounded-lg outline-none"
                    />

                    <button className="bg-blue-600 text-white px-6 rounded-lg">
                        Search
                    </button>

                </div>
            </div>

            {/* 🔹 MAIN SECTION */}
            <div className="max-w-7xl mx-auto px-8 py-8 flex gap-6">

                {/* 🔸 FILTER SIDEBAR */}
                <aside className="w-72 bg-white p-6 rounded-xl shadow h-fit">

                    <h3 className="text-lg font-semibold mb-4">Filters</h3>

                    <div className="space-y-4">

                        <input
                            placeholder="Min Price"
                            className="w-full border p-2 rounded-lg"
                        />

                        <input
                            placeholder="Max Price"
                            className="w-full border p-2 rounded-lg"
                        />

                        <select className="w-full border p-2 rounded-lg">
                            <option>Property Type</option>
                            <option>Apartment</option>
                            <option>Villa</option>
                        </select>

                        <select className="w-full border p-2 rounded-lg">
                            <option>BHK</option>
                            <option>1 BHK</option>
                            <option>2 BHK</option>
                        </select>

                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                            Apply Filters
                        </button>

                    </div>

                </aside>

                {/* 🔸 PROPERTY LIST */}
                <div className="flex-1">

                    {/* Top Info */}
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold">
                            120 Properties Found
                        </h2>

                        <select className="border p-2 rounded-lg">
                            <option>Sort by</option>
                            <option>Price Low to High</option>
                            <option>Price High to Low</option>
                        </select>
                    </div>

                    {/* Property Cards */}

                    <div className="space-y-6">

                        {/* CARD 1 */}
                        <div className="bg-white rounded-xl shadow flex overflow-hidden">

                            <img
                                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                                className="w-64 h-44 object-cover"
                            />

                            <div className="p-5 flex-1">
                                <h3 className="text-lg font-semibold">
                                    Luxury Villa
                                </h3>

                                <p className="text-gray-500 text-sm mt-1">
                                    Rajkot, Gujarat
                                </p>

                                <p className="text-blue-600 font-bold mt-3 text-lg">
                                    ₹85 Lakh
                                </p>

                                <div className="mt-4 flex gap-4">
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                                        View Details
                                    </button>
                                    <button className="border px-4 py-2 rounded-lg">
                                        Contact
                                    </button>
                                </div>
                            </div>

                        </div>

                        {/* CARD 2 */}
                        <div className="bg-white rounded-xl shadow flex overflow-hidden">

                            <img
                                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
                                className="w-64 h-44 object-cover"
                            />

                            <div className="p-5 flex-1">
                                <h3 className="text-lg font-semibold">
                                    Modern Apartment
                                </h3>

                                <p className="text-gray-500 text-sm mt-1">
                                    Ahmedabad
                                </p>

                                <p className="text-blue-600 font-bold mt-3 text-lg">
                                    ₹55 Lakh
                                </p>

                                <div className="mt-4 flex gap-4">
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                                        View Details
                                    </button>
                                    <button className="border px-4 py-2 rounded-lg">
                                        Contact
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
