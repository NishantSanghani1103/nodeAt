import React from 'react'

export default function CustomerReview() {
    return (
        <div className='bg-white shadow-xl rounded-sm p-3'>
            <div className='flex gap-3 items-center' id='custDetails'>
                <figure>
                    <img src="src/assets/images/testimonial_image_1.png"
                        className='w-11 h-11' alt="" />
                </figure>
                <div>
                    <p className='text-[#374151] font-semibold text-sm'>Emma Rodriguez</p>
                    <p className='text-[#374151A1] text-[10px]'>Barcelona, Spain</p>
                </div>
            </div>
            <figure className='flex gap-1 items-center my-3' id='rating'>
                <img src="/src/assets/images/star_icon.svg" alt="" />
                <img src="/src/assets/images/star_icon.svg" alt="" />
                <img src="/src/assets/images/star_icon.svg" alt="" />
                <img src="/src/assets/images/star_icon.svg" alt="" />
                <img src="/src/assets/images/star_icon.svg" alt="" />
            </figure>
            <p className='text-[14px] text-[#374151A1]'>"I've used many booking platforms before, but none compare to the personalized experience and attention to detail that CarRental provides."</p>
        </div>
    )
}
