import React from 'react'

export default function BillingDetails() {
    return (
        <div className="md:col-span-2 space-y-6">

            {/* Billing Details */}
            <div className="border rounded-2xl p-5 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

                <div className="grid grid-cols-2 gap-4">
                    <input className="border p-2 rounded" placeholder="First Name" />
                    <input className="border p-2 rounded" placeholder="Last Name" />
                    <input className="border p-2 rounded col-span-2" placeholder="Email Address" />
                    <input className="border p-2 rounded col-span-2" placeholder="Phone Number" />
                </div>
            </div>

            {/* Shipping Address */}
            <div className="border rounded-2xl p-5 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>

                <div className="grid grid-cols-2 gap-4">
                    <input className="border p-2 rounded col-span-2" placeholder="Street Address" />
                    <input className="border p-2 rounded" placeholder="City" />
                    <input className="border p-2 rounded" placeholder="State" />
                    <input className="border p-2 rounded" placeholder="ZIP Code" />
                    <input className="border p-2 rounded" placeholder="Country" />
                </div>
            </div>

            {/* Payment Method */}
            <div className="border rounded-2xl p-5 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

                <div className="space-y-3">
                    <label className="flex items-center gap-2">
                        <input type="radio" name="payment" />
                        Credit / Debit Card
                    </label>

                    <label className="flex items-center gap-2">
                        <input type="radio" name="payment" />
                        UPI
                    </label>

                    <label className="flex items-center gap-2">
                        <input type="radio" name="payment" />
                        Cash on Delivery
                    </label>
                </div>
            </div>
        </div>

    )
}
