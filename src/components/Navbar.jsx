import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CallButton from "./CallButton";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className='sticky top-4 z-50'>
            <nav
                className='
                    relative
                    mx-auto
                    w-4/6
                    flex
                    items-center
                    justify-between
                    px-4
                    py-3
                    border
                    border-gray-300
                    rounded-[36px]
                '
            >
                {/* Frosted glass background */}
                <div
                    className='
                        absolute
                        inset-0
                        -z-10
                        bg-white/50
                        backdrop-blur
                        rounded-[36px]
                    '
                />
                {/* Logo */}
                <NavLink to='/' className='flex items-center md:space-x-2'>
                    <img
                        src='/Logo-Icon-Filled.svg'
                        alt='Cleaning Bee Icon'
                        className='hidden md:block h-20 w-auto object-contain'
                    />
                    <img
                        src='/Logo-Text-Wide.svg'
                        alt='Cleaning Bee Text'
                        className='h-auto w-full md:w-60 object-contain'
                    />
                </NavLink>
                {/* Desktop Navigation + CTA */}
                <div className='hidden md:flex items-center space-x-6'>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `text-lg font-semibold transition-colors ${
                                isActive
                                    ? "text-beeYellow"
                                    : "text-black hover:text-beeYellow"
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to='/services'
                        className={({ isActive }) =>
                            `text-lg font-semibold transition-colors ${
                                isActive
                                    ? "text-beeYellow"
                                    : "text-black hover:text-beeYellow"
                            }`
                        }
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to='/pricing'
                        className={({ isActive }) =>
                            `text-lg font-semibold transition-colors ${
                                isActive
                                    ? "text-beeYellow"
                                    : "text-black hover:text-beeYellow"
                            }`
                        }
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to='/about'
                        className={({ isActive }) =>
                            `text-lg font-semibold transition-colors ${
                                isActive
                                    ? "text-beeYellow"
                                    : "text-black hover:text-beeYellow"
                            }`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to='/blog'
                        className={({ isActive }) =>
                            `text-lg font-semibold transition-colors ${
                                isActive
                                    ? "text-beeYellow"
                                    : "text-black hover:text-beeYellow"
                            }`
                        }
                    >
                        Blog
                    </NavLink>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) =>
                            `text-lg font-semibold transition-colors ${
                                isActive
                                    ? "text-beeYellow"
                                    : "text-black hover:text-beeYellow"
                            }`
                        }
                    >
                        Contact
                    </NavLink>
                    <CallButton />
                </div>
                {/* Mobile Menu Button */}
                <button
                    className='md:hidden ml-4 flex items-center justify-center w-8 h-8 text-black'
                    onClick={toggleMenu}
                >
                    <div className='space-y-1'>
                        <span className='block w-6 h-[2px] bg-black'></span>
                        <span className='block w-6 h-[2px] bg-black'></span>
                        <span className='block w-6 h-[2px] bg-black'></span>
                    </div>
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    className='
                        md:hidden
                        absolute
                        top-16
                        left-0
                        w-full
                        bg-white
                        rounded-b-lg
                        shadow-lg
                        border-t
                        border-gray-300
                    '
                >
                    <div className='px-6 py-4 space-y-4'>
                        <NavLink
                            to='/'
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                `block text-lg font-semibold px-4 py-2 rounded-md transition-all ${
                                    isActive
                                        ? "bg-beeYellow text-white"
                                        : "text-black hover:bg-gray-100"
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to='/services'
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                `block text-lg font-semibold px-4 py-2 rounded-md transition-all ${
                                    isActive
                                        ? "bg-beeYellow text-white"
                                        : "text-black hover:bg-gray-100"
                                }`
                            }
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to='/pricing'
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                `block text-lg font-semibold px-4 py-2 rounded-md transition-all ${
                                    isActive
                                        ? "bg-beeYellow text-white"
                                        : "text-black hover:bg-gray-100"
                                }`
                            }
                        >
                            Pricing
                        </NavLink>
                        <NavLink
                            to='/about'
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                `block text-lg font-semibold px-4 py-2 rounded-md transition-all ${
                                    isActive
                                        ? "bg-beeYellow text-white"
                                        : "text-black hover:bg-gray-100"
                                }`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to='/blog'
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                `block text-lg font-semibold px-4 py-2 rounded-md transition-all ${
                                    isActive
                                        ? "bg-beeYellow text-white"
                                        : "text-black hover:bg-gray-100"
                                }`
                            }
                        >
                            Blog
                        </NavLink>
                        <NavLink
                            to='/contact'
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                `block text-lg font-semibold px-4 py-2 rounded-md transition-all ${
                                    isActive
                                        ? "bg-beeYellow text-white"
                                        : "text-black hover:bg-gray-100"
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                        <CallButton onClick={() => setMenuOpen(false)} />
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;
