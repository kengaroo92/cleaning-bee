import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
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
                <div className='flex items-center'>
                    <img
                        src='/Artboard 2.svg'
                        alt='Cleaning Bee Logo'
                        className='h-auto w-44 object-contain'
                    />
                </div>

                {/* Navigation + CTA */}
                <div className='flex items-center space-x-6'>
                    {/* Each NavLink uses a function to set className based on whether it's active */}
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `
                text-base font-semibold transition-colors
                ${
                    isActive
                        ? "text-beeYellow" /* Active page style without underline */
                        : "text-black hover:text-beeYellow" /* Hover style */
                }
              `
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to='/services'
                        className={({ isActive }) =>
                            `
                text-base font-semibold transition-colors
                ${
                    isActive
                        ? "text-beeYellow"
                        : "text-black hover:text-beeYellow"
                }
              `
                        }
                    >
                        Services
                    </NavLink>

                    <NavLink
                        to='/pricing'
                        className={({ isActive }) =>
                            `
                text-base font-semibold transition-colors
                ${
                    isActive
                        ? "text-beeYellow"
                        : "text-black hover:text-beeYellow"
                }
              `
                        }
                    >
                        Pricing
                    </NavLink>

                    <NavLink
                        to='/about'
                        className={({ isActive }) =>
                            `
                text-base font-semibold transition-colors
                ${
                    isActive
                        ? "text-beeYellow"
                        : "text-black hover:text-beeYellow"
                }
              `
                        }
                    >
                        About
                    </NavLink>
                    {/* 
                    <NavLink
                        to='/blog'
                        className={({ isActive }) =>
                            `
                text-base font-semibold transition-colors
                ${
                    isActive
                        ? "text-beeYellow"
                        : "text-black hover:text-beeYellow"
                }
              `
                        }
                    >
                        Blog
                    </NavLink>
                    */}

                    <NavLink
                        to='/contact'
                        className={({ isActive }) =>
                            `
                text-base font-semibold transition-colors
                ${
                    isActive
                        ? "text-beeYellow"
                        : "text-black hover:text-beeYellow"
                }
              `
                        }
                    >
                        Contact
                    </NavLink>

                    <a
                        href='tel:8017122639'
                        className='
              inline-block
              px-4
              py-2
              text-sm
              font-medium
              text-white
              bg-beeYellow
              rounded-[36px]
              hover:bg-beeYellow/90
              focus:outline-none
              focus-visible:ring
              focus-visible:ring-yellow-400
              transition
            '
                    >
                        Call Us: 801-712-2639
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
