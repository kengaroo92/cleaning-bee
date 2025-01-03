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

    // Update form data state
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            // Example of a POST request to your backend
            // Adjust the endpoint and payload as needed
            const response = await fetch("https://formspree.io/f/xjkkpwyr", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(
                    "Failed to send your message. Please try again."
                );
            }

            // Reset form fields on success
            setFormData({ name: "", email: "", subject: "", message: "" });
            setSuccessMessage(
                "Thank you! Your message has been sent. You will hear back from a team member shortly."
            );
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='w-[70%] mx-auto my-16 space-y-16 text-gray-700'>
            <Helmet>
                <title>Cleaning Bee | Contact Us</title>
                <meta
                    name='description'
                    content='Have a question or special request? Get in touch with Cleaning Bee to learn more about our professional cleaning services in the Salt Lake Valley.'
                />
            </Helmet>

            {/* Heading Section */}
            <section className='text-center space-y-4'>
                <h1 className='text-4xl md:text-5xl font-bold text-beeBlack'>
                    Contact Us
                </h1>
                <p className='text-lg md:text-xl max-w-2xl mx-auto'>
                    Have a question, comment, or special request? We’d love to
                    hear from you. Fill out the form below, and we’ll respond as
                    soon as possible.
                </p>
            </section>

            {/* Contact Info & Optional Map */}
            <section className='flex flex-col md:flex-row gap-8 md:gap-16'>
                {/* Left Column: Form */}
                <div className='flex-1'>
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        {/* Name */}
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
                                className='w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-beeYellow'
                                placeholder='Your full name'
                            />
                        </div>

                        {/* Email */}
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
                                className='w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-beeYellow'
                                placeholder='you@example.com'
                            />
                        </div>

                        {/* Subject */}
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
                                className='w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-beeYellow'
                                placeholder='What is your inquiry about?'
                            />
                        </div>

                        {/* Message */}
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
                                className='w-full border border-gray-300 rounded p-3 h-32 focus:outline-none focus:ring-2 focus:ring-beeYellow'
                                placeholder='Tell us more about your needs...'
                            ></textarea>
                        </div>

                        {/* Submit Button & Feedback Messages */}
                        <div className='text-center space-y-4'>
                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className='bg-beeYellow text-beeBlack font-semibold py-3 px-6 rounded hover:bg-yellow-500 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                            {successMessage && (
                                <p className='text-green-600 font-semibold'>
                                    {successMessage}
                                </p>
                            )}
                            {errorMessage && (
                                <p className='text-red-600 font-semibold'>
                                    {errorMessage}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;
