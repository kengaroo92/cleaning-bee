import React from "react";
import { Helmet } from "react-helmet-async";

function Commercial() {
    return (
        <div className='w-[70%] mx-auto my-16 text-gray-700'>
            <Helmet>
                <title>
                    Commercial Cleaning & Janitorial Services | Cleaning Bee
                </title>
                <meta
                    name='description'
                    content='Cleaning Bee provides professional commercial cleaning and janitorial services in the Salt Lake Valley—offices, retail stores, and facilities. Flexible scheduling, eco-friendly products, and reliable staff ensure a spotless, welcoming environment for your customers and employees.'
                />
                <meta
                    name='keywords'
                    content='commercial cleaning, janitorial services, office cleaning, retail cleaning, eco-friendly, salt lake valley, cleaning bee'
                />
            </Helmet>

            {/* Hero Section */}
            <section className='space-y-6'>
                <h1 className='text-5xl font-bold text-beeBlack text-center leading-tight'>
                    Commercial & Janitorial Services
                </h1>
                <p className='text-xl text-gray-700 leading-relaxed'>
                    Make a lasting impression on clients and employees alike.
                    Cleaning Bee offers comprehensive commercial cleaning and
                    janitorial services to keep your workspace polished,
                    professional, and welcoming.
                </p>
            </section>

            <section className='mt-16'>
                <img
                    src='/images/commercial-hero.jpg'
                    alt='Commercial Cleaning'
                    className='w-full h-64 object-cover rounded-lg shadow-lg'
                />
            </section>

            {/* Detailed Services */}
            <section className='space-y-10 mt-16'>
                <h2 className='text-4xl font-bold text-beeBlack'>
                    Our Commercial Offerings
                </h2>
                <ul className='list-disc list-inside space-y-3 text-xl leading-relaxed'>
                    <li>
                        <strong>Office Cleans:</strong> Ensure a productive,
                        hygienic environment with routine dusting, vacuuming,
                        sanitizing desks, and breakrooms.
                    </li>
                    <li>
                        <strong>Retail & Showroom Maintenance:</strong> Keep
                        floors shining, windows streak-free, and displays
                        flawless for a positive customer experience.
                    </li>
                    <li>
                        <strong>Janitorial Services:</strong> Regular upkeep,
                        including trash removal, restroom sanitation, and
                        restocking supplies.
                    </li>
                    <li>
                        <strong>Custom Schedules:</strong> We’ll work around
                        your hours—daytime, evening, or weekend—to minimize
                        disruptions.
                    </li>
                </ul>
                <p className='text-xl text-gray-700 leading-relaxed'>
                    With eco-friendly cleaning solutions, trained staff, and
                    flexible plans, Cleaning Bee ensures your commercial space
                    remains consistently clean and inviting.
                </p>
            </section>

            {/* CTA */}
            <section className='text-center space-y-6 mt-16'>
                <h2 className='text-3xl font-bold text-beeBlack'>
                    Elevate Your Business Environment
                </h2>
                <p className='text-xl text-gray-700 leading-relaxed'>
                    Contact us today to discuss your commercial cleaning needs,
                    or explore our residential and post-construction services to
                    find the ideal solution for your property.
                </p>
                <a
                    href='/contact'
                    className='inline-block bg-beeYellow text-beeBlack font-semibold py-3 px-6 rounded hover:bg-yellow-500 transition-colors text-xl'
                >
                    Request a Quote
                </a>
            </section>
        </div>
    );
}

export default Commercial;
