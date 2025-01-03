import React from "react";
import { Helmet } from "react-helmet-async";

function AboutUs() {
    return (
        <div className='w-[70%] mx-auto my-16 space-y-16 text-gray-700'>
            <Helmet>
                <title>Cleaning Bee | About Us</title>
                <meta
                    name='description'
                    content="Learn about Cleaning Bee's history, values, and commitment to delivering top-quality cleaning services throughout the Salt Lake Valley."
                />
            </Helmet>

            {/* Page Title & Intro */}
            <section className='text-center space-y-4'>
                <h1 className='text-4xl md:text-5xl font-bold text-beeBlack'>
                    About Cleaning Bee
                </h1>
                <p className='text-lg md:text-xl max-w-2xl mx-auto leading-relaxed'>
                    Founded on a passion for pristine spaces and exceptional
                    customer care, Cleaning Bee proudly serves the Salt Lake
                    Valley with eco-friendly solutions and a personalized touch.
                </p>
            </section>

            {/* Our Story & Mission */}
            <section className='space-y-8'>
                <h2 className='text-3xl font-bold text-beeBlack'>Our Story</h2>
                <p className='text-lg leading-relaxed'>
                    Established in 2024, Cleaning Bee began with a simple goal:
                    to help families and businesses enjoy clean, healthy
                    environments without the hassle. Our founder saw an
                    opportunity to combine reliable service, modern cleaning
                    methods, and a friendly approach that clients can
                    trust—every single time.
                </p>
                <p className='text-lg leading-relaxed'>
                    We’ve grown from a small local team to a bustling operation
                    serving diverse clients throughout the Salt Lake Valley.
                    While we’ve expanded our reach and services, we’ve never
                    lost sight of our core mission: delivering top-quality
                    cleaning with a personal touch.
                </p>
            </section>

            {/* Values & Culture */}
            <section className='space-y-8'>
                <h2 className='text-3xl font-bold text-beeBlack'>Our Values</h2>
                <ul className='list-disc list-inside space-y-3 text-lg leading-relaxed'>
                    <li>
                        <strong>Quality:</strong> We use the best equipment,
                        products, and techniques to ensure every surface shines.
                    </li>
                    <li>
                        <strong>Integrity:</strong> Whether it’s your living
                        room or office suite, we treat every space with respect
                        and care.
                    </li>
                    <li>
                        <strong>Eco-Friendliness:</strong> We prioritize
                        non-toxic products and sustainable methods to protect
                        your health and the environment.
                    </li>
                    <li>
                        <strong>Community:</strong> As a local, family-owned
                        business, we’re committed to giving back to the
                        neighborhoods we serve.
                    </li>
                </ul>
                <p className='text-lg leading-relaxed'>
                    Our team works hard, celebrates success together, and learns
                    from every challenge. By nurturing a positive,
                    growth-oriented culture, we ensure our staff approaches
                    every job with enthusiasm and attention to detail.
                </p>
            </section>

            {/* Call to Action */}
            <section className='text-center space-y-4'>
                <h2 className='text-2xl md:text-3xl font-bold text-beeBlack'>
                    Ready to Experience the Cleaning Bee Difference?
                </h2>
                <p className='text-lg leading-relaxed max-w-2xl mx-auto'>
                    From busy households to bustling offices, we’re here to
                    provide reliable, eco-friendly cleaning that supports a
                    healthier environment for everyone.
                </p>
                <a
                    href='/contact'
                    className='
            inline-block 
            bg-beeYellow text-beeBlack 
            font-semibold 
            py-3 px-6 
            rounded 
            hover:bg-yellow-500 
            transition-colors 
            text-lg
          '
                >
                    Get in Touch
                </a>
            </section>
        </div>
    );
}

export default AboutUs;
