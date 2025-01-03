import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const handleServicesClickMobile = () => {
        // On mobile, toggle services submenu
        setServicesOpen((prev) => !prev);
    };

    return (
        <header className='w-full relative z-50'>
            {/* Top bar (Bar 1) - Hidden on mobile, shown on xl and above */}
            <div className='hidden xl:grid bg-beeYellow text-beeBlack py-3 px-6 xl:px-20 xl:grid-cols-[15%,40%,30%,15%] items-center gap-4'>
                <div></div>
                <div className='font-bold text-2xl leading-tight text-left'>
                    Your #1 Residential Cleaning Experts.
                </div>
                <div className='flex flex-row justify-end items-center space-x-4 w-full'>
                    <a
                        href='tel:8017122639'
                        className='font-bold text-2xl hover:text-black transition-colors whitespace-nowrap'
                    >
                        (801) 712-2639
                    </a>
                    <a
                        href='https://clienthub.getjobber.com/booking/eec2e0b1-8545-40e9-a42f-8e2fe1debdcb'
                        target='_blank'
                        rel='noopener'
                        className='border-2 border-beeBlue bg-white text-beeBlue font-bold text-2xl py-2 px-4 rounded hover:bg-beeBlue hover:text-white transition-colors whitespace-nowrap'
                    >
                        Schedule A Cleaning
                    </a>
                </div>
                <div></div>
            </div>
            {/* Bottom bar (Navbar / Bar 2) */}
            <nav className='bg-white shadow-md'>
                <div className='py-3 px-6 xl:px-20 flex items-center justify-between xl:grid xl:grid-cols-[15%,40%,30%,15%]'>
                    <div className='hidden xl:block'></div>

                    <div className='flex items-center space-x-3 xl:justify-start'>
                        <img
                            src='/logo.svg'
                            alt='Cleaning Bee Logo'
                            className='h-10 w-10'
                        />
                        <span className='font-bold text-2xl text-beeBlack'>
                            Cleaning Bee
                        </span>
                    </div>

                    {/* Main Nav (Desktop) */}
                    <div className='hidden xl:flex justify-end space-x-8 font-bold text-2xl items-center'>
                        <Link
                            to='/'
                            className='text-beeBlack hover:text-beeYellow transition-colors whitespace-nowrap'
                        >
                            Home
                        </Link>
                        <Link
                            to='/about'
                            className='text-beeBlack hover:text-beeYellow transition-colors whitespace-nowrap'
                        >
                            About Us
                        </Link>
                        {/* Services with Dropdown */}
                        <div
                            className='relative'
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <button
                                type='button'
                                className='text-beeBlack hover:text-beeYellow transition-colors whitespace-nowrap focus:outline-none'
                            >
                                Services
                            </button>
                            {servicesOpen && (
                                <div className='absolute top-full left-0 bg-white border border-gray-200 rounded shadow-lg py-2 w-48 z-50'>
                                    <Link
                                        to='/services/residential'
                                        className='block px-4 py-2 text-beeBlack hover:text-beeYellow hover:bg-gray-50 font-normal'
                                    >
                                        Residential
                                    </Link>
                                    <Link
                                        to='/services/commercial'
                                        className='block px-4 py-2 text-beeBlack hover:text-beeYellow hover:bg-gray-50 font-normal'
                                    >
                                        Commercial
                                    </Link>
                                    <Link
                                        to='/services/construction'
                                        className='block px-4 py-2 text-beeBlack hover:text-beeYellow hover:bg-gray-50 font-normal'
                                    >
                                        Construction
                                    </Link>
                                    <Link
                                        to='/services/janitorial'
                                        className='block px-4 py-2 text-beeBlack hover:text-beeYellow hover:bg-gray-50 font-normal'
                                    >
                                        Janitorial
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            to='/blog'
                            className='text-beeBlack hover:text-beeYellow transition-colors whitespace-nowrap'
                        >
                            Blog
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className='xl:hidden flex items-center justify-end w-auto'>
                        <button
                            className='flex flex-col space-y-1 items-end'
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label='Toggle Menu'
                        >
                            <span className='block w-6 h-[2px] bg-beeBlack'></span>
                            <span className='block w-4 h-[2px] bg-beeBlack'></span>
                            <span className='block w-6 h-[2px] bg-beeBlack'></span>
                        </button>
                    </div>
                </div>

                {/* Mobile dropdown menu */}
                {menuOpen && (
                    <div className='xl:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3'>
                        <Link
                            to='/'
                            onClick={() => setMenuOpen(false)}
                            className='block text-beeBlack hover:text-beeYellow transition-colors font-bold text-2xl'
                        >
                            Home
                        </Link>
                        <Link
                            to='/about'
                            onClick={() => setMenuOpen(false)}
                            className='block text-beeBlack hover:text-beeYellow transition-colors font-bold text-2xl'
                        >
                            About
                        </Link>
                        {/* Services with mobile toggle */}
                        <div>
                            <button
                                onClick={() => setServicesOpen(!servicesOpen)}
                                className='w-full text-left text-beeBlack hover:text-beeYellow transition-colors font-bold text-2xl flex justify-between items-center focus:outline-none'
                            >
                                <span>Services</span>
                                <span className='text-beeBlack'>
                                    {servicesOpen ? "▲" : "▼"}
                                </span>
                            </button>
                            {servicesOpen && (
                                <div className='mt-2 pl-4 space-y-2'>
                                    <Link
                                        to='/services/residential'
                                        onClick={() => {
                                            setServicesOpen(false);
                                            setMenuOpen(false);
                                        }}
                                        className='block text-beeBlack font-normal hover:text-beeYellow transition-colors text-xl'
                                    >
                                        Residential
                                    </Link>
                                    <Link
                                        to='/services/commercial'
                                        onClick={() => {
                                            setServicesOpen(false);
                                            setMenuOpen(false);
                                        }}
                                        className='block text-beeBlack font-normal hover:text-beeYellow transition-colors text-xl'
                                    >
                                        Commercial
                                    </Link>
                                    <Link
                                        to='/services/construction'
                                        onClick={() => {
                                            setServicesOpen(false);
                                            setMenuOpen(false);
                                        }}
                                        className='block text-beeBlack font-normal hover:text-beeYellow transition-colors text-xl'
                                    >
                                        Construction
                                    </Link>
                                    <Link
                                        to='/services/janitorial'
                                        onClick={() => {
                                            setServicesOpen(false);
                                            setMenuOpen(false);
                                        }}
                                        className='block text-beeBlack font-normal hover:text-beeYellow transition-colors text-xl'
                                    >
                                        Janitorial
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            to='/blog'
                            onClick={() => setMenuOpen(false)}
                            className='block text-beeBlack hover:text-beeYellow transition-colors font-bold text-2xl'
                        >
                            Blog
                        </Link>
                        <a
                            href='https://clienthub.getjobber.com/booking/eec2e0b1-8545-40e9-a42f-8e2fe1debdcb'
                            target='_blank'
                            rel='noopener'
                            className='border-2 border-beeBlue bg-white text-beeBlue font-bold text-xl py-2 px-4 rounded hover:bg-beeBlue hover:text-white transition-colors whitespace-nowrap mt-3 block'
                        >
                            Book a Cleaning
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Navbar;
