import React from "react";
import { Helmet } from "react-helmet-async";
import CallButton from "../components/CallButton";
import { FaLeaf, FaStar, FaHandsHelping, FaUsers } from "react-icons/fa";

function AboutUs() {
    return (
        <div className='w-full bg-gray-300'>
            <Helmet>
                <title>Cleaning Bee | About Us</title>
                <meta
                    name='description'
                    content="Discover Cleaning Bee's history, mission, and values. Providing exceptional, eco-friendly cleaning services to the Salt Lake Valley since 2024."
                />
                {/* Schema Markup */}
                <script type='application/ld+json'>
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "Cleaning Bee",
                        description:
                            "Providing exceptional, eco-friendly cleaning services to the Salt Lake Valley since 2024.",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "6619 W Rosarita Ct",
                            addressLocality: "Herriman",
                            addressRegion: "UT",
                            postalCode: "84096",
                            addressCountry: "US",
                        },
                        telephone: "+18017122639",
                        url: "https://cleaningbeeutah.com",
                        founder: {
                            "@type": "Person",
                            name: "Kenan Bjelosevic",
                        },
                        foundingDate: "2024",
                        areaServed: "Salt Lake Valley, Utah",
                        keywords: [
                            "cleaning services",
                            "eco-friendly cleaning",
                            "residential cleaning",
                            "commercial cleaning",
                            "Salt Lake Valley",
                        ],
                    })}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className='text-center py-16 bg-gray-200'>
                <h1 className='text-5xl font-extrabold text-beeBlack mb-6'>
                    About Cleaning Bee
                </h1>
                <p className='text-lg md:text-xl max-w-2xl mx-auto text-gray-700 leading-relaxed'>
                    Founded with a passion for creating clean, healthy spaces,
                    Cleaning Bee proudly serves the Salt Lake Valley with
                    eco-friendly solutions and unparalleled customer care.
                </p>
            </section>

            {/* Our Story Section */}
            <section className='py-16 w-[90%] md:w-[70%] mx-auto space-y-8'>
                <h2 className='text-3xl font-bold text-beeBlack'>Our Story</h2>
                <p className='text-lg text-gray-700 leading-relaxed'>
                    Cleaning Bee was established in 2024 by Kenan Bjelosevic,
                    driven by a desire to offer exceptional cleaning services
                    with a personal touch. What started as a small operation has
                    grown into a trusted local business, serving homes and
                    businesses throughout the Salt Lake Valley.
                </p>
                <p className='text-lg text-gray-700 leading-relaxed'>
                    From eco-friendly products to custom cleaning plans, we
                    strive to deliver spotless results while prioritizing the
                    health and safety of our clients and the environment. Every
                    service reflects our commitment to quality, integrity, and
                    community.
                </p>
            </section>

            {/* Our Values Section */}
            <section className='py-16 bg-gray-200'>
                <div className='w-[90%] md:w-[70%] mx-auto space-y-8'>
                    <h2 className='text-3xl font-bold text-beeBlack'>
                        Our Values
                    </h2>
                    <ul
                        className='grid md:grid-cols-2 gap-8'
                        aria-label='Cleaning Bee core values'
                    >
                        <li className='flex items-center space-x-4'>
                            <FaStar size={24} className='text-beeYellow' />
                            <p className='text-lg text-gray-700'>
                                <strong>Quality:</strong> Delivering meticulous
                                cleaning results through top-notch equipment,
                                products, and techniques.
                            </p>
                        </li>
                        <li className='flex items-center space-x-4'>
                            <FaHandsHelping
                                size={24}
                                className='text-beeYellow'
                            />
                            <p className='text-lg text-gray-700'>
                                <strong>Integrity:</strong> Treating every
                                client’s space with respect, care, and
                                professionalism.
                            </p>
                        </li>
                        <li className='flex items-center space-x-4'>
                            <FaLeaf size={24} className='text-beeYellow' />
                            <p className='text-lg text-gray-700'>
                                <strong>Eco-Friendliness:</strong> Using
                                sustainable and non-toxic products to protect
                                your health and the environment.
                            </p>
                        </li>
                        <li className='flex items-center space-x-4'>
                            <FaUsers size={24} className='text-beeYellow' />
                            <p className='text-lg text-gray-700'>
                                <strong>Community Commitment:</strong> Giving
                                back to the neighborhoods we proudly serve as a
                                family-owned business.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Meet the Founder Section */}
            <section className='py-16 w-[90%] md:w-[70%] mx-auto space-y-8'>
                <h2 className='text-3xl font-bold text-beeBlack'>
                    Meet the Founder
                </h2>
                <p className='text-lg text-gray-700 leading-relaxed'>
                    Hi! I'm <strong>Kenan Bjelosevic</strong>, the founder of
                    Cleaning Bee. With a background in customer service and a
                    passion for creating clean, inviting spaces, I started this
                    company to bring eco-friendly cleaning solutions to homes
                    and businesses in the Salt Lake Valley. My goal has always
                    been simple: to make life easier for our clients while
                    prioritizing sustainability and quality.
                </p>
            </section>

            {/* Testimonials Placeholder */}
            <section className='py-16 bg-gray-200 text-center'>
                <h2 className='text-4xl font-bold text-beeBlack mb-6'>
                    What Our Clients Say
                </h2>
                <p className='text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed'>
                    "We loved how clean our home felt after Cleaning Bee worked
                    their magic! Highly recommend." <br />
                    <span className='font-semibold'>- Happy Client</span>
                </p>
            </section>

            {/* Call to Action */}
            <section className='py-16 text-center'>
                <h2 className='text-4xl font-bold text-beeBlack mb-6'>
                    Experience the Cleaning Bee Difference
                </h2>
                <p className='text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed'>
                    Whether you need a one-time cleaning or regular service,
                    we’re here to create a healthier, happier environment for
                    you and your loved ones.
                </p>
                <div className='mt-6'>
                    <CallButton label='Contact Us Today' />
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
