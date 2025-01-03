import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleServices = () => setServicesOpen(!servicesOpen);

    return (
        <header className='w-full bg-white shadow-sm z-50 relative'>
            <div className='mx-auto px-4 md:px-8 flex items-center justify-between h-16'>
                {/* Left Section: Logo + Name */}
                <div className='flex items-center space-x-2'>
                    <Link to='/'>
                        <span className='font-bold text-2xl text-beeBlack hover:text-beeYellow transition-colors'>
                            <img
                                src='/Horizontal-Logo.svg'
                                alt='Cleaning Bee Logo'
                                className='object-contain h-full w-full'
                            />
                        </span>
                    </Link>
                </div>

                {/* Desktop Nav Links */}
                <nav className='hidden md:flex items-center space-x-6 font-semibold text-lg'>
                    <Link
                        to='/'
                        className='text-beeBlack hover:text-beeYellow transition-colors'
                    >
                        Home
                    </Link>
                    <Link
                        to='/about'
                        className='text-beeBlack hover:text-beeYellow transition-colors'
                    >
                        About Us
                    </Link>

                    {/* Services - Desktop Dropdown & Clickable Link */}
                    <div className='relative group'>
                        <Link
                            to='/services'
                            className='text-beeBlack hover:text-beeYellow transition-colors focus:outline-none'
                        >
                            Our Services
                        </Link>
                        <div
                            className='
                absolute left-0 w-48 bg-white border border-gray-200 
                rounded-md shadow-md py-2 opacity-0 
                group-hover:opacity-100 group-hover:translate-y-1 
                transition-all transform 
                scale-95 origin-top
              '
                        >
                            <Link
                                to='/services/residential'
                                className='block px-4 py-2 text-beeBlack hover:bg-gray-100 hover:text-beeYellow'
                            >
                                Residential Cleaning
                            </Link>
                            <Link
                                to='/services/commercial'
                                className='block px-4 py-2 text-beeBlack hover:bg-gray-100 hover:text-beeYellow'
                            >
                                Commercial Cleaning
                            </Link>
                            <Link
                                to='/services/post-construction'
                                className='block px-4 py-2 text-beeBlack hover:bg-gray-100 hover:text-beeYellow'
                            >
                                Post-Construction Cleaning
                            </Link>
                            <Link
                                to='/services/janitorial'
                                className='block px-4 py-2 text-beeBlack hover:bg-gray-100 hover:text-beeYellow'
                            >
                                Janitorial Cleaning
                            </Link>
                        </div>
                    </div>

                    {/* Contact Page Link */}
                    <Link
                        to='/contact'
                        className='text-beeBlack hover:text-beeYellow transition-colors'
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Right Section: Phone + CTA (Desktop) */}
                <div className='hidden md:flex items-center space-x-6'>
                    <a
                        href='tel:8017122639'
                        className='text-xl font-bold text-beeBlack hover:text-beeYellow transition-colors'
                    >
                        (801) 712-2639
                    </a>
                    <a
                        href='https://clienthub.getjobber.com/booking/eec2e0b1-8545-40e9-a42f-8e2fe1debdcb'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='
              bg-beeBlue text-white 
              border-2 border-beeBlue 
              font-bold text-lg 
              py-2 px-6 
              rounded-full 
              hover:bg-white hover:text-beeBlue 
              transition-all 
              duration-200 
              ease-in-out 
              shadow-sm 
              hover:shadow-md 
              transform hover:-translate-y-0.5
              focus:outline-none
            '
                    >
                        Schedule A Cleaning
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className='md:hidden flex flex-col space-y-1'
                    onClick={toggleMenu}
                    aria-label='Toggle Menu'
                >
                    <span className='block w-6 h-[2px] bg-beeBlack'></span>
                    <span className='block w-6 h-[2px] bg-beeBlack'></span>
                    <span className='block w-6 h-[2px] bg-beeBlack'></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='md:hidden bg-white border-t border-gray-200 shadow-sm'>
                    <div className='px-4 py-4 space-y-4'>
                        {/* Nav Links for Mobile */}
                        <Link
                            to='/'
                            onClick={() => setMenuOpen(false)}
                            className='block text-beeBlack font-bold text-xl hover:text-beeYellow transition-colors'
                        >
                            Home
                        </Link>
                        <Link
                            to='/about'
                            onClick={() => setMenuOpen(false)}
                            className='block text-beeBlack font-bold text-xl hover:text-beeYellow transition-colors'
                        >
                            About
                        </Link>

                        {/* Services with Mobile Toggle */}
                        <div>
                            {/* “Services” link & sub-items */}
                            <div className='flex justify-between items-center'>
                                <Link
                                    to='/services'
                                    onClick={() => setMenuOpen(false)}
                                    className='text-beeBlack font-bold text-xl hover:text-beeYellow transition-colors'
                                >
                                    Services
                                </Link>
                                <button
                                    onClick={toggleServices}
                                    className='text-beeBlack font-bold text-xl hover:text-beeYellow transition-colors'
                                >
                                    {servicesOpen ? "▲" : "▼"}
                                </button>
                            </div>
                            {servicesOpen && (
                                <div className='mt-2 pl-4 space-y-2'>
                                    <Link
                                        to='/services/residential'
                                        onClick={() => {
                                            setServicesOpen(false);
                                            setMenuOpen(false);
                                        }}
                                        className='block text-beeBlack font-normal hover:text-beeYellow transition-colors text-lg'
                                    >
                                        Residential
                                    </Link>
                                    <Link
                                        to='/services/commercial'
                                        onClick={() => {
                                            setServicesOpen(false);
                                            setMenuOpen(false);
                                        }}
                                        className='block text-beeBlack font-normal hover:text-beeYellow transition-colors text-lg'
                                    >
                                        Commercial
                                    </Link>
                                    <Link
                                        to='/services/post-construction'
                                        onClick={() => {
                                            setServicesOpen(false);
                                            setMenuOpen(false);
                                        }}
                                        className='block text-beeBlack font-normal hover:text-beeYellow transition-colors text-lg'
                                    >
                                        Construction
                                    </Link>
                                    <Link
                                        to='/services/janitorial'
                                        onClick={() => {
                                            setServicesOpen(false);
                                            setMenuOpen(false);
                                        }}
                                        className='block text-beeBlack font-normal hover:text-beeYellow transition-colors text-lg'
                                    >
                                        Janitorial
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Contact Link */}
                        <Link
                            to='/contact'
                            onClick={() => setMenuOpen(false)}
                            className='block text-beeBlack font-bold text-xl hover:text-beeYellow transition-colors'
                        >
                            Contact
                        </Link>

                        {/* CTA + Phone for Mobile */}
                        <div className='pt-4 border-t border-gray-200 space-y-4'>
                            <a
                                href='tel:8017122639'
                                onClick={() => setMenuOpen(false)}
                                className='block text-xl font-bold text-beeBlack hover:text-beeYellow transition-colors'
                            >
                                (801) 712-2639
                            </a>
                            <a
                                href='https://clienthub.getjobber.com/booking/eec2e0b1-8545-40e9-a42f-8e2fe1debdcb'
                                target='_blank'
                                rel='noopener'
                                className='
                  bg-beeBlue text-white 
                  border-2 border-beeBlue 
                  font-bold text-lg 
                  py-2 px-6 
                  rounded-full 
                  hover:bg-white hover:text-beeBlue 
                  transition-all 
                  duration-200 
                  ease-in-out 
                  shadow-sm 
                  hover:shadow-md 
                  transform hover:-translate-y-0.5
                  focus:outline-none
                  block
                '
                                onClick={() => setMenuOpen(false)}
                            >
                                Schedule A Cleaning
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;
