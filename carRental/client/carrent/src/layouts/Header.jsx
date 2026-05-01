import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header className='max-w-full sticky top-0 z-2  bg-gray-50 border-b border-[#C1C1C180] '>
                <section className='max-w-330 py-3 mx-auto grid grid-cols-[33%_auto_auto] items-center '>
                    <figure className='justify-self-start'>
                        <img src="/src/assets/images/logo.svg" alt="" />
                    </figure>
                    <nav className=''>
                        <ul className='flex gap-5 justify-self-center'>
                            <li>
                                <NavLink to={'/'} className='text-[#414141]'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/cars'} className='text-[#414141]'>Cars</NavLink>
                            </li>
                            <li>
                                <p className='text-[#414141]'>About</p>
                            </li>
                        </ul>
                    </nav>
                    <div className='justify-self-end'>
                        <div className='flex  items-center gap-5 '>
                            <div className='relative w-fit'>
                                <input type="text"
                                    placeholder='Search Cars'
                                    className='border border-gray-300 w-fit rounded-lg text-sm px-3 py-1' />
                                <div className='absolute top-1/5 right-1/12'>
                                    <img src="/src/assets/images/search_icon.svg" alt="" />
                                </div>
                            </div>
                            <p className='text-[#414141]'>List Cars</p>
                            <button className='bg-[#2563EB] text-white text-[16px] rounded-lg px-3 py-1'>Sign Up</button>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}
