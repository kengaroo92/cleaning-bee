import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function Commercial() {
    return (
        <div className='w-[70%] mx-auto my-16 text-gray-700'>
            <Helmet>
                <title>Commercial Cleaning | Cleaning Bee</title>
                <meta
                    name='description'
                    content="Maintain a polished, welcoming environment for clients and staff with Cleaning Bee's commercial cleaning services—tailored to offices, retail stores, and more."
                />
            </Helmet>

            {/* Hero / Header */}
            <section className='mb-10'>
                <h1 className='text-4xl md:text-5xl font-bold text-beeBlack mb-4'>
                    Commercial Cleaning
                </h1>
                <p className='text-lg md:text-xl leading-relaxed max-w-2xl'>
                    Make a lasting impression on your clients and employees
                    alike. Our commercial cleaning services keep your workspace
                    polished, hygienic, and welcoming—perfect for offices,
                    retail stores, and more.
                </p>
            </section>

            {/* Image */}
            <section className='mb-8'>
                <img
                    src='/images/commercial-cleaning.jpg'
                    alt='Commercial Cleaning'
                    className='w-full h-64 object-cover rounded shadow-md'
                />
            </section>

            {/* Service Details */}
            <section className='space-y-6'>
                <h2 className='text-2xl font-bold text-beeBlack'>
                    What We Offer
                </h2>
                <ul className='list-disc list-inside space-y-3 text-lg leading-relaxed'>
                    <li>
                        <strong>Office Cleanups:</strong> Desks, break rooms,
                        conference rooms, and common areas.
                    </li>
                    <li>
                        <strong>Retail Maintenance:</strong> Floor care, window
                        cleaning, and display sanitizing.
                    </li>
                    <li>
                        <strong>Janitorial Oversight:</strong> Comprehensive
                        daily or weekly services, including trash removal and
                        supply restocking.
                    </li>
                    <li>
                        <strong>Flexible Scheduling:</strong> Day, night, or
                        weekend—minimize disruption to your operations.
                    </li>
                </ul>
                <p className='text-lg leading-relaxed'>
                    Our experienced team uses eco-friendly methods to safeguard
                    both your staff and the environment. Let us help you
                    maintain a professional and sanitary setting that boosts
                    productivity and leaves a positive impression on every
                    visitor.
                </p>
            </section>

            {/* CTA */}
            <section className='mt-8'>
                <a
                    href='https://clienthub.getjobber.com/booking/eec2e0b1-8545-40e9-a42f-8e2fe1debdcb'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block bg-beeYellow text-beeBlack font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                >
                    Book a Commercial Cleaning Today
                </a>
            </section>
        </div>
    );
}

export default Commercial;
