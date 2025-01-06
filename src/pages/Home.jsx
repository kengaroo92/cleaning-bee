import React from "react";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import CallButton from "../components/CallButton";

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
                    content='Top-quality residential, commercial, and post-construction cleaning in Salt Lake Valley. Eco-friendly solutions tailored for homes and businesses.'
                />
                <meta
                    name='keywords'
                    content='residential cleaning, commercial cleaning, post-construction cleaning, janitorial services, eco-friendly cleaning, Salt Lake Valley, Utah'
                />
                <link rel='canonical' href='https://cleaningbeeutah.com/' />
                <link
                    rel='preload'
                    as='image'
                    href='/images/webp/hero-image.webp'
                    type='image/webp'
                />
                <link
                    rel='preload'
                    href='/images/webp/commercial-cleaning.webp'
                    as='image'
                    type='image/webp'
                />
                <link
                    rel='preload'
                    href='/images/webp/construction-cleaning.webp'
                    as='image'
                    type='image/webp'
                />
                <link
                    rel='preload'
                    href='/images/webp/residential-cleaning.webp'
                    as='image'
                    type='image/webp'
                />
                {/* Schema Markup */}
                <script type='application/ld+json'>
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "Cleaning Bee",
                        image: "https://cleaningbeeutah.com/images/hero-image.jpg",
                        url: "https://cleaningbeeutah.com",
                        telephone: "+18017122639",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "6619 W Rosarita Ct",
                            addressLocality: "Herriman",
                            addressRegion: "UT",
                            postalCode: "84096",
                            addressCountry: "US",
                        },
                        description:
                            "Residential, commercial, and post-construction cleaning services in the Salt Lake Valley. Eco-friendly solutions tailored to your needs.",
                        openingHours: "Mo-Fr 07:00-20:00",
                        priceRange: "$$",
                    })}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section
                className='relative w-full h-[100vh] overflow-hidden flex items-center justify-center'
                role='banner'
            >
                {/* Hero Image */}
                <img
                    src='/images/webp/hero-image.webp'
                    alt='Premium Cleaning Service in Salt Lake Valley'
                    loading='lazy'
                    className='absolute inset-0 w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-b from-black/80 to-transparent' />
                <div className='relative z-10 text-center px-6'>
                    <h1 className='text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg'>
                        Premium Cleaning Services in Salt Lake Valley
                    </h1>
                    <p className='text-white text-lg md:text-2xl mt-4 max-w-2xl mx-auto leading-relaxed'>
                        Eco-friendly cleaning solutions for homes, offices, and
                        post-construction projects.
                    </p>
                    <div className='mt-8'>
                        <CallButton />
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section with Carousel */}
            <section className='w-[90%] md:w-[70%] mx-auto py-16'>
                <h2 className='text-4xl font-bold text-beeBlack text-center mb-8'>
                    Why Choose Cleaning Bee?
                </h2>
                <p className='text-gray-700 text-lg md:text-xl leading-relaxed mb-12 text-center max-w-3xl mx-auto'>
                    We go above and beyond to exceed customer expectations. With
                    eco-friendly products, flexible scheduling, and a dedicated
                    local team, trust Cleaning Bee for remarkable results—every
                    time.
                </p>

                <div className='grid md:grid-cols-2 gap-12'>
                    {/* Left Column */}
                    <div>
                        <ul
                            aria-label='Features of Cleaning Bee Services'
                            className='space-y-4 text-lg text-gray-700'
                        >
                            <li>
                                <span className='font-semibold'>
                                    Reliable & Trustworthy Staff:
                                </span>{" "}
                                Vetted cleaners provide peace of mind.
                            </li>
                            <li>
                                <span className='font-semibold'>
                                    Flexible Scheduling:
                                </span>{" "}
                                We work around your calendar.
                            </li>
                            <li>
                                <span className='font-semibold'>
                                    Eco-Friendly Products:
                                </span>{" "}
                                Safe for your family, pets, and the environment.
                            </li>
                            <li>
                                <span className='font-semibold'>
                                    Satisfaction Guarantee:
                                </span>{" "}
                                We’re not happy unless you’re delighted.
                            </li>
                        </ul>
                    </div>

                    {/* Right Column - Carousel */}
                    <div className='relative hidden md:block'>
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            autoplay={{ delay: 3000 }}
                            loop={true}
                            aria-label='Cleaning Bee Services Images'
                            className='w-full h-64'
                        >
                            <SwiperSlide>
                                <img
                                    src='/images/webp/commercial-cleaning.webp'
                                    alt='Commercial Cleaning Service'
                                    loading='lazy'
                                    className='w-full h-full object-cover rounded-lg shadow-md'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src='/images/webp/construction-cleaning.webp'
                                    alt='Post-Construction Cleaning Service'
                                    loading='lazy'
                                    className='w-full h-full object-cover rounded-lg shadow-md'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src='/images/webp/residential-cleaning.webp'
                                    alt='Residential Cleaning Service'
                                    loading='lazy'
                                    className='w-full h-full object-cover rounded-lg shadow-md'
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
