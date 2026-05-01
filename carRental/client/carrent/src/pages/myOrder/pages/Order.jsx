import React from 'react'
import BookingItems from '../components/BookingItems'

export default function Order() {
    return (
        <section className='max-w-full my-12'>
            <main className='max-w-330 mx-auto'>
                <div id='heading'>
                    <h4 className='text-[#090A0B] font-semibold leading-10 text-[36px]'>My Bookings</h4>
                    <p className='text-[#64748B] text-lg leading-7 py-3'>View and manage your car bookings</p>
                </div>
                <BookingItems />
                <BookingItems />
                <BookingItems />
                <BookingItems />
                <BookingItems />
            </main>
        </section>
    )
}
