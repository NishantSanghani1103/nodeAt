import React from 'react'

export default function CarDetails() {
    return (
        <section className='max-w-330 my-12 mx-auto'>
            <p className='text-sm text-[#6A7282] font-normal py-3'> Back to all cars</p>
            <main className='w-full grid grid-cols-[60%_auto] gap-4'>

                <div id='carInformation'>
                    <img src="/src/assets/images/car_image1.png" className='w-full rounded-sm object-cover' alt="" />
                    <div className='my-2'>
                        <h3 className='text-[30px] font-semibold text-[#1E2939]'>BMW M4 COMPETITION</h3>
                        <p className='text-[#6A7282]'>2022 * SUV</p>
                    </div>
                    <hr className='h-0 border border-[#D1D5DC] my-4' />
                    <div className='my-4 grid grid-cols-4 gap-4' id='carDetails'>

                        <div className='bg-[#F3F4F6] shadow-lg  rounded-sm flex items-center justify-center'>
                            <figure className='p-4'>
                                <img src="/src/assets/images/users_icon.svg" className='mx-auto w-5 h-5' alt="" />
                                <p className='text-sm py-2'>5 Seats</p>
                            </figure>
                        </div>


                        <div className='bg-[#F3F4F6] shadow-lg  rounded-sm flex items-center justify-center'>
                            <figure className='p-4'>
                                <img src="/src/assets/images/fuel_icon.svg" className='mx-auto w-5 h-5' alt="" />
                                <p className='text-sm py-2'>Gasoline</p>
                            </figure>
                        </div>


                        <div className='bg-[#F3F4F6] shadow-lg  rounded-sm flex items-center justify-center'>
                            <figure className='p-4'>
                                <img src="/src/assets/images/car_icon.svg" className='mx-auto w-5 h-5' alt="" />
                                <p className='text-sm py-2'>Automatic</p>
                            </figure>
                        </div>


                        <div className='bg-[#F3F4F6] shadow-lg  rounded-sm flex items-center justify-center'>
                            <figure className='p-4'>
                                <img src="/src/assets/images/location_icon.svg" className='mx-auto w-5 h-5' alt="" />
                                <p className='text-sm py-2'>Los Angeles</p>
                            </figure>
                        </div>



                    </div>
                    <div className='my-8' id='description'>
                        <h5 className='text-[#090A0B] font-semibold leading-6'>Description</h5>
                        <p className='leading-6 text-[#64748B] text-[16px] py-4'>The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made its debut in 1999 as the first SUV ever produced by BMW.</p>
                    </div>

                    <div className='my-5' id='description'>
                        <h5 className='text-[#090A0B] font-semibold leading-6'>Features</h5>
                        <div className='grid grid-cols-2 my-5 gap-y-3 items-center'>
                            <div className='flex gap-2 items-center'>
                                <img src="/src/assets/images/check_icon.svg" className='w-4 h-4' alt="" />
                                <p className='text-[#64748B] font-medium'>Leather Seats</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <img src="/src/assets/images/check_icon.svg" className='w-4 h-4' alt="" />
                                <p className='text-[#64748B] font-medium'>Panoramic Sunroof</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <img src="/src/assets/images/check_icon.svg" className='w-4 h-4' alt="" />
                                <p className='text-[#64748B] font-medium'>Wireless Charging</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <img src="/src/assets/images/check_icon.svg" className='w-4 h-4' alt="" />
                                <p className='text-[#64748B] font-medium'>360 Camera</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white shadow-lg rounded-xl h-fit self-start max-w-[60%] p-4'>
                    <div className='flex justify-between' id='price'>
                        <h4 className='text-[#1E2939] font-semibold leading-7'>$299</h4>
                        <p className='text-sm text-[#6A7282]'>per day</p>
                    </div>
                    <hr className='h-0 border my-4 border-[#D1D5DC] ' />
                    <form action="" className='my-8'>
                        <div className='flex flex-col gap-2 my-2'>
                            <label className='text-sm font-medium capitalize block' htmlFor="">Pickup Date</label>
                            <input type="text" className='border rounded-sm p-1 block border-[#D1D5DC]' />
                        </div>
                        <div className='flex flex-col gap-2 my-2'>
                            <label className='text-sm font-medium capitalize block' htmlFor="">Return Date</label>
                            <input type="text" className='border rounded-sm p-1 block border-[#D1D5DC]' />
                        </div>
                        <button className='bg-[#2563EB] text-white w-full py-2 my-4 text-sm font-medium rounded-lg'>Book Now</button>
                        <p className='text-center text-[#6A7282] text-[12px] font-medium'>No credit card required to reserve</p>
                    </form>
                </div>
            </main>
        </section>
    )
}
