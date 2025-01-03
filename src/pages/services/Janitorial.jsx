import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function Janitorial() {
    return (
        <div className='w-[70%] mx-auto my-16 text-gray-700'>
            <Helmet>
                <title>Janitorial Services | Cleaning Bee</title>
                <meta
                    name='description'
                    content="Maintain a consistently clean environment with Cleaning Bee's janitorial services. From offices and schools to commercial facilities, keep things tidy every day."
                />
            </Helmet>

            {/* Hero / Header */}
            <section className='mb-10'>
                <h1 className='text-4xl md:text-5xl font-bold text-beeBlack mb-4'>
                    Janitorial Services
                </h1>
                <p className='text-lg md:text-xl leading-relaxed max-w-2xl'>
                    Keep your facilities well-maintained and welcoming. Our
                    janitorial services ensure a healthy, efficient environment
                    day after day.
                </p>
            </section>

            {/* Image */}
            <section className='mb-8'>
                <img
                    src='/images/janitorial-cleaning.jpg'
                    alt='Janitorial Services'
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
                        <strong>Routine Upkeep:</strong> Daily or weekly
                        dusting, sweeping, and trash removal.
                    </li>
                    <li>
                        <strong>Restroom & Supply Management:</strong> Regular
                        sanitization and restocking of essentials.
                    </li>
                    <li>
                        <strong>Floor & Surface Care:</strong> Mopping,
                        vacuuming, and disinfecting to keep high-traffic areas
                        clean.
                    </li>
                    <li>
                        <strong>Customized Schedules:</strong> Tailor our
                        services to your business hours for minimal disruption.
                    </li>
                </ul>
                <p className='text-lg leading-relaxed'>
                    From corporate offices to educational institutions, our
                    janitorial team ensures a consistently clean space that
                    supports productivity and peace of mind.
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
                    Schedule Janitorial Services
                </a>
            </section>
        </div>
    );
}

export default Janitorial;
