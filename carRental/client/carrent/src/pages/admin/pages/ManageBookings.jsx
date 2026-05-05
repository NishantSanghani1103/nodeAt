import React from 'react'

export default function ManageBookings() {
  return (
    <>
      <section id='main'>
        <div className='max-w-full '>
          <div className='' id='heading'>
            <h3 className='text-[#090A0B] text-[26px] font-normal'>Manage Cars</h3>
            <p className='text-sm text-[#64748B] font-normal'>View all listed cars, update their details, or remove them from
              <br />
              the booking platform</p>
          </div>


          <div className="my-12 border border-[#DDE1EE] rounded-md overflow-hidden">
            <table className="w-full text-sm text-left">
              {/* Header */}
              <thead className="bg-[#F8FAFC] text-[#64748B]">
                <tr className="border-b border-[#DDE1EE]">
                  <th className="p-4 font-medium">Car</th>
                  <th className="p-4 font-medium">Date Range</th>
                  <th className="p-4 font-medium">Price</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium text-center">Actions</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {/* Row */}
                <tr className="border-b border-[#DDE1EE] hover:bg-[#F8FAFC]">
                  <td className="p-4 flex items-center gap-3">
                    <img
                      src="/src/assets/images/car_image2.png"
                      alt="car"
                      className="w-12 h-12 rounded-md object-cover"
                    />
                    <div>
                      <p className="font-medium text-[#0F172A]">Toyota Corolla</p>
                      <p className="text-xs text-[#64748B]">
                        5 seats • automatic
                      </p>
                    </div>
                  </td>

                  <td className="p-4 text-[#475569]">4/10/2025 to 4/15/2025</td>

                  <td className="p-4 text-[#0F172A] font-medium">$45/day</td>

                  <td className="p-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                      Available
                    </span>
                  </td>

                  <td className="p-4 text-center">
                    <select className='border border-[#DDE1EE] text-sm text-[#929394] font-normal' name="" id="">
                      <option value="cancle">cancel</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
