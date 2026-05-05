import React from 'react'

export default function AddCar() {
  return (
    <>
      <section id='main'>
        <div className='max-w-[57%] '>
          <div className='' id='heading'>
            <h3 className='text-[#090A0B] text-[26px] font-normal'>Add New Car</h3>
            <p className='text-sm text-[#64748B] font-normal'>Fill in details to list a new car for booking, including pricing, availability,
              <br />
              and car specifications.</p>
          </div>

          <form className='my-4' action="" id='addCar'>
            <div className='flex items-center gap-2' id='fileUpload'>
              <img src="/src/assets/images/upload_icon.svg" className='w-26.75 h-15' alt="" />
              <p className='text-[#8E9AAB] font-medium text-sm '>Upload a picture of your car</p>
            </div>
            <div className='flex gap-4  items-center justify-between my-3'>
              <div className='flex w-full flex-col gap-1' id='brand'>
                <label htmlFor="" className='text-[#4C5460] font-medium text-sm'>Model</label>
                <input
                  className='border border-[#DDE1EE] rounded-md text-[#64748B8C] font-semibold text-sm leading-7 w-full px-4 py-2'
                  type="text"
                  placeholder='e.g. X5, E-Class, M4...'
                  name=""
                  id="" />
              </div>
              <div className='flex  w-full flex-col gap-1' id='brand'>
                <label htmlFor="" className='text-[#4C5460] font-medium text-sm'>Brands</label>
                <input
                  className='border border-[#DDE1EE] rounded-md text-[#64748B8C] font-semibold text-sm leading-7 w-full px-4 py-2'
                  type="text"
                  placeholder='e.g. BMW, Mercedes, Audi...'
                  name=""
                  id="" />
              </div>
            </div>



            <div className='flex gap-4  items-center justify-between my-3'>
              <div className='flex w-full flex-col gap-1' id='brand'>
                <label htmlFor="" className='text-[#4C5460] font-medium text-sm'>Year</label>
                <input
                  className='border border-[#DDE1EE] rounded-md text-[#64748B8C] font-semibold text-sm leading-7 w-full px-4 py-2'
                  type="text"
                  placeholder='2025'
                  name=""
                  id="" />
              </div>
              <div className='flex  w-full flex-col gap-1' id='brand'>
                <label htmlFor="" className='text-[#4C5460] font-medium text-sm'>Daily Price ($)</label>
                <input
                  className='border border-[#DDE1EE] rounded-md text-[#64748B8C] font-semibold text-sm leading-7 w-full px-4 py-2'
                  type="text"
                  placeholder='100'
                  name=""
                  id="" />
              </div>

              <div className='flex  w-full flex-col gap-1' id='brand'>
                <label htmlFor="" className='text-[#4C5460] font-medium text-sm'>Category</label>
                <input
                  className='border border-[#DDE1EE] rounded-md text-[#64748B8C] font-semibold text-sm leading-7 w-full px-4 py-2'
                  type="text"
                  placeholder='Sedan'
                  name=""
                  id="" />
              </div>
            </div>



            <div className='flex gap-4  items-center justify-between my-3'>
              <div className='flex w-full flex-col gap-1' id='brand'>
                <label htmlFor="" className='text-[#4C5460] font-medium text-sm'>Transmission</label>
                <input
                  className='border border-[#DDE1EE] rounded-md text-[#64748B8C] font-semibold text-sm leading-7 w-full px-4 py-2'
                  type="text"
                  placeholder='Automatic'
                  name=""
                  id="" />
              </div>
              <div className='flex  w-full flex-col gap-1' id='brand'>
                <label htmlFor="" className='text-[#4C5460] font-medium text-sm'>Fuel Type</label>
                <input
                  className='border border-[#DDE1EE] rounded-md text-[#64748B8C] font-semibold text-sm leading-7 w-full px-4 py-2'
                  type="text"
                  placeholder='Disel'
                  name=""
                  id="" />
              </div>

              <div className='flex  w-full flex-col gap-1' id='brand'>
                <label htmlFor="" className='text-[#4C5460] font-medium text-sm'>Seating Capacity</label>
                <input
                  className='border border-[#DDE1EE] rounded-md text-[#64748B8C] font-semibold text-sm leading-7 w-full px-4 py-2'
                  type="text"
                  placeholder='5'
                  name=""
                  id="" />
              </div>
            </div>


            <div className='w-full my-3'>
              <div className='flex  w-full flex-col gap-1' id='brand'>
                <label htmlFor="" className='text-[#4C5460] font-medium text-sm'>Location</label>
                <input
                  className='border border-[#DDE1EE] rounded-md text-[#64748B8C] font-semibold text-sm leading-7 w-full px-4 py-2'
                  type="text"
                  placeholder='eg. San Francisco, CA'
                  name=""
                  id="" />
              </div>
            </div>

            <div className='w-full my-3'>
              <div className='flex  w-full flex-col gap-1' id='brand'>
                <label htmlFor="" className='text-[#4C5460] font-medium text-sm'>Description</label>
                <textarea

                  className='border border-[#DDE1EE] rounded-md text-[#64748B8C] font-semibold text-sm leading-7 resize-none w-full px-4 py-2'
                  type="text"
                  placeholder='Describe your car, its condition, and any notable details...'
                  name=""
                  id="" />
              </div>
            </div>

            <div className='bg-[#2563EB] w-fit p-2 rounded-md'>
              <button className='text-white text-sm flex items-center gap-1 cursor-pointer'>
                <img src="/src/assets/images/tick_icon.svg" alt="" />
                List Your Car
              </button>
            </div>

          </form>
        </div>
      </section>
    </>
  )
}
