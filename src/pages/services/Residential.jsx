import React from "react";
import { Helmet } from "react-helmet-async";

function Residential() {
    return (
        <div className='w-[70%] mx-auto my-16 text-gray-700'>
            <Helmet>
                <title>Residential Cleaning Services | Cleaning Bee</title>
                <meta
                    name='description'
                    content='Discover Cleaning Bee’s residential cleaning services in the Salt Lake Valley—standard cleans, deep cleans, carpet care, and custom packages. We use eco-friendly products and flexible scheduling to make your home sparkle.'
                />
                <meta
                    name='keywords'
                    content='residential cleaning, home cleaning, deep clean, carpet cleaning, eco-friendly cleaning, salt lake valley, cleaning bee'
                />
            </Helmet>

            {/* Hero Section */}
            <section className='space-y-6 text-center'>
                <h1 className='text-5xl font-bold text-beeBlack leading-tight'>
                    Residential Cleaning
                </h1>
                <p className='text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto'>
                    Enjoy a spotless, comfortable home without the hassle.
                    Cleaning Bee offers a range of residential cleaning services
                    tailored to your unique needs—ensuring your living space is
                    always fresh, healthy, and ready to welcome you.
                </p>
            </section>

            <section className='mt-16'>
                <img
                    src='/images/residential-hero.jpg'
                    alt='Residential Cleaning'
                    className='w-full h-64 object-cover rounded-lg shadow-lg'
                />
            </section>

            {/* Detailed Services */}
            <section className='space-y-10 mt-16'>
                <h2 className='text-4xl font-bold text-beeBlack'>
                    Our Residential Offerings
                </h2>
                <ul className='list-disc list-inside space-y-3 text-xl leading-relaxed'>
                    <li>
                        <strong>Standard Cleans:</strong> Keep your home tidy
                        with regular visits that cover kitchens, bathrooms,
                        dusting, and vacuuming.
                    </li>
                    <li>
                        <strong>Deep Cleans:</strong> Ideal for seasonal
                        refreshes or special occasions—extensive attention to
                        detail including baseboards, appliances, and
                        hard-to-reach areas.
                    </li>
                    <li>
                        <strong>Carpet & Upholstery Care:</strong> Remove
                        stains, odors, and allergens with our professional
                        carpet cleaning and upholstery refresh.
                    </li>
                    <li>
                        <strong>Custom Packages:</strong> Have unique needs?
                        We’ll create a personalized plan—child-friendly areas,
                        pet zones, or rotating tasks—as per your lifestyle.
                    </li>
                </ul>
                <p className='text-xl text-gray-700 leading-relaxed'>
                    We use eco-friendly, non-toxic products for a safe and
                    healthy environment. With flexible scheduling and friendly
                    staff, you can trust Cleaning Bee to maintain your home, so
                    you have more time for what matters most.
                </p>
            </section>

            {/* CTA */}
            <section className='text-center space-y-6 mt-16'>
                <h2 className='text-3xl font-bold text-beeBlack'>
                    Ready to Enjoy a Spotless Home?
                </h2>
                <p className='text-xl text-gray-700 leading-relaxed'>
                    Contact us to discuss your residential cleaning needs, or
                    explore our other services to find the perfect fit for your
                    space.
                </p>
                <a
                    href='/contact'
                    className='inline-block bg-beeYellow text-beeBlack font-semibold py-3 px-6 rounded hover:bg-yellow-500 transition-colors text-xl'
                >
                    Get a FREE Quote
                </a>
            </section>
        </div>
    );
}

export default Residential;
