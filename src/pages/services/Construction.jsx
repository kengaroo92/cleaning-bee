import React from "react";
import { Helmet } from "react-helmet-async";

function Construction() {
    return (
        <div className='w-[70%] mx-auto my-16 text-gray-700'>
            <Helmet>
                <title>
                    Post-Construction Cleaning Services | Cleaning Bee
                </title>
                <meta
                    name='description'
                    content='Cleaning Bee’s post-construction cleaning transforms newly built or renovated spaces in the Salt Lake Valley into move-in-ready areas. Dust, debris, and leftover materials are expertly removed, leaving a polished, welcoming environment.'
                />
                <meta
                    name='keywords'
                    content='post construction cleaning, construction cleanup, renovation cleaning, salt lake valley, cleaning bee'
                />
            </Helmet>

            <section className='space-y-6'>
                <h1 className='text-5xl font-bold text-beeBlack text-center leading-tight'>
                    Post-Construction Cleaning
                </h1>
                <p className='text-xl text-gray-700 leading-relaxed'>
                    After the builders leave, let Cleaning Bee handle the
                    finishing touches. Our post-construction cleaning services
                    ensure that dust, debris, and leftover materials are
                    removed, leaving your new or renovated space spotless and
                    ready for occupancy.
                </p>
            </section>

            <section className='mt-16'>
                <img
                    src='/images/construction-hero.jpg'
                    alt='Post-Construction Cleaning'
                    className='w-full h-64 object-cover rounded-lg shadow-lg'
                />
            </section>

            {/* Detailed Services */}
            <section className='space-y-10 mt-16'>
                <h2 className='text-4xl font-bold text-beeBlack'>
                    Our Post-Construction Offerings
                </h2>
                <ul className='list-disc list-inside space-y-3 text-xl leading-relaxed'>
                    <li>
                        <strong>Debris & Dust Removal:</strong> We clear away
                        sawdust, drywall, adhesives, and more.
                    </li>
                    <li>
                        <strong>Surface Polishing:</strong> Wipe down and polish
                        countertops, fixtures, windows, and floors to bring out
                        their best shine.
                    </li>
                    <li>
                        <strong>Final Inspection Cleans:</strong> Ensure every
                        nook and cranny is pristine before you move in or show
                        the property to clients.
                    </li>
                    <li>
                        <strong>Custom Requests:</strong> Need special focus on
                        a particular area or material? We’ll accommodate.
                    </li>
                </ul>
                <p className='text-xl text-gray-700 leading-relaxed'>
                    Our team works efficiently and safely, using eco-friendly
                    products to protect indoor air quality while delivering a
                    flawless finish.
                </p>
            </section>

            {/* CTA */}
            <section className='text-center space-y-6 mt-16'>
                <h2 className='text-3xl font-bold text-beeBlack'>
                    Make Your New Space Shine
                </h2>
                <p className='text-xl text-gray-700 leading-relaxed'>
                    Contact us to learn how our post-construction cleaning can
                    give your property the perfect finishing touch.
                </p>
                <a
                    href='/contact'
                    className='inline-block bg-beeYellow text-beeBlack font-semibold py-3 px-6 rounded hover:bg-yellow-500 transition-colors text-xl'
                >
                    Get Started
                </a>
            </section>
        </div>
    );
}

export default Construction;
