import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function PostConstruction() {
    return (
        <div className='w-[70%] mx-auto my-16 text-gray-700'>
            <Helmet>
                <title>Post-Construction Cleaning | Cleaning Bee</title>
                <meta
                    name='description'
                    content='Clean up after renovations or new builds with Cleaning Bee’s post-construction cleaning. We remove debris, dust, and leftover materials for a move-in-ready space.'
                />
            </Helmet>

            {/* Hero / Header */}
            <section className='mb-10'>
                <h1 className='text-4xl md:text-5xl font-bold text-beeBlack mb-4'>
                    Post-Construction Cleaning
                </h1>
                <p className='text-lg md:text-xl leading-relaxed max-w-2xl'>
                    After the builders leave, we handle the finishing touches.
                    Our post-construction cleaning removes dust, debris, and
                    leftover materials, leaving your space move-in ready and
                    looking its best.
                </p>
            </section>

            {/* Image */}
            <section className='mb-8'>
                <img
                    src='/images/construction-cleaning.jpg'
                    alt='Post-Construction Cleaning'
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
                        <strong>Dust & Debris Removal:</strong> Specialized
                        equipment for drywall dust, wood shavings, and material
                        scraps.
                    </li>
                    <li>
                        <strong>Surface Polishing:</strong> Wipe down and polish
                        countertops, fixtures, and appliances.
                    </li>
                    <li>
                        <strong>Floor Care:</strong> Thorough mopping,
                        vacuuming, or steam-cleaning of tile, hardwood, and
                        carpets.
                    </li>
                    <li>
                        <strong>Custom Requests:</strong> We adapt to unique
                        project needs for a final, spotless touch.
                    </li>
                </ul>
                <p className='text-lg leading-relaxed'>
                    We use eco-friendly products to protect indoor air quality
                    and ensure the health of everyone who enters the space.
                    Whether it’s a new home build or a remodel, we help you
                    showcase the results beautifully.
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
                    Schedule a Post-Construction Cleaning
                </a>
            </section>
        </div>
    );
}

export default PostConstruction;
