import React from 'react'

export default function Login() {
    return (
        <section className="max-w-full" id="login">
            <main className="grid grid-cols-1 lg:grid-cols-2">

                {/* LEFT SIDE */}
                <aside className="bg-[#1E1A4D] min-h-screen flex items-center justify-center order-2 lg:order-1 px-6 lg:px-0">

                    <div className="text-center lg:text-left">
                        <h1 className="font-medium text-white leading-tight text-3xl sm:text-4xl lg:text-[48px] tracking-[-1.2px]">
                            Employee <br />
                            Management System
                        </h1>

                        <p className="text-[#90A1B9] text-sm sm:text-base lg:text-lg font-normal leading-6 sm:leading-7 my-4">
                            Streamline your workforce operations, track attendance,
                            <br />
                            manage payroll, and empower your team securely.
                        </p>
                    </div>

                </aside>

                {/* RIGHT SIDE */}
                <article className="bg-white min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-12 order-1 lg:order-2">

                    {/* Top link */}
                    <div className="flex gap-2 items-center mb-6">
                        <img src="/src/assets/images/SVG.png" alt="" />
                        <p className="text-sm font-normal text-[#90A1B9]">
                            Back to portals
                        </p>
                    </div>

                    {/* Heading */}
                    <div className="my-4">
                        <p className="text-xl sm:text-2xl lg:text-[30px] font-medium text-[#27272A] leading-tight">
                            Employee Portal
                        </p>

                        <p className="text-[#62748E] font-normal leading-6 my-2 text-sm sm:text-base">
                            Sign in to access your account
                        </p>
                    </div>

                    {/* FORM */}
                    <form className="w-full max-w-md">

                        {/* Email */}
                        <div className="flex flex-col my-2">
                            <label className="font-medium text-sm leading-5">
                                Email address
                            </label>

                            <input
                                className="border border-[#E2E8F0] rounded-sm p-2 w-full text-sm font-normal bg-[#F8FAFC80] my-2 focus:outline-none focus:ring-1 focus:ring-[#4F39F6]"
                                type="email"
                                placeholder="ns@gmail.com"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex flex-col my-2">
                            <label className="font-medium text-sm leading-5">
                                Password
                            </label>

                            <input
                                className="border border-[#E2E8F0] rounded-sm p-2 w-full text-sm font-normal bg-[#F8FAFC80] my-2 focus:outline-none focus:ring-1 focus:ring-[#4F39F6]"
                                type="password"
                                placeholder="********"
                            />
                        </div>

                        {/* Button */}
                        <button
                            className="bg-[#4F39F6] rounded-sm cursor-pointer w-full sm:w-auto px-6 py-2 text-white font-semibold leading-5 mt-2"
                            type="submit"
                        >
                            Sign In
                        </button>

                    </form>

                </article>

            </main>
        </section>
    )
}
