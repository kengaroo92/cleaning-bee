import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='bg-white shadow-md'>
            <div className='flex items-center justify-between py-8 px-20'>
                <div className='flex items-center space-x-4'>
                    <img
                        src='/logo.svg'
                        alt='Cleaning Bee Logo'
                        className='h-8 w-8'
                    />
                    <span className='font-bold text-xl text-beeBlack'>
                        Cleaning Bee
                    </span>
                </div>
                <div className='hidden xl:flex space-x-8 font-bold text-xl'>
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
                    <Link
                        to='/services'
                        className='text-beeBlack hover:text-beeYellow transition-colors'
                    >
                        Services
                    </Link>
                    <Link
                        to='/pricing'
                        className='text-beeBlack hover:text-beeYellow transition-colors'
                    >
                        Pricing
                    </Link>
                    <Link
                        to='/contact'
                        className='text-beeBlack hover:text-beeYellow transition-colors'
                    >
                        Contact Us
                    </Link>
                    <Link
                        to='/loyalty'
                        className='text-beeBlack hover:text-beeYellow transition-colors'
                    >
                        Loyalty Program
                    </Link>
                    <Link
                        to='/blog'
                        className='text-beeBlack hover:text-beeYellow transition-colors'
                    >
                        Blog
                    </Link>
                </div>
                <div className='hidden xl:block'>
                    <a
                        href='tel:+18017122639'
                        className='bg-beeYellow text-beeBlack px-4 py-2 rounded hover:bg-yellow-500 transition-colors'
                    >
                        Get a FREE Quote
                    </a>
                </div>
                <button
                    className='xl:hidden flex flex-col space-y-1 items-end'
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label='Toggle Menu'
                >
                    <span className='block w-6 h-[2px] bg-beeBlack'></span>
                    <span className='block w-4 h-[2px] bg-beeBlack'></span>
                    <span className='block w-6 h-[2px] bg-beeBlack'></span>
                </button>
            </div>
            {menuOpen && (
                <div className='xl:hidden bg-white border-t border-gray-200'>
                    <Link
                        to='/'
                        onClick={() => setMenuOpen(false)}
                        className='block px-4 py-2 text-beeBlack hover:text-beeYellow transition-colors'
                    >
                        Home
                    </Link>
                    <Link
                        to='/about'
                        onClick={() => setMenuOpen(false)}
                        className='block px-4 py-2 text-beeBlack hover:text-beeYellow transition-colors'
                    >
                        About
                    </Link>
                    <Link
                        to='/services'
                        onClick={() => setMenuOpen(false)}
                        className='block px-4 py-2 text-beeBlack hover:text-beeYellow transition-colors'
                    >
                        Services
                    </Link>
                    <a
                        href='tel:1234567890'
                        onClick={() => setMenuOpen(false)}
                        className='block px-4 py-2 text-beeBlack hover:text-beeYellow transition-colors border-t border-gray-100'
                    >
                        Get a FREE Quote
                    </a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
