import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Services() {
    return (
        <div className='w-[70%] mx-auto space-y-16 my-16 text-gray-700'>
            <Helmet>
                <title>Cleaning Bee : Services</title>
            </Helmet>
            <section className='text-center space-y-4'>
                <h1 className='text-4xl md:text-5xl font-bold text-beeBlack'>
                    Our Services
                </h1>
                <p className='text-lg md:text-xl max-w-2xl mx-auto'>
                    From routine clean-ups to deep transformations, our tailored
                    services ensure your space shines.
                </p>
            </section>
            {/* Services Grid */}
            <section className='grid md:grid-cols-3 gap-8'>
                {/* Standard Cleaning */}
                <div className='bg-white shadow-lg rounded overflow-hidden p-6 text-center space-y-4'>
                    <img
                        src='/images/standard-cleaning.jpg'
                        alt='Standard Cleaning'
                        className='w-full h-48 object-cover rounded'
                    />
                    <h2 className='text-2xl font-bold text-beeBlack'>
                        Standard Cleaning
                    </h2>
                    <p>
                        A routine clean to maintain a tidy environment. Perfect
                        for regularly keeping your home or office fresh.
                    </p>
                    <Link
                        to='/contact'
                        className='inline-block bg-beeYellow text-beeBlack font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                    >
                        Book Now
                    </Link>
                </div>

                {/* Deep Cleaning */}
                <div className='bg-white shadow-lg rounded overflow-hidden p-6 text-center space-y-4'>
                    <img
                        src='/images/deep-cleaning-service.jpg'
                        alt='Deep Cleaning'
                        className='w-full h-48 object-cover rounded'
                    />
                    <h2 className='text-2xl font-bold text-beeBlack'>
                        Deep Cleaning
                    </h2>
                    <p>
                        A thorough top-to-bottom clean, targeting hidden dirt
                        and grime. Ideal for seasonal refreshes or pre/post
                        event cleaning.
                    </p>
                    <Link
                        to='/contact'
                        className='inline-block bg-beeYellow text-beeBlack font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                    >
                        Book Now
                    </Link>
                </div>

                {/* Premium Cleaning */}
                <div className='bg-white shadow-lg rounded overflow-hidden p-6 text-center space-y-4'>
                    <img
                        src='/images/premium-cleaning.jpg'
                        alt='Premium Cleaning'
                        className='w-full h-48 object-cover rounded'
                    />
                    <h2 className='text-2xl font-bold text-beeBlack'>
                        Premium Cleaning
                    </h2>
                    <p>
                        Our most comprehensive package, including appliance
                        interiors, baseboards, windowsills, and more for a
                        pristine finish.
                    </p>
                    <Link
                        to='/contact'
                        className='inline-block bg-beeYellow text-beeBlack font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                    >
                        Book Now
                    </Link>
                </div>

                {/* Window Cleaning */}
                <div className='bg-white shadow-lg rounded overflow-hidden p-6 text-center space-y-4'>
                    <img
                        src='/images/window-cleaning.jpg'
                        alt='Window Cleaning'
                        className='w-full h-48 object-cover rounded'
                    />
                    <h2 className='text-2xl font-bold text-beeBlack'>
                        Window Cleaning
                    </h2>
                    <p>
                        Sparkling windows that let the light in. We ensure
                        streak-free, crystal-clear results for your home or
                        office.
                    </p>
                    <Link
                        to='/contact'
                        className='inline-block bg-beeYellow text-beeBlack font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                    >
                        Book Now
                    </Link>
                </div>

                {/* Carpet Cleaning */}
                <div className='bg-white shadow-lg rounded overflow-hidden p-6 text-center space-y-4'>
                    <img
                        src='/images/carpet-cleaning.jpg'
                        alt='Carpet Cleaning'
                        className='w-full h-48 object-cover rounded'
                    />
                    <h2 className='text-2xl font-bold text-beeBlack'>
                        Carpet Cleaning
                    </h2>
                    <p>
                        Revive your carpets with deep extraction methods that
                        remove stains, allergens, and odors for a like-new feel.
                    </p>
                    <Link
                        to='/contact'
                        className='inline-block bg-beeYellow text-beeBlack font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                    >
                        Book Now
                    </Link>
                </div>

                {/* Power Washing */}
                <div className='bg-white shadow-lg rounded overflow-hidden p-6 text-center space-y-4'>
                    <img
                        src='/images/power-washing.jpg'
                        alt='Power Washing'
                        className='w-full h-48 object-cover rounded'
                    />
                    <h2 className='text-2xl font-bold text-beeBlack'>
                        Power Washing
                    </h2>
                    <p>
                        Restore driveways, patios, and exteriors with
                        high-pressure cleaning that removes tough grime and
                        buildup.
                    </p>
                    <Link
                        to='/contact'
                        className='inline-block bg-beeYellow text-beeBlack font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                    >
                        Book Now
                    </Link>
                </div>
            </section>
            {/* Additional Info */}
            <section className='text-center space-y-4'>
                <p className='max-w-3xl mx-auto'>
                    Don’t see exactly what you’re looking for? Reach out to us,
                    and we’ll create a custom cleaning plan to suit your unique
                    needs.
                </p>
                <Link
                    to='/contact'
                    className='inline-block bg-beeYellow text-beeBlack font-semibold py-3 px-6 rounded hover:bg-yellow-500 transition-colors text-lg'
                >
                    Contact Us for a Custom Quote
                </Link>
            </section>
        </div>
    );
}

export default Services;
