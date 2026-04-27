import React from 'react'
import { useCart } from '../../../utils/user.utils'
import OrderSummary from '../components/OrderSummary'
import BillingDetails from '../components/BillingDetails'

export default function Checkout() {
    const { cart } = useCart()
    const total = cart.reduce((acc, cuu) => acc + cuu.productPrice * cuu.quantity, 0)
    console.log(total);

    return (
        <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6 font-sans">

            {/* Left: Billing + Shipping */}
            <BillingDetails />

            {/* Right: Order Summary */}
            <div className="border rounded-2xl p-5 shadow-sm h-fit">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                {/* Items */}
                {
                    cart.map((value, index) => <OrderSummary key={value.id} value={value} />)
                }
                <div className="flex justify-between">
                    <span>Total  </span>
                    <span>₹ {total}</span>
                </div>
                <button className='bg-black text-white w-full my-5 p-1 cursor-pointer'>Place Order</button>
            </div>
        </div>
    )
}
