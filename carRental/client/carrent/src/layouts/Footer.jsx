import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className='max-w-full bg-white mt-24 '>
                <section className='max-w-[1320px] mx-auto'>
                    <main className='grid grid-cols-[40%_auto]  '>
                        <div className=''>
                            <figure>
                                <img src="/src/assets/images/logo.svg" alt="" />
                            </figure>
                            <p className='text-[#64748B] text-sm leading-5 py-4'>
                                Premium car rental service with a wide selection of
                                <br />
                                luxury and everyday vehicles for all your driving
                                needs.
                            </p>
                            <div className='flex gap-4 items-center' id='socialIcon'>
                                <img src="/src/assets/images/facebook_logo.svg" alt="" />
                                <img src="/src/assets/images/instagram_logo.svg" alt="" />
                                <img src="/src/assets/images/twitter_logo.svg" alt="" />
                                <img src="/src/assets/images/gmail_logo.svg" alt="" />
                            </div>
                        </div>
                        <div className='grid grid-cols-3 justify-center '>
                            <nav className='justify-self-end'>
                                <p className='text-sm font-medium text-[#090A0B] leading-5'>Quick Links</p>
                                <ul className='my-2'>
                                    <li className='text-[12px] text-[#64748B] my-2'>
                                        Home
                                    </li>
                                    <li className='text-[12px] text-[#64748B] my-2'>
                                        Browse Cars
                                    </li>
                                    <li className='text-[12px] text-[#64748B] my-2'>
                                        List Your Car
                                    </li>
                                    <li className='text-[12px] text-[#64748B] my-2'>
                                        About Us
                                    </li>
                                </ul>
                            </nav>



                            <nav className='justify-self-end'>
                                <p className='text-sm font-medium text-[#090A0B] leading-5'>Resources</p>
                                <ul className='my-2'>
                                    <li className='text-[12px] text-[#64748B] my-2'>
                                        Help Center
                                    </li>
                                    <li className='text-[12px] text-[#64748B] my-2'>
                                        Terms of Service
                                    </li>
                                    <li className='text-[12px] text-[#64748B] my-2'>
                                        Privacy Policy
                                    </li>
                                    <li className='text-[12px] text-[#64748B] my-2'>
                                        Insurance
                                    </li>
                                </ul>
                            </nav>


                            <nav className='justify-self-end'>
                                <p className='text-sm font-medium text-[#090A0B] leading-5'>Contact</p>
                                <ul className='my-2'>
                                    <li className='text-[12px] text-[#64748B] my-2'>
                                        1234 Luxury Drive
                                    </li>
                                    <li className='text-[12px] text-[#64748B] my-2'>
                                        San Francisco, CA 94107
                                    </li>
                                    <li className='text-[12px] text-[#64748B] my-2'>
                                        +1 (555) 123-4567
                                    </li>
                                    <li className='text-[12px] text-[#64748B] my-2'>
                                        car@example.com
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </main>
                    <div className='border border-[#D1D5DC] my-6'></div>
                </section>
            </footer>
        </>
    )
}
