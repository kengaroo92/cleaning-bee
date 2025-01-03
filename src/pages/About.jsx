import React from "react";
import { Helmet } from "react-helmet-async";

function AboutUs() {
    return (
        <div className='w-[70%] mx-auto my-16'>
            <Helmet>
                <title>
                    About Cleaning Bee | Trusted Cleaning Services in the Salt
                    Lake Valley
                </title>
                <meta
                    name='description'
                    content='Discover the story behind Cleaning Bee, founded in 2024 to provide top-quality residential and commercial cleaning services in the Salt Lake Valley. Learn about our team culture, charitable work, and vision for expanding into Construction Bee, Lighting Bee, and more.'
                />
                <meta
                    name='keywords'
                    content='about cleaning bee, cleaning services salt lake valley, residential cleaning, commercial cleaning, janitorial, post construction cleaning, carpet cleaning, deep cleaning, eco-friendly, team culture, community involvement'
                />
            </Helmet>

            {/* Page Title & Intro */}
            <section className='space-y-6'>
                <h1 className='text-5xl font-bold text-beeBlack leading-tight text-center'>
                    About Cleaning Bee
                </h1>
                <p className='text-xl text-gray-700 leading-relaxed'>
                    Founded in 2024, Cleaning Bee is dedicated to providing
                    prompt, reliable, and high-quality cleaning services
                    throughout the Salt Lake Valley. We strive to be the go-to
                    choice for residents and businesses, delivering unmatched
                    standards of cleanliness and customer care.
                </p>
            </section>

            {/* Our Story Section */}
            <section className='space-y-10 mt-16 bg-gray-50 p-10 rounded-lg'>
                <div className='flex flex-col md:flex-row items-start md:space-x-10'>
                    <img
                        src='/images/about-illustration.jpg'
                        alt='About Cleaning Bee'
                        className='w-full md:w-1/2 h-auto rounded-lg shadow-lg mb-6 md:mb-0'
                    />
                    <div className='space-y-6'>
                        <h2 className='text-4xl font-bold text-beeBlack'>
                            Our Story
                        </h2>
                        <p className='text-xl text-gray-700 leading-relaxed'>
                            Cleaning Bee began with a simple mission in 2024:
                            create a cleaning company that responds to customers
                            immediately, treats employees like family, and grows
                            to serve the entire Salt Lake County with pride.
                        </p>
                        <p className='text-xl text-gray-700 leading-relaxed'>
                            Whether you need a one-time deep clean, regular home
                            maintenance, or specialized commercial services,
                            we’re here to help. Over time, we aim to become a
                            trusted household name, expanding beyond cleaning
                            into Construction Bee, Lighting Bee, Painting Bee,
                            and more—so our community always knows where to turn
                            for quality and care.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values & Culture */}
            <section className='space-y-10 mt-16'>
                <h2 className='text-4xl font-bold text-beeBlack text-center mb-4'>
                    Our Team & Culture
                </h2>
                <p className='text-xl text-gray-700 leading-relaxed'>
                    At Cleaning Bee, our people are the core of our success.
                    We’ve built a workplace that celebrates teamwork, personal
                    growth, and open communication. Here’s what makes working
                    with us special:
                </p>
                <ul className='list-disc list-inside space-y-3 text-xl text-gray-700 leading-relaxed'>
                    <li>
                        <strong>Fun & Bonding:</strong> Regular team outings and
                        social events build trust and camaraderie.
                    </li>
                    <li>
                        <strong>Professional Growth:</strong> Ongoing training,
                        mentorship, and clear career paths help employees excel.
                    </li>
                    <li>
                        <strong>Competitive Compensation:</strong> Fair pay and
                        benefits enable our team to focus on delivering
                        exceptional results.
                    </li>
                    <li>
                        <strong>Feeling Valued:</strong> Every idea matters. We
                        listen, learn, and celebrate our wins as one team.
                    </li>
                </ul>
                <p className='text-xl text-gray-700 leading-relaxed mt-6'>
                    By nurturing a positive, growth-oriented culture, we ensure
                    our staff approaches every job with enthusiasm, precision,
                    and care—directly benefiting you, our customer.
                </p>
            </section>

            {/* Services & Specializations */}
            <section className='space-y-10 mt-16'>
                <h2 className='text-4xl font-bold text-beeBlack text-center mb-4'>
                    Our Specializations
                </h2>
                <p className='text-xl text-gray-700 leading-relaxed mb-6'>
                    Serving the greater Salt Lake area, we offer a wide range of
                    cleaning solutions:
                </p>
                <ul className='list-disc list-inside space-y-3 text-xl text-gray-700 leading-relaxed'>
                    <li>
                        <strong>Residential Cleaning:</strong> From standard
                        cleans to deep, carpet, and custom packages designed for
                        your home.
                    </li>
                    <li>
                        <strong>Commercial & Janitorial:</strong> Offices,
                        retail spaces, and facilities stay spotless for a
                        welcoming environment.
                    </li>
                    <li>
                        <strong>Post-Construction Cleaning:</strong> We
                        transform newly built or renovated areas into
                        move-in-ready spaces.
                    </li>
                </ul>
                <p className='text-xl text-gray-700 leading-relaxed mt-6'>
                    Every service is delivered with eco-friendly products,
                    flexible scheduling, and unwavering professionalism.
                </p>
            </section>

            {/* Community Involvement */}
            <section className='space-y-10 mt-16 bg-gray-50 p-10 rounded-lg'>
                <h2 className='text-4xl font-bold text-beeBlack mb-4 text-center'>
                    Community & Beyond
                </h2>
                <p className='text-xl text-gray-700 leading-relaxed'>
                    We believe in giving back. Our employees donate time each
                    year to support local charities, strengthening our bonds
                    with the neighborhoods we serve and extending our mission of
                    care far beyond the homes and offices we clean.
                </p>
            </section>

            {/* Future Vision */}
            <section className='space-y-10 mt-16'>
                <h2 className='text-4xl font-bold text-beeBlack text-center mb-4'>
                    Looking Ahead
                </h2>
                <p className='text-xl text-gray-700 leading-relaxed'>
                    We’re just getting started. We envision a network of
                    “Bee”-branded services—Construction Bee, Lighting Bee,
                    Painting Bee, Landscaping Bee—each upholding our values of
                    quality, trust, and community engagement. Our aim is to be
                    your one-stop solution for a variety of home and commercial
                    services.
                </p>
            </section>

            {/* Call to Action */}
            <section className='space-y-6 mt-16'>
                <h2 className='text-3xl font-bold text-beeBlack text-center'>
                    Experience the Cleaning Bee Difference
                </h2>
                <p className='text-xl text-gray-700 leading-relaxed'>
                    Join us on this journey and discover how our passion,
                    professionalism, and commitment to excellence can transform
                    your space. We can’t wait to welcome you into the Cleaning
                    Bee family.
                </p>
                <div className='text-center'>
                    <a
                        href='https://clienthub.getjobber.com/booking/eec2e0b1-8545-40e9-a42f-8e2fe1debdcb'
                        target='_blank'
                        rel='noopener'
                        className='inline-block bg-beeYellow text-beeBlack font-semibold py-3 px-6 rounded hover:bg-yellow-500 transition-colors text-xl'
                    >
                        Book a Cleaning Today
                    </a>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
