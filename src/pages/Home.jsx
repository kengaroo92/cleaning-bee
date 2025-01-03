import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Home() {
    return (
        <div className='space-y-16'>
            <Helmet>
                <title>
                    Cleaning Bee | Residential & Commercial Cleaning in the Salt
                    Lake Valley
                </title>
                <meta
                    name='description'
                    content='Cleaning Bee offers top-quality residential, commercial, construction, and janitorial cleaning services in the Salt Lake Valley. Experience eco-friendly cleaning solutions and flexible scheduling for a sparkling clean environment.'
                />
                <meta
                    name='keywords'
                    content='residential cleaning, commercial cleaning, construction cleaning, janitorial services, eco-friendly cleaning, Salt Lake Valley, Utah'
                />
            </Helmet>
            {/* Hero Section */}
            <section className='relative h-[60vh] w-screen bg-gray-100 overflow-hidden'>
                <img
                    src='/images/hero-image.jpg'
                    alt='Clean Home'
                    className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center px-4'>
                    <h1 className='text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-md'>
                        Your Home Cleaning Experts in the Salt Lake Valley
                    </h1>
                    <p className='text-lg md:text-xl text-white mb-8 max-w-xl'>
                        Transforming homes and businesses with eco-friendly,
                        personalized cleaning services. Let us handle the chores
                        while you enjoy a fresh, comfortable space.
                    </p>
                    <a
                        href='https://clienthub.getjobber.com/booking/eec2e0b1-8545-40e9-a42f-8e2fe1debdcb'
                        target='_blank'
                        rel='noopener'
                        className='border-2 border-beeBlue bg-beeYellow text-beeBlue font-bold text-2xl py-2 px-6 rounded hover:bg-beeBlue hover:text-white transition-colors whitespace-nowrap'
                    >
                        Schedule A Cleaning
                    </a>
                </div>
            </section>

            {/* Services Section */}
            <section className='w-[70%] mx-auto'>
                <h2 className='text-3xl md:text-4xl font-bold text-beeBlack text-center mb-12'>
                    Our Cleaning Services
                </h2>
                <p className='text-gray-700 text-lg mb-8 text-center max-w-3xl mx-auto'>
                    At Cleaning Bee, we offer a range of professional cleaning
                    services to meet all your needs. From detailed residential
                    cleans to specialized commercial or construction site
                    cleaning, our team is equipped to handle it all. Explore our
                    services below and learn how we can keep your environment
                    spotless.
                </p>
                <div className='grid md:grid-cols-4 gap-8'>
                    {/* Residential Cleaning */}
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
                                Enjoy a pristine, relaxing home with our
                                customized residential cleaning. We handle
                                kitchens, bathrooms, bedrooms, and more—ensuring
                                every corner is left spotless.
                            </p>
                            <Link
                                to='/services#residential'
                                className='inline-block bg-beeYellow text-beeBlack py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Commercial Cleaning */}
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
                                Keep your office, retail store, or corporate
                                space welcoming and hygienic. Our commercial
                                team works around your schedule to maintain a
                                professional image.
                            </p>
                            <Link
                                to='/services#commercial'
                                className='inline-block bg-beeYellow text-beeBlack py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Construction Cleaning */}
                    <div className='bg-white shadow-lg rounded overflow-hidden'>
                        <img
                            src='/images/construction-cleaning.jpg'
                            alt='Construction Cleaning'
                            className='w-full h-64 object-cover'
                        />
                        <div className='p-4'>
                            <h3 className='text-xl font-semibold text-beeBlack mb-2'>
                                Construction Cleaning
                            </h3>
                            <p className='text-gray-700 mb-4'>
                                Post-construction or renovation cleanup made
                                easy. We remove dust, debris, and materials,
                                leaving your new or remodeled space ready to be
                                enjoyed.
                            </p>
                            <Link
                                to='/services#construction'
                                className='inline-block bg-beeYellow text-beeBlack py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Janitorial Services */}
                    <div className='bg-white shadow-lg rounded overflow-hidden'>
                        <img
                            src='/images/janitorial-cleaning.jpg'
                            alt='Janitorial Services'
                            className='w-full h-64 object-cover'
                        />
                        <div className='p-4'>
                            <h3 className='text-xl font-semibold text-beeBlack mb-2'>
                                Janitorial Services
                            </h3>
                            <p className='text-gray-700 mb-4'>
                                Maintain a consistently clean and organized
                                environment. Our janitorial services ensure
                                offices, schools, and facilities remain pristine
                                day after day.
                            </p>
                            <Link
                                to='/services#janitorial'
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
                <p className='text-gray-700 text-lg mb-8 text-center max-w-3xl mx-auto'>
                    We go above and beyond to ensure every customer is
                    satisfied. With eco-friendly products, flexible scheduling,
                    and a dedicated team, you can trust Cleaning Bee to deliver
                    exceptional results every time.
                </p>
                <div className='grid gap-8 grid-cols-[3fr_1fr]'>
                    {/* Left Column: Existing Text */}
                    <div className='space-y-6 text-gray-700 text-lg'>
                        <p>
                            At Cleaning Bee, we’re committed to providing a
                            top-quality service with a personal touch. Our
                            trained professionals use only the best equipment
                            and products, ensuring your home or office truly
                            shines.
                        </p>
                        <ul className='list-disc list-inside space-y-2'>
                            <li>
                                <strong>Reliable & Trustworthy Staff:</strong>{" "}
                                Vetted and trained cleaners provide peace of
                                mind.
                            </li>
                            <li>
                                <strong>Flexible Scheduling:</strong> We work
                                around your calendar for ultimate convenience.
                            </li>
                            <li>
                                <strong>Eco-Friendly Products:</strong> Safe for
                                your family, pets, and the environment.
                            </li>
                            <li>
                                <strong>
                                    Customer Satisfaction Guarantee:
                                </strong>{" "}
                                We’re not happy unless you’re delighted.
                            </li>
                        </ul>
                        <p>
                            Ready to enjoy a cleaner, healthier space? Contact
                            us today and discover how Cleaning Bee can make a
                            difference in your home or business.
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
                                    <span>Experienced & Friendly Staff</span>
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
