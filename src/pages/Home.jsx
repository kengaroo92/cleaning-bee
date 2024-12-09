import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className='space-y-16'>
            {/* Hero Section */}
            <section className='relative h-[60vh] w-screen bg-gray-100 overflow-hidden'>
                <img
                    src='/images/hero-image.jpg'
                    alt='Clean Home'
                    className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center px-4'>
                    <h1 className='text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-md'>
                        Your Home Cleaning Experts
                    </h1>
                    <p className='text-lg md:text-xl text-white mb-8 max-w-xl'>
                        Experience a sparkling home without lifting a finger.
                    </p>
                    <a
                        href='/contact'
                        className='inline-block bg-beeYellow text-beeBlack font-semibold py-3 px-6 rounded hover:bg-yellow-500 transition-colors text-lg'
                    >
                        Schedule a Cleaning Today
                    </a>
                </div>
            </section>

            {/* Services Section */}
            {/* Removed px-4 so width is strictly 70% centered, no extra padding */}
            <section className='w-[70%] mx-auto'>
                <h2 className='text-3xl md:text-4xl font-bold text-beeBlack text-center mb-12'>
                    Our Services
                </h2>
                <div className='grid md:grid-cols-3 gap-8'>
                    {/* Service Card 1 */}
                    <div className='bg-white shadow-lg rounded overflow-hidden'>
                        <img
                            src='/images/residential-cleaning.jpg'
                            alt='Residential Cleaning'
                            className='w-full h-64 object-cover'
                        />
                        <div className='p-4'>
                            <h3 className='text-xl font-semibold text-beeBlack mb-2'>
                                Residential Cleaning
                            </h3>
                            <p className='text-gray-700 mb-4'>
                                Let us handle your home cleaning so you can
                                focus on what really matters.
                            </p>
                            <Link
                                to='/services#residential'
                                className='inline-block bg-beeYellow text-beeBlack py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Service Card 2 */}
                    <div className='bg-white shadow-lg rounded overflow-hidden'>
                        <img
                            src='/images/commercial-cleaning.jpg'
                            alt='Commercial Cleaning'
                            className='w-full h-64 object-cover'
                        />
                        <div className='p-4'>
                            <h3 className='text-xl font-semibold text-beeBlack mb-2'>
                                Commercial Cleaning
                            </h3>
                            <p className='text-gray-700 mb-4'>
                                Keep your office or retail space immaculate for
                                clients and employees.
                            </p>
                            <Link
                                to='/services#commercial'
                                className='inline-block bg-beeYellow text-beeBlack py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Service Card 3 */}
                    <div className='bg-white shadow-lg rounded overflow-hidden'>
                        <img
                            src='/images/deep-cleaning.jpg'
                            alt='Deep Cleaning'
                            className='w-full h-64 object-cover'
                        />
                        <div className='p-4'>
                            <h3 className='text-xl font-semibold text-beeBlack mb-2'>
                                Deep Cleaning
                            </h3>
                            <p className='text-gray-700 mb-4'>
                                Thorough and detailed cleaning for a truly
                                refreshed living space.
                            </p>
                            <Link
                                to='/services#deep-cleaning'
                                className='inline-block bg-beeYellow text-beeBlack py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section - Two Columns */}
            <section className='w-[70%] mx-auto mb-16'>
                <h2 className='text-3xl md:text-4xl font-bold text-beeBlack text-center mb-8'>
                    Why Choose Cleaning Bee?
                </h2>
                {/* Use a custom grid template: first column 3fr, second column 1fr */}
                <div className='grid gap-8 grid-cols-[3fr_1fr]'>
                    {/* Left Column: Existing Text */}
                    <div className='space-y-6 text-gray-700 text-lg'>
                        <p>
                            At Cleaning Bee, we believe in providing top-quality
                            service with a personal touch. Our team of trained
                            professionals uses only the best equipment and
                            products to ensure your home or office sparkles.
                        </p>
                        <ul className='list-disc list-inside space-y-2'>
                            <li>
                                <strong>Reliable and Trustworthy Staff:</strong>{" "}
                                Our cleaners are vetted and trained, giving you
                                peace of mind.
                            </li>
                            <li>
                                <strong>Flexible Scheduling:</strong> We work
                                around your schedule, making it convenient for
                                you.
                            </li>
                            <li>
                                <strong>Eco-Friendly Products:</strong> We
                                choose sustainable, non-toxic products that are
                                safe for your family and pets.
                            </li>
                            <li>
                                <strong>
                                    Customer Satisfaction Guarantee:
                                </strong>{" "}
                                We’re not happy unless you’re delighted with our
                                services.
                            </li>
                        </ul>
                        <p>
                            Join the many satisfied customers who’ve discovered
                            the difference with Cleaning Bee. Contact us today
                            to take the first step towards a cleaner, healthier
                            home.
                        </p>
                    </div>

                    {/* Right Column: Two Boxes, Yellow Background on Top Box, Yellow Checkmarks */}
                    <div className='flex flex-col items-end space-y-4'>
                        {/* Box 1: Why Us? Header on Yellow Background */}
                        <div className='bg-beeYellow p-6 rounded w-full'>
                            <h3 className='text-2xl font-bold text-beeBlack'>
                                Why Us?
                            </h3>
                        </div>

                        {/* Box 2: Checkmark List */}
                        <div className='bg-white shadow-lg rounded p-6 w-full'>
                            <ul className='space-y-3 text-gray-700 text-lg'>
                                <li className='flex items-start space-x-2'>
                                    <span className='text-beeYellow'>✔</span>
                                    <span>
                                        Free Quotes, Competitive Pricing
                                    </span>
                                </li>
                                <li className='flex items-start space-x-2'>
                                    <span className='text-beeYellow'>✔</span>
                                    <span>Local, Family-Owned & Operated</span>
                                </li>
                                <li className='flex items-start space-x-2'>
                                    <span className='text-beeYellow'>✔</span>
                                    <span>Experienced and Friendly Staff</span>
                                </li>
                                <li className='flex items-start space-x-2'>
                                    <span className='text-beeYellow'>✔</span>
                                    <span>Eco-Friendly Cleaning Products</span>
                                </li>
                                <li className='flex items-start space-x-2'>
                                    <span className='text-beeYellow'>✔</span>
                                    <span>Customized Cleaning Solutions</span>
                                </li>
                                <li className='flex items-start space-x-2'>
                                    <span className='text-beeYellow'>✔</span>
                                    <span>Flexible Scheduling</span>
                                </li>
                                <li className='flex items-start space-x-2'>
                                    <span className='text-beeYellow'>✔</span>
                                    <span>Dedicated Customer Support</span>
                                </li>
                                <li className='flex items-start space-x-2'>
                                    <span className='text-beeYellow'>✔</span>
                                    <span>
                                        Customer Satisfaction Guaranteed
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
