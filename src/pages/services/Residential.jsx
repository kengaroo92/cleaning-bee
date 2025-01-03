import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function Residential() {
    return (
        <div className='w-[70%] mx-auto my-16 text-gray-700'>
            <Helmet>
                <title>Residential Cleaning | Cleaning Bee</title>
                <meta
                    name='description'
                    content="Enjoy a spotless, refreshing home with Cleaning Bee's residential cleaning services. From kitchens and bathrooms to living areas and bedrooms, we've got you covered."
                />
            </Helmet>

            {/* Hero / Header */}
            <section className='mb-10'>
                <h1 className='text-4xl md:text-5xl font-bold text-beeBlack mb-4'>
                    Residential Cleaning
                </h1>
                <p className='text-lg md:text-xl leading-relaxed max-w-2xl'>
                    Keep your home fresh and inviting with our comprehensive
                    residential cleaning solutions. Whether you need weekly
                    upkeep or a deep clean, our team customizes services to your
                    lifestyle.
                </p>
            </section>

            {/* Image */}
            <section className='mb-8'>
                <img
                    src='/images/residential-cleaning.jpg'
                    alt='Residential Cleaning'
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
                        <strong>Standard Maintenance:</strong> Regular dusting,
                        vacuuming, mopping, and light tidying.
                    </li>
                    <li>
                        <strong>Deep Cleans:</strong> Baseboards, vents,
                        appliances, and all those hard-to-reach spots.
                    </li>
                    <li>
                        <strong>Carpet & Upholstery Care:</strong> Stain
                        removal, deodorizing, and fiber refresh.
                    </li>
                    <li>
                        <strong>Move-In/Move-Out:</strong> Ensure your new or
                        old home is spotless for a smooth transition.
                    </li>
                </ul>
                <p className='text-lg leading-relaxed'>
                    Our eco-friendly products are safe for children and pets,
                    giving you peace of mind along with a sparkling home. We
                    take pride in ensuring every corner looks its best—so you
                    can enjoy a comfortable, inviting space every day.
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
                    Schedule Your Home Cleaning
                </a>
            </section>
        </div>
    );
}

export default Residential;
