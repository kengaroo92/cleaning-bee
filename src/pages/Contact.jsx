import React, { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Here is where you would integrate with your email sending service.
        // This example demonstrates a POST request to your backend.
        // Replace '/api/contact' with your actual backend endpoint.
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, subject, message }),
            });

            if (response.ok) {
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
                setSuccessMessage("Thank you! Your message has been sent.");
                setErrorMessage("");
            } else {
                throw new Error(
                    "Failed to send your message. Please try again."
                );
            }
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='w-[70%] mx-auto my-16 space-y-16 text-gray-700'>
            <section className='text-center space-y-4'>
                <h1 className='text-4xl md:text-5xl font-bold text-beeBlack'>
                    Contact Us
                </h1>
                <p className='text-lg md:text-xl max-w-2xl mx-auto'>
                    Have a question, comment, or special request? We’re here to
                    help. Please fill out the form below, and we’ll get back to
                    you as soon as possible.
                </p>
            </section>

            <section>
                <form onSubmit={handleSubmit} className='space-y-8'>
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
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
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className='w-full border border-gray-300 rounded p-3 h-32 focus:outline-none focus:ring-2 focus:ring-beeYellow'
                            placeholder='Tell us more about your needs...'
                        ></textarea>
                    </div>

                    {/* Submit Button and Feedback Messages */}
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
            </section>
        </div>
    );
}

export default Contact;
