import React from "react";

function AboutUs() {
    return (
        <div className='w-[70%] mx-auto space-y-16 my-16 text-gray-700'>
            {/* Page Title */}
            <section className='text-center space-y-4'>
                <h1 className='text-4xl md:text-5xl font-bold text-beeBlack'>
                    About Cleaning Bee
                </h1>
                <p className='text-lg md:text-xl max-w-2xl mx-auto'>
                    We are committed to providing top-quality cleaning services
                    tailored to your unique needs.
                </p>
            </section>

            {/* Our Story Section */}
            <section className='space-y-4'>
                <h2 className='text-2xl font-bold text-beeBlack'>Our Story</h2>
                <p>
                    Cleaning Bee was founded with a simple mission: to deliver
                    spotless cleaning services that allow our clients to spend
                    more time enjoying life, rather than worrying about chores.
                    Our team of professionals is dedicated to ensuring homes and
                    offices shine through our attention to detail, reliability,
                    and personal touch.
                </p>
                <p>
                    We take pride in the “ABCs of Cleaning”—Always Be
                    Cleaning—which guides our approach. From living rooms and
                    kitchens to offices and break rooms, we consistently strive
                    to exceed your expectations.
                </p>
            </section>

            {/* Values / Why We Stand Out */}
            <section className='space-y-4'>
                <h2 className='text-2xl font-bold text-beeBlack'>
                    What Sets Us Apart
                </h2>
                <ul className='list-disc list-inside space-y-2'>
                    <li>
                        <strong>Expert Team:</strong> Our cleaners are
                        thoroughly vetted, trained, and experienced, ensuring
                        high-quality, trustworthy service.
                    </li>
                    <li>
                        <strong>Eco-Friendly Products:</strong> We use
                        sustainable, non-toxic cleaning solutions that are safe
                        for your family, pets, and the planet.
                    </li>
                    <li>
                        <strong>Personalized Solutions:</strong> We tailor our
                        cleaning plans to meet your specific needs, schedule,
                        and budget.
                    </li>
                    <li>
                        <strong>Customer-First Approach:</strong> Your
                        satisfaction is our priority. We’re not happy unless
                        you’re delighted with our work.
                    </li>
                </ul>
            </section>

            {/* Team Section */}
            <section className='space-y-4'>
                <h2 className='text-2xl font-bold text-beeBlack'>Our Team</h2>
                <p>
                    The Cleaning Bee team consists of dedicated professionals
                    who share a common goal: making your environment healthier,
                    fresher, and more inviting. We invest in ongoing training,
                    cutting-edge equipment, and proven techniques to ensure
                    every job is done right.
                </p>
            </section>

            {/* Call to Action */}
            <section className='text-center space-y-4'>
                <h2 className='text-2xl font-bold text-beeBlack'>
                    Ready to Experience the Cleaning Bee Difference?
                </h2>
                <p>
                    Contact us today to learn how we can transform your space
                    into a pristine haven. Let us handle the cleaning, so you
                    can focus on what truly matters.
                </p>
                <a
                    href='/contact'
                    className='inline-block bg-beeYellow text-beeBlack font-semibold py-3 px-6 rounded hover:bg-yellow-500 transition-colors text-lg'
                >
                    Get in Touch
                </a>
            </section>
        </div>
    );
}

export default AboutUs;
