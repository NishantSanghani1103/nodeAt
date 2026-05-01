import React from 'react'

export default function BookingItems() {
    return (
        <div className='border my-5 border-[#DDE1EE] rounded-sm p-3'>
            <div className='max-w-full grid grid-cols-2  justify-between'>
                <div className='grid grid-cols-2 gap-4' id='orderDetails'>
                    <figure className='imageSide'>
                        <img src="/src/assets/images/car_image1.png" className='rounded-sm' alt="" />
                        <div className='my-3'>
                            <p className='font-semibold text-[#1E2939]'>BMW M4 COMPETITION</p>
                            <p className='text-[#6A7282] text-sm'>2022 • SUV • Los Angeles</p>
                        </div>
                    </figure>
                    <div className='' id='bookinInformation'>
                        <div className='flex gap-2 items-center'>
                            <div className='bg-[#F3F4F6] w-fit rounded-sm'>
                                <p className='text-[#1F2937] text-[12px] p-2'>Booking #1</p>
                            </div>

                            <div className='bg-[#BBFFD782] w-fit rounded-xl px-4 py-1'>
                                <p className='text-[#06A764] font-medium text-[12px] '>confirmed</p>
                            </div>
                        </div>

                        <div className='flex items-start  gap-2 my-3'>
                            <img src="/src/assets/images/calendar_icon_colored.svg" className='mt-0.5' alt="" />
                            <div className=''>
                                <p className='text-[#1F2937A6] text-sm font-normal '>Rental Period</p>
                                <p className='text-[#1F2937] font-semibold text-sm'>4/10/2025 - 4/15/2025</p>
                            </div>
                        </div>

                        <div className='flex items-start  gap-2 my-3'>
                            <img src="/src/assets/images/location_icon_colored.svg" className='mt-0.5' alt="" />
                            <div className=''>
                                <p className='text-[#1F2937A6] text-sm font-normal '>Pick-up Location</p>
                                <p className='text-[#1F2937] font-semibold text-sm'>Airport Terminal 1</p>
                            </div>
                        </div>

                        <div className='flex items-start  gap-2 my-3'>
                            <img src="/src/assets/images/location_icon_colored.svg" className='mt-0.5' alt="" />
                            <div className=''>
                                <p className='text-[#1F2937A6] text-sm font-normal '>Return Location</p>
                                <p className='text-[#1F2937] font-semibold text-sm'>Downtown Office</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' text-end' id='priceDetails'>
                    <p className='text-[#1F293799] font-normal text-sm'>Total Price</p>
                    <p className='text-[#2563EB] font-semibold'>$475</p>
                    <p className='text-[#1F293799] text-sm font-normal'>Booked on 4/1/2025</p>
                </div>
            </div>
        </div>
    )
}
