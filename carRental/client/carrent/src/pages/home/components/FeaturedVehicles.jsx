import React from 'react'
import { Link } from 'react-router-dom'

export default function FeaturedVehicles() {
    return (
        <>

            <div className='bg-white shadow-lg  rounded-xl'>
                <figure className='relative '>
                    <Link to={'/car/1'}>  <img src="/src/assets/images/car_image1.png " className='rounded-t-xl' alt="" /></Link>
                    <div className='bg-[#1562FC] w-fit text-white rounded-lg text-[12px] px-4 py-1 absolute top-1/12 left-2.5 font-normal' id='carStatus'>
                        <p>Available Now</p>
                    </div>

                    <div className='bg-[#000000] w-fit text-white rounded-lg text-[12px] px-3 py-1 absolute bottom-1/12 right-2.5 font-normal' id='carStatus'>
                        <p>$100/day</p>
                    </div>
                </figure>
                <div id='title' className='p-3'>
                    <div>
                        <h4 className='text-md font-medium text-[#000000]'>BMW X5</h4>
                        <p className='text-[#4A5565] text-[12px]'>SUV 2022</p>
                    </div>
                    <div className=' my-3 grid grid-cols-2 gap-y-1' id='details'>
                        <div className='flex items-center gap-1'>
                            <img src="/src/assets/images/users_icon.svg" alt="" />
                            <p className='text-[12px] text-[#4A5565] font-light'> 5 Seats</p>
                        </div>

                        <div className='flex items-center gap-1'>
                            <img src="/src/assets/images/fuel_icon.svg" alt="" />
                            <p className='text-[12px] text-[#4A5565] font-light'>Gasoline</p>
                        </div>

                        <div className='flex items-center gap-1'>
                            <img src="/src/assets/images/car_icon.svg" alt="" />
                            <p className='text-[12px] text-[#4A5565] font-light'>Automatic</p>
                        </div>

                        <div className='flex items-center gap-1'>
                            <img src="/src/assets/images/location_icon.svg" alt="" />
                            <p className='text-[12px] text-[#4A5565] font-light'>Los Angeles</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
