import { Heart, Search, ShoppingCart, User } from 'lucide-react'
import React, { useEffect } from 'react'
import { useAuth } from '../utils/user.utils'

export default function Header() {
    // const user = useAuth()
    // useEffect(() => {
    //     console.log(user);
    // }, [user])

    return (
        <header className="w-full shadow-md bg-white">

            {/* Top Bar */}
            <div className="bg-gray-900 text-white text-sm py-2 px-6 flex justify-between">
                <p>Free Shipping on Orders Above ₹999</p>
                <p>Call Us: +91 98765 43210</p>
            </div>

            {/* Main Header */}
            <div className="flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">
                    ShopMate
                </div>

                {/* Search Bar */}
                <div className="w-1/2 relative">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Search className="absolute right-3 top-2.5 text-gray-500" size={18} />
                </div>

                {/* Icons */}
                <div className="flex     items-center gap-6 text-gray-700">
                    <Heart className="cursor-pointer hover:text-red-500" />
                    <User className="cursor-pointer hover:text-blue-500" />
                    <ShoppingCart className="cursor-pointer hover:text-green-500" />
                </div>
            </div>

            {/* Navigation */}
            <nav className="border-t border-gray-200 px-6 py-3 flex gap-8 text-gray-700 font-medium">
                <a href="#" className="hover:text-blue-600">Home</a>
                <a href="#" className="hover:text-blue-600">Shop</a>
                <a href="#" className="hover:text-blue-600">Categories</a>
                <a href="#" className="hover:text-blue-600">Deals</a>
                <a href="#" className="hover:text-blue-600">Contact</a>
            </nav>

        </header>
    )
}
