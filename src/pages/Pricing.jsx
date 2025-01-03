import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Pricing() {
    return (
        <div className='w-[70%] mx-auto space-y-16 my-16 text-gray-700'>
            <Helmet>
                {" "}
                <title>Cleaning Bee : Pricing</title>
            </Helmet>{" "}
            <section className='text-center space-y-4'>
                <h1 className='text-4xl md:text-5xl font-bold text-beeBlack'>
                    Our Pricing
                </h1>
                <p className='text-lg md:text-xl max-w-2xl mx-auto'>
                    Choose from our flexible plans tailored to fit your cleaning
                    needs.
                </p>
            </section>
            {/* Pricing Plans */}
            <section className='grid md:grid-cols-3 gap-8'>
                {/* Basic Plan */}
                <div className='bg-white shadow-lg rounded overflow-hidden p-6 text-center space-y-4'>
                    <h2 className='text-2xl font-bold text-beeBlack'>Basic</h2>
                    <p className='text-gray-600'>
                        Ideal for smaller spaces and light maintenance
                    </p>
                    <div className='text-4xl font-bold text-beeBlack'>$99+</div>
                    <p className='text-sm text-gray-600'>per visit</p>
                    <ul className='list-disc list-inside text-left space-y-2 text-gray-700'>
                        <li>General surface cleaning</li>
                        <li>Vacuuming & Dusting</li>
                        <li>Kitchen & Bath touch-up</li>
                    </ul>
                    <Link
                        to='/contact'
                        className='inline-block bg-beeYellow text-beeBlack font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                    >
                        Get Started
                    </Link>
                </div>

                {/* Standard Plan */}
                <div className='bg-white shadow-lg rounded overflow-hidden p-6 text-center space-y-4'>
                    <h2 className='text-2xl font-bold text-beeBlack'>
                        Standard
                    </h2>
                    <p className='text-gray-600'>
                        Perfect for regular upkeep and moderate cleaning needs
                    </p>
                    <div className='text-4xl font-bold text-beeBlack'>
                        $199+
                    </div>
                    <p className='text-sm text-gray-600'>per visit</p>
                    <ul className='list-disc list-inside text-left space-y-2 text-gray-700'>
                        <li>Everything in Basic +</li>
                        <li>Deep kitchen & bath clean</li>
                        <li>Floor mopping & vacuuming</li>
                        <li>Bedroom linen changes</li>
                    </ul>
                    <Link
                        to='/contact'
                        className='inline-block bg-beeYellow text-beeBlack font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                    >
                        Get Started
                    </Link>
                </div>

                {/* Premium Plan */}
                <div className='bg-white shadow-lg rounded overflow-hidden p-6 text-center space-y-4'>
                    <h2 className='text-2xl font-bold text-beeBlack'>
                        Premium
                    </h2>
                    <p className='text-gray-600'>
                        For comprehensive, top-to-bottom cleaning solutions
                    </p>
                    <div className='text-4xl font-bold text-beeBlack'>
                        $299+
                    </div>
                    <p className='text-sm text-gray-600'>per visit</p>
                    <ul className='list-disc list-inside text-left space-y-2 text-gray-700'>
                        <li>Everything in Standard +</li>
                        <li>Inside appliances & cabinets</li>
                        <li>Window sills & baseboards</li>
                        <li>Customized cleaning requests</li>
                    </ul>
                    <Link
                        to='/contact'
                        className='inline-block bg-beeYellow text-beeBlack font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                    >
                        Get Started
                    </Link>
                </div>
            </section>
            {/* Additional Information */}
            <section className='space-y-4 text-center'>
                <p className='max-w-3xl mx-auto'>
                    Not sure which plan is right for you? Contact us to discuss
                    your specific needs, and we’ll help you find the perfect
                    cleaning solution. We also offer add-on services and
                    flexible scheduling to ensure you get exactly what you want,
                    when you need it.
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

export default Pricing;
