/* eslint-disable react-hooks/set-state-in-effect */

import React, { useEffect, useState } from 'react'
import { categoryViewApi, productViewApi } from '../services/homeApi'
import { useAuth } from '../utils/user.utils'
export default function Home() {
    const [productData, setproductData] = useState([])
    const [staticPath, setstaticPath] = useState("")
    const [categoryData, setcategoryData] = useState([])
    const productView = async () => {
        try {
            const res = await productViewApi()
            setproductData(res?.data?.data)
            setstaticPath(res?.data?.staticPath)
        } catch (error) {
            console.log(error?.response?.data?.message ?? error.message);
        }
    }

    const categoryView = async () => {
        try {
            const res = await categoryViewApi()
            setcategoryData(res?.data?.data)
        } catch (error) {
            console.log(error?.response?.data?.message ?? error.message);
        }
    }

    useEffect(() => {
        productView()
        categoryView()
    }, [])
    return (
        <div className="bg-gray-100">

            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-16 px-6 text-center">
                <h1 className="text-4xl font-bold mb-4">Big Sale is Live 🔥</h1>
                <p className="mb-6">Up to 50% off on all products</p>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold">
                    Shop Now
                </button>
            </section>

            {/* Categories */}
            <section className="px-6 py-10">
                <h2 className="text-2xl font-semibold mb-6">Shop by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {
                        categoryData.map((value, index) => {
                            return (
                                <div className="bg-white p-6 rounded-xl shadow text-center capitalize">{value.name}</div>
                            )
                        })
                    }
                </div>
            </section>

            {/* Products */}
            <section className="px-6 pb-10">
                <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {/* Product Card 1 */}
                    {
                        productData.map((value, index) => <ProductRow
                            key={value.id}
                            value={value}
                            staticPath={staticPath}
                        />)
                    }

                    {/* Product Card 2 */}

                </div>
            </section>

            {/* Promo Banner */}
            <section className="bg-green-600 text-white text-center py-10 mx-6 rounded-xl mb-10">
                <h2 className="text-2xl font-bold">Limited Time Offer 🎉</h2>
                <p>Get extra 10% off on your first order</p>
            </section>

        </div>
    )
}


function ProductRow({ value, staticPath }) {
    const { name, image, subSubCategory, actualPrice } = value
    const {user} = useAuth()
    console.log(user);
    
    const addToCart = () => {
        if (user) {
            console.log("fdjjfdjf");
            
        }
        else {
            alert()
        }
    }
    return (
        <>
            <div className="bg-white rounded-xl shadow p-4">
                <img
                    src={staticPath + image}
                    alt="product"
                    className="rounded-lg mb-4"
                />
                <h3 className="font-semibold">{name}</h3>
                <p className="text-gray-500 text-sm">{subSubCategory.name}</p>
                <div className="flex justify-between items-center mt-3">
                    <span className="text-lg font-bold">₹ {actualPrice}</span>
                    <button onClick={addToCart} className="bg-blue-600 text-white px-3 py-1 rounded">
                        Add
                    </button>
                </div>
            </div>

        </>
    )
}