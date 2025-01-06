import React from "react";
import { Helmet } from "react-helmet-async";
import CallButton from "../components/CallButton";

function Services() {
    return (
        <div className='w-full'>
            <Helmet>
                <title>Cleaning Bee | Our Services</title>
                <meta
                    name='description'
                    content='Explore Cleaning Bee’s core service categories: Residential, Commercial, Post-Construction, and Janitorial. Learn about specialized solutions for each category and find the perfect cleaning plan for your needs.'
                />
            </Helmet>

            {/* Page Title & Intro */}
            <section className='text-center py-16'>
                <h1 className='text-4xl md:text-5xl font-extrabold text-beeBlack mb-4'>
                    Our Services
                </h1>
                <p className='text-lg md:text-xl max-w-2xl mx-auto text-gray-700 leading-relaxed'>
                    From routine upkeep to deep transformations, we offer a
                    variety of cleaning solutions under four main categories.
                    Discover which one best fits your home or business.
                </p>
            </section>

            {/* Services */}
            {[
                {
                    title: "Residential Cleaning",
                    description: `Keep your home fresh, welcoming, and healthy with our comprehensive residential cleaning solutions. Whether you need a weekly tidy-up or a thorough deep clean, we customize each plan to suit your family’s lifestyle.`,
                    image: "/images/webp/residential-cleaning.webp",
                    alt: "Residential Cleaning Service",
                    points: [
                        "Standard Maintenance: Regular dusting, vacuuming, and surface cleaning.",
                        "Deep Clean: Baseboards, vents, and detailed scrubbing of appliances.",
                        "Carpet & Upholstery: Stain removal, odor elimination, and fiber revitalization.",
                        "Move-In/Move-Out: Ensure your new or old home is spotless before settling in or handing over keys.",
                    ],
                },
                {
                    title: "Commercial Cleaning",
                    description: `Present a professional, hygienic workspace to your clients and employees. Our commercial cleaning services are tailored to meet the demands of offices, retail environments, and more.`,
                    image: "/images/webp/commercial-cleaning.webp",
                    alt: "Commercial Cleaning Service",
                    points: [
                        "Office Cleanups: Desks, cubicles, conference rooms, and break areas.",
                        "Retail Maintenance: High-traffic floor care, display sanitization, and restroom upkeep.",
                        "Janitorial Oversight: Extended service for daily or weekly tasks like trash disposal and supply restocking.",
                        "Flexible Scheduling: We work around your hours to minimize interruptions.",
                    ],
                },
                {
                    title: "Post-Construction Cleaning",
                    description: `After renovations or new builds, let us handle the finishing touches. We remove dust, debris, and leftover materials so your space is move-in ready and looking its best.`,
                    image: "/images/webp/construction-cleaning.webp",
                    alt: "Post-Construction Cleaning Service",
                    points: [
                        "Debris & Dust Removal: Specialized equipment for drywall dust, wood shavings, and more.",
                        "Surface Polishing: Wipe down and polish countertops, appliances, and fixtures.",
                        "Detailed Floor Care: Tile, hardwood, or carpet rejuvenation post-construction.",
                        "Site-Specific Needs: We adapt to each project, ensuring thorough final cleanup.",
                    ],
                },
                {
                    title: "Janitorial Services",
                    description: `Maintain a consistently clean environment for your facility, school, or commercial building. Our janitorial team keeps everything running smoothly, from restrooms to common areas.`,
                    image: "/images/webp/janitorial-cleaning.webp",
                    alt: "Janitorial Services",
                    points: [
                        "Routine Maintenance: Regular dusting, mopping, and vacuuming for high-traffic areas.",
                        "Restroom & Supply Management: Sanitizing surfaces and replenishing paper goods.",
                        "Trash & Recycling: Efficient disposal and eco-friendly sorting.",
                        "Custom Schedules: Daily, weekly, or monthly plans aligned with your operational needs.",
                    ],
                },
            ].map((service, index) => (
                <section
                    key={index}
                    className={`py-16 ${
                        index % 2 === 0 ? "bg-gray-300" : "bg-gray-200"
                    }`}
                >
                    <div className='w-[90%] md:w-[70%] mx-auto grid md:grid-cols-[40%,60%] gap-8 items-center'>
                        <img
                            src={service.image}
                            alt={service.alt}
                            loading='lazy'
                            className='w-full h-64 object-cover rounded-lg shadow-md'
                        />
                        <div className='space-y-6'>
                            <h2 className='text-3xl font-bold text-beeBlack'>
                                {service.title}
                            </h2>
                            <p className='text-lg leading-relaxed text-gray-700'>
                                {service.description}
                            </p>
                            <ul className='list-disc list-inside space-y-3 text-gray-700'>
                                {service.points.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            ))}

            {/* Custom Quote CTA */}
            <section className='text-center py-16 bg-gray-200'>
                <p className='max-w-3xl mx-auto text-lg leading-relaxed text-gray-700'>
                    Don’t see exactly what you’re looking for? Reach out to us,
                    and we’ll create a custom cleaning plan to suit your unique
                    needs. Whether it’s a one-time deep clean or a recurring
                    contract, our flexibility ensures you get the perfect
                    solution.
                </p>
                <div className='mt-6'>
                    <CallButton />
                </div>
            </section>
        </div>
    );
}

export default Services;
