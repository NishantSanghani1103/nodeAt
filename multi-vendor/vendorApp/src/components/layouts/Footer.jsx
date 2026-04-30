import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-10">

        <div>
          <h4 className="text-white text-lg font-semibold mb-4">EstatePro</h4>
          <p className="text-sm">
            Your trusted partner for buying, selling and renting properties.
          </p>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Buy</li>
            <li>Rent</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
          <p className="text-sm">Rajkot, Gujarat</p>
          <p className="text-sm">+91 9876543210</p>
          <p className="text-sm">info@estatepro.com</p>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-12">
        © 2026 EstatePro. All rights reserved.
      </div>
    </footer>
  )
}
