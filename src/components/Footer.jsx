import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className='bg-beeBlack text-white pt-10 pb-6'>
            <div className='w-[90%] md:w-[70%] mx-auto'>
                {/* Top Section: 2 or 3 Columns */}
                <div className='grid md:grid-cols-3 gap-8 mb-8'>
                    {/* Column 1: About */}
                    <div className='space-y-4'>
                        <h3 className='text-xl font-bold'>Cleaning Bee</h3>
                        <p className='text-sm md:text-base leading-relaxed'>
                            We provide top-quality residential and commercial
                            cleaning services, using eco-friendly methods to
                            keep your space spotless. Proudly serving the Salt
                            Lake Valley with a personal touch.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className='space-y-4'>
                        <h4 className='text-xl font-bold'>Quick Links</h4>
                        <ul className='space-y-2 text-sm md:text-base'>
                            <li>
                                <Link
                                    to='/'
                                    className='underline hover:text-beeYellow'
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/about'
                                    className='underline hover:text-beeYellow'
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/services'
                                    className='underline hover:text-beeYellow'
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/contact'
                                    className='underline hover:text-beeYellow'
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className='space-y-4'>
                        <h4 className='text-xl font-bold'>Get in Touch</h4>
                        <p className='text-sm md:text-base'>
                            <span className='font-semibold'>Phone:</span>{" "}
                            <a
                                href='tel:8017122639'
                                className='underline hover:text-beeYellow'
                            >
                                (801) 712-2639
                            </a>
                        </p>
                        <p className='text-sm md:text-base'>
                            <span className='font-semibold'>Email:</span>{" "}
                            <a
                                href='mailto:ken@cleaningbeeutah.com'
                                className='underline hover:text-beeYellow'
                            >
                                ken@cleaningbeeutah.com
                            </a>
                        </p>
                    </div>
                </div>

                {/* Social Icons */}
                <div className='mb-6 flex items-center justify-center space-x-6'>
                    <a
                        href='https://www.facebook.com/profile.php?id=61570991577643'
                        className='text-white hover:text-beeYellow transition-colors'
                        aria-label='Facebook'
                    >
                        <FaFacebookF size={20} />
                    </a>
                </div>

                {/* Bottom: Rights Reserved */}
                <div className='text-center text-sm border-t border-gray-600 pt-4'>
                    &copy; {new Date().getFullYear()} Cleaning Bee. All Rights
                    Reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
