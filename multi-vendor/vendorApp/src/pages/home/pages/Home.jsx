import React from 'react'

export default function Home() {
    return (
        <>
            <section className="bg-linear-to-r from-blue-50 to-white py-24">
                <div className="max-w-5xl mx-auto text-center px-6">

                    <h2 className="text-5xl font-bold text-gray-800 leading-tight">
                        Find Your Dream Property
                    </h2>

                    <p className="text-gray-500 mt-4 text-lg">
                        Buy, Sell & Rent properties across India
                    </p>

                    {/* Search */}
                    <div className="mt-10 bg-white shadow-xl rounded-full flex items-center p-2 max-w-2xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search city, locality..."
                            className="flex-1 px-5 py-3 outline-none rounded-full"
                        />
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700">
                            Search
                        </button>
                    </div>

                </div>
            </section>
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-8">

                    <h3 className="text-3xl font-semibold text-gray-800 mb-12">
                        Featured Properties
                    </h3>

                    <div className="grid md:grid-cols-3 gap-10">

                        {/* CARD 1 */}
                        <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                                className="h-52 w-full object-cover"
                            />
                            <div className="p-5">
                                <h4 className="text-lg font-semibold">Luxury Villa</h4>
                                <p className="text-gray-500 text-sm mt-1">Rajkot, Gujarat</p>
                                <p className="text-blue-600 font-bold mt-3 text-lg">₹85 Lakh</p>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
                                className="h-52 w-full object-cover"
                            />
                            <div className="p-5">
                                <h4 className="text-lg font-semibold">Modern Apartment</h4>
                                <p className="text-gray-500 text-sm mt-1">Ahmedabad</p>
                                <p className="text-blue-600 font-bold mt-3 text-lg">₹55 Lakh</p>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
                                className="h-52 w-full object-cover"
                            />
                            <div className="p-5">
                                <h4 className="text-lg font-semibold">Independent House</h4>
                                <p className="text-gray-500 text-sm mt-1">Surat</p>
                                <p className="text-blue-600 font-bold mt-3 text-lg">₹72 Lakh</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className="py-20">
                <div className="max-w-5xl mx-auto bg-blue-600 rounded-2xl text-center text-white py-14 px-6 shadow-lg">

                    <h3 className="text-3xl font-bold">
                        Have a Property to Sell?
                    </h3>

                    <p className="mt-3 text-blue-100">
                        List your property and reach thousands of buyers instantly
                    </p>

                    <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                        Get Started
                    </button>

                </div>
            </section>
        </>
    )
}
