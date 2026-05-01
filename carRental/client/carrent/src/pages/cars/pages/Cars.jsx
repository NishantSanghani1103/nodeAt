import React from 'react'
import FeaturedVehicles from '../../home/components/FeaturedVehicles'

export default function Cars() {
    return (
        <>
            <section className='bg-[#F1F5F9] max-w-full'>
                <main className='my-10 text-center py-20'>
                    <div id='heading'>
                        <h2 className='text-[36px] font-semibold text-[#090A0B] text-center '>Available Cars</h2>
                        <p className='text-lg leading-7 text-[#64748B]'>Browse our selection of premium vehicles available for your next adventure</p>
                    </div>
                    <div className=' max-w-[50%] mx-auto my-12'>
                        <div className='relative'>
                            <input type="text" className='bg-white border w-full px-10 py-4 border-[#E2E8F0] shadow-lg rounded-3xl text-[14px]' placeholder='Search by make, model, or features' />
                            <img src="/src/assets/images/search_icon.svg" className='absolute top-1/3 left-3.5' alt="" />

                            <img src="/src/assets/images/filter_icon.svg" className='absolute top-1/3 right-3.5' alt="" />
                        </div>
                    </div>
                </main>
            </section>

            <section className='max-w-330 mx-auto'>
                <p className='text-[#6A7282]'>Showing 6 Cars</p>
                <div className=' grid grid-cols-3 justify-center gap-8 my-8' id='featuredCart-items'>
                    <FeaturedVehicles />
                    <FeaturedVehicles />
                    <FeaturedVehicles />
                    <FeaturedVehicles />
                    <FeaturedVehicles />
                    <FeaturedVehicles />

                </div>
            </section>
        </>
    )
}
