import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Loyalty() {
    return (
        <div className='w-[70%] mx-auto space-y-16 my-16 text-gray-700'>
            <Helmet>
                {" "}
                <title>Cleaning Bee : Loyalty Program</title>
            </Helmet>{" "}
            <section className='text-center space-y-4'>
                <h1 className='text-4xl md:text-5xl font-bold text-beeBlack'>
                    The Cleaning Bee Loyalty Program
                </h1>
                <p className='text-lg md:text-xl max-w-2xl mx-auto'>
                    Earn points, enjoy exclusive perks, and get more value out
                    of your cleaning services.
                </p>
            </section>
            {/* Program Overview */}
            <section className='space-y-4 text-center'>
                <h2 className='text-3xl md:text-4xl font-bold text-beeBlack'>
                    How It Works
                </h2>
                <p className='max-w-3xl mx-auto'>
                    Our loyalty program is designed to reward you for choosing
                    Cleaning Bee for all your cleaning needs. Simply book our
                    services, earn points with every dollar you spend, and
                    unlock special discounts, add-ons, and exclusive benefits as
                    you move up through our tiers.
                </p>
            </section>
            {/* Tiers Section */}
            <section className='grid md:grid-cols-3 gap-8 text-center'>
                {/* Honeycomb Tier */}
                <div className='bg-white shadow-lg rounded p-6 space-y-4'>
                    <h3 className='text-2xl font-bold text-beeBlack'>
                        Honeycomb
                    </h3>
                    <p className='text-gray-600'>Entry Tier</p>
                    <ul className='list-disc list-inside text-left space-y-2 text-gray-700'>
                        <li>Earn 1 point per dollar spent</li>
                        <li>Occasional promo codes for discounts</li>
                        <li>Exclusive newsletter with cleaning tips</li>
                    </ul>
                    <p className='text-sm text-gray-500'>
                        Automatically enrolled after your first cleaning service
                    </p>
                </div>

                {/* Worker Bee Tier */}
                <div className='bg-white shadow-lg rounded p-6 space-y-4'>
                    <h3 className='text-2xl font-bold text-beeBlack'>
                        Worker Bee
                    </h3>
                    <p className='text-gray-600'>Mid-Level Tier</p>
                    <ul className='list-disc list-inside text-left space-y-2 text-gray-700'>
                        <li>Earn 1.25 points per dollar spent</li>
                        <li>5% discount on all standard services</li>
                        <li>
                            Free add-on service (e.g., inside oven cleaning)
                            every 6th visit
                        </li>
                        <li>Early access to seasonal promos</li>
                    </ul>
                    <p className='text-sm text-gray-500'>
                        Reach by accumulating 500 points
                    </p>
                </div>

                {/* Queen Bee Tier */}
                <div className='bg-white shadow-lg rounded p-6 space-y-4'>
                    <h3 className='text-2xl font-bold text-beeBlack'>
                        Queen Bee
                    </h3>
                    <p className='text-gray-600'>Top-Level Tier</p>
                    <ul className='list-disc list-inside text-left space-y-2 text-gray-700'>
                        <li>Earn 1.5 points per dollar spent</li>
                        <li>10% discount on all services</li>
                        <li>
                            Free premium add-on (e.g., full appliance detailing)
                            every 4th visit
                        </li>
                        <li>
                            Priority scheduling (get your preferred time slots
                            first)
                        </li>
                        <li>Complimentary deep clean upgrade once per year</li>
                    </ul>
                    <p className='text-sm text-gray-500'>
                        Reach by accumulating 1500 points
                    </p>
                </div>
            </section>
            {/* Redeeming Points Section */}
            <section className='space-y-4 text-center'>
                <h2 className='text-3xl md:text-4xl font-bold text-beeBlack'>
                    Redeeming Your Points
                </h2>
                <p className='max-w-3xl mx-auto'>
                    Convert your points into savings and perks that enhance your
                    cleaning experience. For example, redeem 100 points for $10
                    off, or 200 points for a free add-on service. The higher
                    your tier, the more generous your redemption options become.
                </p>
            </section>
            {/* Call to Action */}
            <section className='text-center space-y-4'>
                <p className='max-w-xl mx-auto'>
                    Start earning points today and watch them add up with every
                    clean. Treat yourself, your home, and your wallet to the
                    benefits of our loyalty program.
                </p>
                <Link
                    to='/contact'
                    className='inline-block bg-beeYellow text-beeBlack font-semibold py-3 px-6 rounded hover:bg-yellow-500 transition-colors text-lg'
                >
                    Contact Us to Learn More
                </Link>
            </section>
        </div>
    );
}

export default Loyalty;
