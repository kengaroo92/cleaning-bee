import React from "react";
import { Helmet } from "react-helmet-async";

function Janitorial() {
    return (
        <div className='w-[70%] mx-auto my-16 text-gray-700'>
            <Helmet>
                <title>Janitorial Cleaning Services | Cleaning Bee</title>
                <meta
                    name='description'
                    content='Cleaning Bee’s janitorial services provide routine upkeep for offices, schools, and facilities in the Salt Lake Valley. Enjoy spotless restrooms, replenished supplies, and consistent maintenance that keeps your space welcoming and healthy.'
                />
                <meta
                    name='keywords'
                    content='janitorial services, office cleaning, facility maintenance, salt lake valley, cleaning bee'
                />
            </Helmet>

            <section className='space-y-6'>
                <h1 className='text-5xl font-bold text-beeBlack text-center leading-tight'>
                    Janitorial Services
                </h1>
                <p className='text-xl text-gray-700 leading-relaxed'>
                    Keep your workspace consistently clean and comfortable with
                    Cleaning Bee’s professional janitorial services. From daily
                    maintenance to replenishing supplies, we ensure a healthier,
                    more productive environment for everyone.
                </p>
            </section>

            <section className='mt-16'>
                <img
                    src='/images/janitorial-hero.jpg'
                    alt='Janitorial Services'
                    className='w-full h-64 object-cover rounded-lg shadow-lg'
                />
            </section>

            {/* Detailed Services */}
            <section className='space-y-10 mt-16'>
                <h2 className='text-4xl font-bold text-beeBlack'>
                    Our Janitorial Offerings
                </h2>
                <ul className='list-disc list-inside space-y-3 text-xl leading-relaxed'>
                    <li>
                        <strong>Routine Maintenance:</strong> Regular dusting,
                        mopping, and vacuuming keep floors and surfaces clean.
                    </li>
                    <li>
                        <strong>Restroom Sanitation:</strong> Spotless restrooms
                        with sanitized fixtures and well-stocked supplies.
                    </li>
                    <li>
                        <strong>Trash & Recycling:</strong> Timely removal of
                        waste to maintain a fresh and clutter-free environment.
                    </li>
                    <li>
                        <strong>Customized Schedules:</strong> Daily, weekly, or
                        monthly plans designed around your facility’s needs.
                    </li>
                </ul>
                <p className='text-xl text-gray-700 leading-relaxed'>
                    Our trained team uses eco-friendly products and efficient
                    practices to deliver reliable results. With Cleaning Bee’s
                    janitorial services, you can focus on what you do best while
                    we handle the upkeep.
                </p>
            </section>

            {/* CTA */}
            <section className='text-center space-y-6 mt-16'>
                <h2 className='text-3xl font-bold text-beeBlack'>
                    Keep Your Facility Running Smoothly
                </h2>
                <p className='text-xl text-gray-700 leading-relaxed'>
                    Ready to maintain a spotless, welcoming environment? Contact
                    us today to explore our janitorial packages and find the
                    perfect fit for your operations.
                </p>
                <a
                    href='/contact'
                    className='inline-block bg-beeYellow text-beeBlack font-semibold py-3 px-6 rounded hover:bg-yellow-500 transition-colors text-xl'
                >
                    Contact Us Now
                </a>
            </section>
        </div>
    );
}

export default Janitorial;
