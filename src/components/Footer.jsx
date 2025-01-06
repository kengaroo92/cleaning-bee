import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className='bg-beeBlack text-white pt-10 pb-6'>
            <div className='w-[90%] md:w-[70%] mx-auto'>
                {/* Top Section */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                    {/* Column 1: Brand and Mission */}
                    <div className='space-y-4'>
                        <h3 className='text-2xl font-bold'>Cleaning Bee</h3>
                        <p className='text-sm md:text-base leading-relaxed'>
                            Providing eco-friendly cleaning solutions tailored
                            for your home or business in the Salt Lake Valley.
                            Experience spotless results with a personal touch.
                        </p>
                    </div>

                    {/* Column 2: Navigation Links */}
                    <div>
                        <h4 className='text-xl font-bold mb-4'>Quick Links</h4>
                        <ul className='space-y-2 text-sm md:text-base'>
                            <li>
                                <Link
                                    to='/'
                                    className='hover:text-beeYellow transition-colors'
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/services'
                                    className='hover:text-beeYellow transition-colors'
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/about'
                                    className='hover:text-beeYellow transition-colors'
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/contact'
                                    className='hover:text-beeYellow transition-colors'
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h4 className='text-xl font-bold mb-4'>Get in Touch</h4>
                        <ul className='space-y-3 text-sm md:text-base'>
                            <li>
                                <span className='font-semibold'>Phone:</span>{" "}
                                <a
                                    href='tel:8017122639'
                                    className='hover:text-beeYellow transition-colors'
                                >
                                    (801) 712-2639
                                </a>
                            </li>
                            <li>
                                <span className='font-semibold'>Email:</span>{" "}
                                <a
                                    href='mailto:ken@cleaningbeeutah.com'
                                    className='hover:text-beeYellow transition-colors'
                                >
                                    ken@cleaningbeeutah.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Media */}
                <div className='flex items-center justify-center space-x-6 mb-8'>
                    <a
                        href='https://www.facebook.com/profile.php?id=61570991577643'
                        className='text-white hover:text-beeYellow transition-colors'
                        aria-label='Visit us on Facebook'
                    >
                        <FaFacebookF size={20} />
                    </a>
                    {/* 
                    <a
                        href='https://www.instagram.com/cleaningbee'
                        className='text-white hover:text-beeYellow transition-colors'
                        aria-label='Visit us on Instagram'
                    >
                        <FaInstagram size={20} />
                    </a>
                    */}
                </div>

                {/* Bottom Section */}
                <div className='text-center text-sm border-t border-gray-700 pt-4'>
                    <p>
                        &copy; {new Date().getFullYear()} Cleaning Bee. All
                        rights reserved.
                    </p>
                    <p>
                        Designed with ❤️ in the Salt Lake Valley by{" "}
                        <a
                            href='https://github.com/kengaroo92'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-beeYellow transition-colors'
                        >
                            Kenan Bjelosevic
                        </a>{" "}
                        |{" "}
                        <Link
                            to='/privacy-policy'
                            className='hover:text-beeYellow transition-colors'
                        >
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
