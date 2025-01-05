import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Home() {
    return (
        <div className='w-full'>
            <Helmet>
                <title>
                    Cleaning Bee | Residential & Commercial Cleaning in the Salt
                    Lake Valley
                </title>
                <meta
                    name='description'
                    content='Cleaning Bee offers top-quality residential, commercial, post-construction, and janitorial cleaning services in the Salt Lake Valley. Experience eco-friendly cleaning solutions and flexible scheduling for a consistently spotless environment.'
                />
                <meta
                    name='keywords'
                    content='residential cleaning, commercial cleaning, post-construction cleaning, janitorial services, eco-friendly cleaning, Salt Lake Valley, Utah'
                />
            </Helmet>

            {/* Hero Section */}
            <section
                className='relative w-[60%] h-[60vh] mx-auto overflow-hidden'
                // ~3/5 of viewport width & height, centered horizontally via mx-auto
            >
                {/* Hero Image as a full cover background */}
                <img
                    src='/images/hero-image.jpg'
                    alt='Clean Home'
                    className='absolute inset-0 w-full h-full object-cover'
                />

                {/* Dark overlay with slight gradient */}
                <div className='absolute inset-0 bg-gradient-to-b from-black/60 to-black/40' />

                {/* Hero Text/Button */}
                <div className='relative flex flex-col justify-center items-center h-full text-center px-4'>
                    <h1 className='text-white text-4xl md:text-6xl font-bold drop-shadow-md mb-4 leading-tight'>
                        Your Salt Lake Valley Cleaning Experts
                    </h1>
                    <p className='text-white text-lg md:text-xl max-w-xl leading-relaxed mb-8'>
                        From cozy homes to busy offices, we bring eco-friendly,
                        personalized cleaning solutions so you can enjoy a
                        fresh, comfortable space—stress-free.
                    </p>
                    <a
                        href='https://clienthub.getjobber.com/booking/eec2e0b1-8545-40e9-a42f-8e2fe1debdcb'
                        target='_blank'
                        rel='noopener'
                        className='
        inline-block
        font-bold
        text-xl
        md:text-2xl
        py-3
        px-8
        rounded-full
        bg-beeBlue
        text-white
        border-2
        border-beeBlue
        transition-all
        duration-200
        ease-in-out
        shadow-sm
        hover:shadow-md
        hover:bg-white
        hover:text-beeBlue
        transform hover:-translate-y-0.5
        focus:outline-none
      '
                    >
                        Schedule A Cleaning
                    </a>
                </div>
            </section>

            {/* Services Section */}
            <section className='w-[90%] md:w-[70%] mx-auto py-16'>
                <h2 className='text-3xl md:text-4xl font-bold text-beeBlack text-center mb-8'>
                    Our Cleaning Services
                </h2>
                <p className='text-gray-700 text-lg md:text-xl leading-relaxed mb-12 text-center max-w-2xl mx-auto'>
                    At Cleaning Bee, we offer a range of professional cleaning
                    services tailored to your needs. From comprehensive
                    residential cleans to specialized commercial or
                    post-construction cleaning, our trained team is equipped to
                    keep your environment spotless.
                </p>

                <div className='grid md:grid-cols-4 gap-8'>
                    {/* Residential Cleaning */}
                    <div className='bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105'>
                        <img
                            src='/images/residential-cleaning.jpg'
                            alt='Residential Cleaning'
                            className='w-full h-64 object-cover'
                        />
                        <div className='p-6'>
                            <h3 className='text-xl font-semibold text-beeBlack mb-2'>
                                Residential Cleaning
                            </h3>
                            <p className='text-gray-700 mb-4'>
                                Enjoy a relaxing home with our customized
                                residential service. From kitchens and bathrooms
                                to living spaces, we ensure every corner is left
                                spotless.
                            </p>
                            <Link
                                to='/services#residential'
                                className='
                  inline-block
                  font-bold
                  text-lg
                  py-2
                  px-5
                  rounded-full
                  bg-beeYellow
                  text-beeBlack
                  border-2
                  border-beeYellow
                  transition-all
                  duration-200
                  ease-in-out
                  shadow-sm
                  hover:shadow-md
                  hover:bg-white
                  hover:text-beeYellow
                  transform hover:-translate-y-0.5
                  focus:outline-none
                '
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Commercial Cleaning */}
                    <div className='bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105'>
                        <img
                            src='/images/commercial-cleaning.jpg'
                            alt='Commercial Cleaning'
                            className='w-full h-64 object-cover'
                        />
                        <div className='p-6'>
                            <h3 className='text-xl font-semibold text-beeBlack mb-2'>
                                Commercial Cleaning
                            </h3>
                            <p className='text-gray-700 mb-4'>
                                Keep your office or retail space welcoming and
                                hygienic. Our commercial team works on your
                                schedule for a consistently polished image.
                            </p>
                            <Link
                                to='/services#commercial'
                                className='
                  inline-block
                  font-bold
                  text-lg
                  py-2
                  px-5
                  rounded-full
                  bg-beeYellow
                  text-beeBlack
                  border-2
                  border-beeYellow
                  transition-all
                  duration-200
                  ease-in-out
                  shadow-sm
                  hover:shadow-md
                  hover:bg-white
                  hover:text-beeYellow
                  transform hover:-translate-y-0.5
                  focus:outline-none
                '
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Post-Construction Cleaning */}
                    <div className='bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105'>
                        <img
                            src='/images/construction-cleaning.jpg'
                            alt='Post-Construction Cleaning'
                            className='w-full h-64 object-cover'
                        />
                        <div className='p-6'>
                            <h3 className='text-xl font-semibold text-beeBlack mb-2'>
                                Post-Construction Cleaning
                            </h3>
                            <p className='text-gray-700 mb-4'>
                                Renovated or newly built space? We remove dust
                                and debris so you can enjoy your updated
                                environment without the mess.
                            </p>
                            <Link
                                to='/services#construction'
                                className='
                  inline-block
                  font-bold
                  text-lg
                  py-2
                  px-5
                  rounded-full
                  bg-beeYellow
                  text-beeBlack
                  border-2
                  border-beeYellow
                  transition-all
                  duration-200
                  ease-in-out
                  shadow-sm
                  hover:shadow-md
                  hover:bg-white
                  hover:text-beeYellow
                  transform hover:-translate-y-0.5
                  focus:outline-none
                '
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Janitorial Services */}
                    <div className='bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105'>
                        <img
                            src='/images/janitorial-cleaning.jpg'
                            alt='Janitorial Services'
                            className='w-full h-64 object-cover'
                        />
                        <div className='p-6'>
                            <h3 className='text-xl font-semibold text-beeBlack mb-2'>
                                Janitorial Services
                            </h3>
                            <p className='text-gray-700 mb-4'>
                                Keep offices, schools, and facilities
                                consistently clean. Our janitorial services
                                ensure everyday tidiness and organization.
                            </p>
                            <Link
                                to='/services#janitorial'
                                className='
                  inline-block
                  font-bold
                  text-lg
                  py-2
                  px-5
                  rounded-full
                  bg-beeYellow
                  text-beeBlack
                  border-2
                  border-beeYellow
                  transition-all
                  duration-200
                  ease-in-out
                  shadow-sm
                  hover:shadow-md
                  hover:bg-white
                  hover:text-beeYellow
                  transform hover:-translate-y-0.5
                  focus:outline-none
                '
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className='w-[90%] md:w-[70%] mx-auto mb-16'>
                <h2 className='text-3xl md:text-4xl font-bold text-beeBlack text-center mb-8'>
                    Why Choose Cleaning Bee?
                </h2>
                <p className='text-gray-700 text-lg md:text-xl leading-relaxed mb-8 text-center max-w-3xl mx-auto'>
                    We go above and beyond to exceed customer expectations. With
                    eco-friendly products, flexible scheduling, and a dedicated
                    local team, trust Cleaning Bee for remarkable results—every
                    time.
                </p>

                <div className='grid gap-8 md:grid-cols-[3fr_1fr]'>
                    {/* Left Column */}
                    <div className='space-y-6 text-gray-700 text-lg leading-relaxed'>
                        <p>
                            Our priority is delivering top-quality service with
                            a personal touch. Each member of our trained team
                            uses the best equipment and thorough techniques to
                            ensure your home or office truly sparkles.
                        </p>
                        <ul className='list-disc list-inside space-y-2'>
                            <li>
                                <strong>
                                    Reliable &amp; Trustworthy Staff:
                                </strong>{" "}
                                Vetted cleaners provide peace of mind.
                            </li>
                            <li>
                                <strong>Flexible Scheduling:</strong> We work
                                around your calendar for maximum convenience.
                            </li>
                            <li>
                                <strong>Eco-Friendly Products:</strong> Safe for
                                your family, pets, and the environment.
                            </li>
                            <li>
                                <strong>
                                    Customer Satisfaction Guarantee:
                                </strong>{" "}
                                We’re not happy unless you’re delighted.
                            </li>
                        </ul>
                        <p>
                            Ready to enjoy a cleaner, healthier space? Reach out
                            today and discover how Cleaning Bee can transform
                            your home or business.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className='flex flex-col items-end space-y-4'>
                        <div className='bg-beeYellow p-6 rounded w-full shadow-sm'>
                            <h3 className='text-2xl font-bold text-beeBlack text-center'>
                                Why Us?
                            </h3>
                        </div>
                        <div className='bg-white shadow-lg rounded p-6 w-full'>
                            <ul className='space-y-3 text-gray-700 text-lg leading-relaxed'>
                                <li className='flex items-start space-x-2'>
                                    <span className='text-beeYellow'>✔</span>
                                    <span>
                                        Free Quotes, Competitive Pricing
                                    </span>
                                </li>
                                <li className='flex items-start space-x-2'>
                                    <span className='text-beeYellow'>✔</span>
                                    <span>
                                        Local, Family-Owned &amp; Operated
                                    </span>
                                </li>
                                <li className='flex items-start space-x-2'>
                                    <span className='text-beeYellow'>✔</span>
                                    <span>
                                        Experienced &amp; Friendly Staff
                                    </span>
                                </li>
                                <li className='flex items-start space-x-2'>
                                    <span className='text-beeYellow'>✔</span>
                                    <span>Eco-Friendly Cleaning Products</span>
                                </li>
                                <li className='flex items-start space-x-2'>
                                    <span className='text-beeYellow'>✔</span>
                                    <span>Customized Cleaning Solutions</span>
                                </li>
                                <li className='flex items-start space-x-2'>
                                    <span className='text-beeYellow'>✔</span>
                                    <span>Flexible Scheduling</span>
                                </li>
                                <li className='flex items-start space-x-2'>
                                    <span className='text-beeYellow'>✔</span>
                                    <span>Dedicated Customer Support</span>
                                </li>
                                <li className='flex items-start space-x-2'>
                                    <span className='text-beeYellow'>✔</span>
                                    <span>
                                        Customer Satisfaction Guaranteed
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
