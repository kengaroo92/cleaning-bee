import React from "react";
import { Helmet } from "react-helmet-async";
import CallButton from "../components/CallButton";

function Pricing() {
    return (
        <div className='w-full bg-gray-300'>
            <Helmet>
                <title>Cleaning Bee | Pricing</title>
                <meta
                    name='description'
                    content='Affordable and flexible pricing plans for residential, commercial, and post-construction cleaning in Salt Lake Valley. Contact us today for a custom quote!'
                />
                {/* JSON-LD Structured Data */}
                <script type='application/ld+json'>
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Cleaning Bee Pricing",
                        description:
                            "Affordable and flexible pricing plans for residential, commercial, and post-construction cleaning services in Salt Lake Valley.",
                        provider: {
                            "@type": "LocalBusiness",
                            name: "Cleaning Bee",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "6619 W Rosarita Ct",
                                addressLocality: "Herriman",
                                addressRegion: "UT",
                                postalCode: "84096",
                                addressCountry: "US",
                            },
                            telephone: "+18017122639",
                        },
                        offers: [
                            {
                                "@type": "Offer",
                                name: "Basic Plan",
                                price: "99",
                                priceCurrency: "USD",
                            },
                            {
                                "@type": "Offer",
                                name: "Standard Plan",
                                price: "199",
                                priceCurrency: "USD",
                            },
                            {
                                "@type": "Offer",
                                name: "Premium Plan",
                                price: "299",
                                priceCurrency: "USD",
                            },
                        ],
                    })}
                </script>
            </Helmet>

            {/* Page Title Section */}
            <section className='text-center py-16 bg-gray-200'>
                <h1 className='text-5xl font-extrabold text-beeBlack mb-4'>
                    Transparent Pricing, Flexible Plans
                </h1>
                <p className='text-lg md:text-xl max-w-2xl mx-auto text-gray-700'>
                    Choose the perfect cleaning plan for your home or business
                    with no hidden costs. Customized options are available to
                    suit your unique needs.
                </p>
            </section>

            {/* Pricing Plans Section */}
            <section className='py-16 w-[90%] md:w-[70%] mx-auto grid md:grid-cols-3 gap-8'>
                {[
                    {
                        title: "Basic",
                        description: "Light maintenance for smaller spaces.",
                        price: "$99+",
                        details: [
                            "Surface cleaning & dusting",
                            "Vacuuming & sweeping",
                            "Kitchen & bathroom touch-ups",
                            "Trash Removal",
                        ],
                        badge: "Most Affordable",
                    },
                    {
                        title: "Standard",
                        description:
                            "Comprehensive cleaning for regular upkeep.",
                        price: "$199+",
                        details: [
                            "Everything in Basic +",
                            "Deep kitchen & bathroom cleaning",
                            "Floor mopping & vacuuming",
                            "Bedroom linen changes",
                        ],
                        badge: "Popular Choice",
                    },
                    {
                        title: "Premium",
                        description:
                            "Top-to-bottom cleaning tailored for large spaces.",
                        price: "$299+",
                        details: [
                            "Everything in Standard +",
                            "Inside appliances & cabinets",
                            "Window sills & baseboards",
                            "Customized cleaning requests",
                        ],
                        badge: "Best Value",
                    },
                ].map((plan, index) => (
                    <div
                        key={index}
                        className='relative bg-white shadow-lg rounded-lg overflow-hidden text-center p-8 space-y-6 hover:shadow-xl transition-shadow'
                    >
                        {/* Badge */}
                        <div className='absolute top-0 right-0 bg-beeYellow text-beeBlack px-4 py-1 text-sm font-bold rounded-bl'>
                            {plan.badge}
                        </div>
                        <h2 className='text-3xl font-bold text-beeBlack'>
                            {plan.title}
                        </h2>
                        <p className='text-gray-600'>{plan.description}</p>
                        <div className='text-4xl font-bold text-beeBlack'>
                            {plan.price}
                        </div>
                        <p className='text-sm text-gray-600'>per visit</p>
                        <ul
                            className='list-disc list-inside text-left space-y-2 text-gray-700'
                            aria-label={`Details for the ${plan.title} plan`}
                        >
                            {plan.details.map((detail, idx) => (
                                <li key={idx}>{detail}</li>
                            ))}
                        </ul>
                        <div className='mt-4'>
                            <CallButton
                                label={`Call us now to discuss the ${plan.title} plan`}
                                aria-label={`Call us to book the ${plan.title} plan`}
                            />
                        </div>
                    </div>
                ))}
            </section>

            {/* Add-Ons Section */}
            <section className='py-16 bg-gray-200'>
                <div className='w-[90%] md:w-[70%] mx-auto text-center space-y-6'>
                    <h2 className='text-4xl font-bold text-beeBlack'>
                        Enhance Your Cleaning Experience
                    </h2>
                    <p className='text-lg text-gray-700'>
                        Add-on services available for an additional fee:
                    </p>
                    <ul
                        className='list-disc list-inside text-left text-lg space-y-4 mx-auto max-w-xl text-gray-700'
                        aria-label='Add-on cleaning services'
                    >
                        <li>Window cleaning</li>
                        <li>Deep appliance cleaning (oven, refrigerator)</li>
                        <li>Carpet shampooing & stain removal</li>
                        <li>Move-in/Move-out cleaning</li>
                    </ul>
                    <div className='mt-6'>
                        <CallButton
                            label='Call to Add Services'
                            aria-label='Call us to add services'
                        />
                    </div>
                </div>
            </section>

            {/* Flexible Options Section */}
            <section className='py-16 bg-gray-300'>
                <div className='w-[90%] md:w-[70%] mx-auto text-center space-y-6'>
                    <h2 className='text-4xl font-bold text-beeBlack'>
                        Flexible Scheduling & Discounts
                    </h2>
                    <p className='text-lg text-gray-700'>
                        Save more with regular cleaning plans:
                    </p>
                    <ul
                        className='list-disc list-inside text-left text-lg space-y-4 mx-auto max-w-xl text-gray-700'
                        aria-label='Flexible scheduling options and discounts'
                    >
                        <li>
                            <strong>Weekly Cleanings:</strong> 10% discount
                        </li>
                        <li>
                            <strong>Bi-Weekly Cleanings:</strong> 5% discount
                        </li>
                        <li>
                            <strong>Custom Plans:</strong> Tailored pricing
                            based on your unique needs
                        </li>
                    </ul>
                </div>
            </section>

            {/* FAQ Section */}
            <section className='py-16 bg-gray-200'>
                <div className='w-[90%] md:w-[70%] mx-auto text-center space-y-6'>
                    <h2 className='text-4xl font-bold text-beeBlack'>FAQs</h2>
                    <div className='text-left space-y-6'>
                        {[
                            {
                                question:
                                    "Are your cleaning products eco-friendly?",
                                answer: "Yes, we use eco-friendly cleaning products that are safe for your family, pets, and the environment.",
                            },
                            {
                                question:
                                    "Do you offer one-time cleaning services?",
                                answer: "Absolutely! We provide one-time cleanings as well as regular plans.",
                            },
                            {
                                question:
                                    "What if I need to reschedule my cleaning?",
                                answer: "No problem! Just contact us at least 24 hours in advance, and we’ll arrange a new time that works for you.",
                            },
                        ].map((faq, idx) => (
                            <div
                                key={idx}
                                className='space-y-2 border-l-4 border-beeYellow pl-4'
                            >
                                <h3 className='text-xl font-semibold text-beeBlack'>
                                    {faq.question}
                                </h3>
                                <p className='text-lg text-gray-700'>
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Quote Section */}
            <section className='py-16 bg-gray-200 text-center'>
                <p className='max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed'>
                    Not sure which plan is right for you? Contact us for a free
                    consultation and custom quote tailored to your space and
                    needs.
                </p>
                <div className='mt-6'>
                    <CallButton
                        label='Get a Free Custom Quote'
                        aria-label='Contact us for a free custom quote'
                    />
                </div>
            </section>
        </div>
    );
}

export default Pricing;
