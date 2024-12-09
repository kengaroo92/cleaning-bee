import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className='bg-beeBlack text-white pt-10 pb-4'>
            {/* Three Columns */}
            <div className='w-[70%] mx-auto grid md:grid-cols-3 gap-8 mb-8 text-white'>
                {/* Column 1 */}
                <div className='space-y-4'>
                    <div>
                        <h3 className='text-lg font-bold mb-2'>
                            Licensed & Insured
                        </h3>
                        <p>
                            License No: <span className='ml-2'>123ABC</span>{" "}
                        </p>
                    </div>
                    <div>
                        <h4 className='text-lg font-bold mb-2'>Contact Us</h4>
                        <p className='mb-1'>
                            Phone:{" "}
                            <a href='tel:8017122639' className='ml-2'>
                                801.712.2639
                            </a>
                        </p>
                        <p>
                            Email:{" "}
                            <a
                                href='mailto:info@cleaningbee.com'
                                className='ml-2'
                            >
                                info@cleaningbee.com
                            </a>
                        </p>
                    </div>
                </div>

                {/* Column 2 - Why Us? */}
                <div className='space-y-4'>
                    <h3 className='text-lg font-bold mb-2'>Why Us?</h3>
                    <ul className='list-disc list-inside space-y-2'>
                        <li>Free Quotes, Competitive Pricing</li>
                        <li>Local, Family-Owned & Operated</li>
                        <li>Experienced and Friendly Staff</li>
                        <li>Eco-Friendly Cleaning Products</li>
                        <li>Customized Cleaning Solutions</li>
                        <li>Flexible Scheduling</li>
                        <li>Dedicated Customer Support</li>
                        <li>Customer Satisfaction Guaranteed</li>
                    </ul>
                </div>

                {/* Column 3 - Our Services */}
                <div className='space-y-4'>
                    <h3 className='text-lg font-bold mb-2'>Our Services</h3>
                    <ul className='space-y-1'>
                        <li>
                            <Link
                                to='/services#residential'
                                className='underline'
                            >
                                Residential Cleaning
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/services#commercial'
                                className='underline'
                            >
                                Commercial Cleaning
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/services#deep-cleaning'
                                className='underline'
                            >
                                Deep Cleaning
                            </Link>
                        </li>
                        <li>
                            <Link to='/services#moveout' className='underline'>
                                Move-In/Move-Out Cleaning
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/services#recurring'
                                className='underline'
                            >
                                Recurring Maintenance
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Social Media Icons */}
            <div className='w-[70%] mx-auto mb-4 flex items-center justify-center space-x-6'>
                <a
                    href='https://facebook.com'
                    className='text-white hover:text-beeYellow'
                    aria-label='Facebook'
                >
                    <FaFacebookF size={20} />
                </a>
                <a
                    href='https://twitter.com'
                    className='text-white hover:text-beeYellow'
                    aria-label='Twitter'
                >
                    <FaTwitter size={20} />
                </a>
                <a
                    href='https://instagram.com'
                    className='text-white hover:text-beeYellow'
                    aria-label='Instagram'
                >
                    <FaInstagram size={20} />
                </a>
            </div>

            {/* Rights Reserved */}
            <div className='w-[70%] mx-auto text-center text-sm'>
                &copy; {new Date().getFullYear()} Cleaning Bee. All Rights
                Reserved.
            </div>
        </footer>
    );
}

export default Footer;
