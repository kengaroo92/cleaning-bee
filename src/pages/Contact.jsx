import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const response = await fetch("https://formspree.io/f/xjkkpwyr", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(
                    "Failed to send your message. Please try again."
                );
            }

            setFormData({ name: "", email: "", subject: "", message: "" });
            setSuccessMessage(
                "Thank you! Your message has been sent. We will get back to you shortly."
            );
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='w-full'>
            <Helmet>
                <title>Cleaning Bee | Contact Us</title>
                <meta
                    name='description'
                    content='Have a question or special request? Contact Cleaning Bee today to learn more about our professional cleaning services in the Salt Lake Valley.'
                />
                <script type='application/ld+json'>
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "Cleaning Bee",
                        areaServed: {
                            "@type": "GeoCircle",
                            geoMidpoint: {
                                "@type": "GeoCoordinates",
                                latitude: 40.51455, // Latitude of the 84096 zip code
                                longitude: -112.03283, // Longitude of the 84096 zip code
                            },
                            geoRadius: 40233.6, // 25 miles in meters
                        },
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "6619 W Rosarita Ct",
                            addressLocality: "Herriman",
                            addressRegion: "UT",
                            postalCode: "84096",
                            addressCountry: "US",
                        },
                        telephone: "+18017122639",
                        email: "ken@cleaningbeeutah.com",
                        url: "https://cleaningbeeutah.com",
                    })}
                </script>
                <script type='application/ld+json'>
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        name: "Contact Cleaning Bee",
                        description:
                            "Reach out to Cleaning Bee for inquiries, requests, and more information about our services in the Salt Lake Valley.",
                        url: "https://cleaningbeeutah.com/contact",
                        contactPoint: {
                            "@type": "ContactPoint",
                            telephone: "+18017122639",
                            email: "ken@cleaningbeeutah.com",
                            contactType: "Customer Service",
                        },
                    })}
                </script>
            </Helmet>

            {/* Page Header */}
            <section className='text-center py-16'>
                <h1 className='text-5xl font-extrabold text-beeBlack mb-6'>
                    Contact Us
                </h1>
                <p className='text-lg md:text-xl max-w-2xl mx-auto text-gray-700 leading-relaxed'>
                    Questions, comments, or special requests? Fill out the form
                    below, or use the quick contact options to get in touch.
                </p>
            </section>

            {/* Contact Options */}
            <section className='w-[90%] md:w-[70%] mx-auto py-8 space-y-8'>
                <div className='grid md:grid-cols-2 gap-8'>
                    {/* Contact Form */}
                    <div className='bg-white shadow-lg p-8 rounded-lg'>
                        <h2 className='text-3xl font-bold text-beeBlack mb-6'>
                            Send Us a Message
                        </h2>
                        <form onSubmit={handleSubmit} className='space-y-6'>
                            <div>
                                <label
                                    htmlFor='name'
                                    className='block text-beeBlack font-semibold mb-2'
                                >
                                    Name
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    aria-label='Your name'
                                    className='w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-beeYellow'
                                    placeholder='Your full name'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='email'
                                    className='block text-beeBlack font-semibold mb-2'
                                >
                                    Email
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    aria-label='Your email address'
                                    className='w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-beeYellow'
                                    placeholder='you@example.com'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='subject'
                                    className='block text-beeBlack font-semibold mb-2'
                                >
                                    Subject
                                </label>
                                <input
                                    type='text'
                                    id='subject'
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    aria-label='Subject of your message'
                                    className='w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-beeYellow'
                                    placeholder='What is your inquiry about?'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='message'
                                    className='block text-beeBlack font-semibold mb-2'
                                >
                                    Message
                                </label>
                                <textarea
                                    id='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    aria-label='Your message'
                                    className='w-full border border-gray-300 rounded p-3 h-32 focus:outline-none focus:ring-2 focus:ring-beeYellow'
                                    placeholder='Tell us more about your needs...'
                                ></textarea>
                            </div>
                            <button
                                type='submit'
                                disabled={isSubmitting}
                                aria-label='Submit your message'
                                className='bg-beeYellow text-beeBlack font-semibold py-3 px-6 rounded hover:bg-yellow-500 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                        {successMessage && (
                            <p className='mt-4 text-green-600 font-semibold'>
                                {successMessage}
                            </p>
                        )}
                        {errorMessage && (
                            <p className='mt-4 text-red-600 font-semibold'>
                                {errorMessage}
                            </p>
                        )}
                    </div>

                    {/* Quick Contact Options */}
                    <div className='space-y-6'>
                        <h2 className='text-3xl font-bold text-beeBlack'>
                            Quick Contact
                        </h2>
                        <p className='text-lg'>
                            <strong>Phone:</strong>{" "}
                            <a
                                href='tel:+18017122639'
                                className='text-beeYellow hover:underline'
                                aria-label='Call Cleaning Bee at (801) 712-2639'
                            >
                                (801) 712-2639
                            </a>
                        </p>
                        <p className='text-lg'>
                            <strong>Email:</strong>{" "}
                            <a
                                href='mailto:ken@cleaningbeeutah.com'
                                className='text-beeYellow hover:underline'
                                aria-label='Email Cleaning Bee at ken@cleaningbeeutah.com'
                            >
                                ken@cleaningbeeutah.com
                            </a>
                        </p>
                        <iframe
                            title='Cleaning Bee Service Area'
                            src='https://www.google.com/maps/d/u/0/embed?mid=1LUIpA8-L0OdAMzNT90dPFXRHn3MdweM&ehbc=2E312F&noprof=1'
                            className='w-full h-64 border rounded'
                            aria-label='Map showing Cleaning Bee service area in the Salt Lake Valley, Utah Valley, and surrounding Park City areas.'
                        ></iframe>
                        <section className='py-16 text-center'>
                            <h2 className='text-3xl font-bold text-beeBlack mb-4'>
                                Serving the Salt Lake Valley and Beyond
                            </h2>
                            <p className='text-lg text-gray-700 max-w-2xl mx-auto'>
                                Cleaning Bee provides top-quality residential
                                and commercial cleaning services to all Salt
                                Lake Valley, Utah Valley, and surrounding Park
                                City.
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
