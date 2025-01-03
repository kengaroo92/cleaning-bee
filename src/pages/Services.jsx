import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Services() {
    return (
        <div className='w-[70%] mx-auto space-y-16 my-16 text-gray-700'>
            <Helmet>
                <title>Cleaning Bee | Our Services</title>
                <meta
                    name='description'
                    content='Explore Cleaning Bee’s core service categories: Residential, Commercial, Post-Construction, and Janitorial. Learn about specialized solutions for each category and find the perfect cleaning plan for your needs.'
                />
            </Helmet>

            {/* Page Title & Intro */}
            <section className='text-center space-y-4'>
                <h1 className='text-4xl md:text-5xl font-bold text-beeBlack'>
                    Our Services
                </h1>
                <p className='text-lg md:text-xl max-w-2xl mx-auto'>
                    From routine upkeep to deep transformations, we offer a
                    variety of cleaning solutions under four main categories.
                    Discover which one best fits your home or business.
                </p>
            </section>

            {/* 1. Residential Cleaning */}
            <section className='space-y-6'>
                <h2 className='text-3xl font-bold text-beeBlack'>
                    Residential Cleaning
                </h2>
                <div className='grid md:grid-cols-[40%,60%] gap-6 items-center'>
                    <img
                        src='/images/residential-cleaning.jpg'
                        alt='Residential Cleaning'
                        className='w-full h-64 object-cover rounded shadow-md'
                    />
                    <div className='space-y-4 text-lg leading-relaxed'>
                        <p>
                            Keep your home fresh, welcoming, and healthy with
                            our comprehensive residential cleaning solutions.
                            Whether you need a weekly tidy-up or a thorough deep
                            clean, we customize each plan to suit your family’s
                            lifestyle.
                        </p>
                        <ul className='list-disc list-inside space-y-2'>
                            <li>
                                <strong>Standard Maintenance:</strong> Regular
                                dusting, vacuuming, and surface cleaning.
                            </li>
                            <li>
                                <strong>Deep Clean:</strong> Baseboards, vents,
                                and detailed scrubbing of appliances.
                            </li>
                            <li>
                                <strong>Carpet & Upholstery:</strong> Stain
                                removal, odor elimination, and fiber
                                revitalization.
                            </li>
                            <li>
                                <strong>Move-In/Move-Out:</strong> Ensure your
                                new or old home is spotless before settling in
                                or handing over keys.
                            </li>
                        </ul>
                        <a
                            href='https://clienthub.getjobber.com/booking/eec2e0b1-8545-40e9-a42f-8e2fe1debdcb'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-block bg-beeYellow text-beeBlack font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                        >
                            Schedule Your Home Cleaning
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. Commercial Cleaning */}
            <section className='space-y-6'>
                <h2 className='text-3xl font-bold text-beeBlack'>
                    Commercial Cleaning
                </h2>
                <div className='grid md:grid-cols-[40%,60%] gap-6 items-center'>
                    <img
                        src='/images/commercial-cleaning.jpg'
                        alt='Commercial Cleaning'
                        className='w-full h-64 object-cover rounded shadow-md'
                    />
                    <div className='space-y-4 text-lg leading-relaxed'>
                        <p>
                            Present a professional, hygienic workspace to your
                            clients and employees. Our commercial cleaning
                            services are tailored to meet the demands of
                            offices, retail environments, and more.
                        </p>
                        <ul className='list-disc list-inside space-y-2'>
                            <li>
                                <strong>Office Cleanups:</strong> Desks,
                                cubicles, conference rooms, and break areas.
                            </li>
                            <li>
                                <strong>Retail Maintenance:</strong>{" "}
                                High-traffic floor care, display sanitization,
                                and restroom upkeep.
                            </li>
                            <li>
                                <strong>Janitorial Oversight:</strong> Extended
                                service for daily or weekly tasks like trash
                                disposal and supply restocking.
                            </li>
                            <li>
                                <strong>Flexible Scheduling:</strong> We work
                                around your hours to minimize interruptions.
                            </li>
                        </ul>
                        <a
                            href='https://clienthub.getjobber.com/booking/eec2e0b1-8545-40e9-a42f-8e2fe1debdcb'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-block bg-beeYellow text-beeBlack font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                        >
                            Book a Commercial Cleaning Today
                        </a>
                    </div>
                </div>
            </section>

            {/* 3. Post-Construction Cleaning */}
            <section className='space-y-6'>
                <h2 className='text-3xl font-bold text-beeBlack'>
                    Post-Construction Cleaning
                </h2>
                <div className='grid md:grid-cols-[40%,60%] gap-6 items-center'>
                    <img
                        src='/images/construction-cleaning.jpg'
                        alt='Post-Construction Cleaning'
                        className='w-full h-64 object-cover rounded shadow-md'
                    />
                    <div className='space-y-4 text-lg leading-relaxed'>
                        <p>
                            After renovations or new builds, let us handle the
                            finishing touches. We remove dust, debris, and
                            leftover materials so your space is move-in ready
                            and looking its best.
                        </p>
                        <ul className='list-disc list-inside space-y-2'>
                            <li>
                                <strong>Debris & Dust Removal:</strong>{" "}
                                Specialized equipment for drywall dust, wood
                                shavings, and more.
                            </li>
                            <li>
                                <strong>Surface Polishing:</strong> Wipe down
                                and polish countertops, appliances, and
                                fixtures.
                            </li>
                            <li>
                                <strong>Detailed Floor Care:</strong> Tile,
                                hardwood, or carpet rejuvenation
                                post-construction.
                            </li>
                            <li>
                                <strong>Site-Specific Needs:</strong> We adapt
                                to each project, ensuring thorough final
                                cleanup.
                            </li>
                        </ul>
                        <a
                            href='https://clienthub.getjobber.com/booking/eec2e0b1-8545-40e9-a42f-8e2fe1debdcb'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-block bg-beeYellow text-beeBlack font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                        >
                            Schedule a Post-Construction Cleaning
                        </a>
                    </div>
                </div>
            </section>

            {/* 4. Janitorial Services */}
            <section className='space-y-6'>
                <h2 className='text-3xl font-bold text-beeBlack'>
                    Janitorial Services
                </h2>
                <div className='grid md:grid-cols-[40%,60%] gap-6 items-center'>
                    <img
                        src='/images/janitorial-cleaning.jpg'
                        alt='Janitorial Services'
                        className='w-full h-64 object-cover rounded shadow-md'
                    />
                    <div className='space-y-4 text-lg leading-relaxed'>
                        <p>
                            Maintain a consistently clean environment for your
                            facility, school, or commercial building. Our
                            janitorial team keeps everything running smoothly,
                            from restrooms to common areas.
                        </p>
                        <ul className='list-disc list-inside space-y-2'>
                            <li>
                                <strong>Routine Maintenance:</strong> Regular
                                dusting, mopping, and vacuuming for high-traffic
                                areas.
                            </li>
                            <li>
                                <strong>Restroom & Supply Management:</strong>{" "}
                                Sanitizing surfaces and replenishing paper
                                goods.
                            </li>
                            <li>
                                <strong>Trash & Recycling:</strong> Efficient
                                disposal and eco-friendly sorting.
                            </li>
                            <li>
                                <strong>Custom Schedules:</strong> Daily,
                                weekly, or monthly plans aligned with your
                                operational needs.
                            </li>
                        </ul>
                        <a
                            href='https://clienthub.getjobber.com/booking/eec2e0b1-8545-40e9-a42f-8e2fe1debdcb'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-block bg-beeYellow text-beeBlack font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                        >
                            Schedule Janitorial Services
                        </a>
                    </div>
                </div>
            </section>

            {/* Additional Info */}
            <section className='text-center space-y-4'>
                <p className='max-w-3xl mx-auto text-lg leading-relaxed'>
                    Don’t see exactly what you’re looking for? Reach out to us,
                    and we’ll create a custom cleaning plan to suit your unique
                    needs. Whether it’s a one-time deep clean or a recurring
                    contract, our flexibility ensures you get the perfect
                    solution.
                </p>
                <a
                    href='https://clienthub.getjobber.com/booking/eec2e0b1-8545-40e9-a42f-8e2fe1debdcb'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block bg-beeYellow text-beeBlack font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                >
                    Contact Us for a Custom Quote
                </a>
            </section>
        </div>
    );
}

export default Services;
