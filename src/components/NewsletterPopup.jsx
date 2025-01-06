import React, { useState } from "react";
import { BsFillXCircleFill } from "react-icons/bs"; // Icon for close button
import BeeIcon from "./BeeIcon";

function NewsletterPopup() {
    const [email, setEmail] = useState("");
    const [isOpen, setIsOpen] = useState(true); // Popup visibility
    const [success, setSuccess] = useState(false); // Form submission state

    const handleSignup = (e) => {
        e.preventDefault();

        // Mock submission; integrate with an actual mailing service (e.g., Mailchimp, SendGrid)
        console.log("Submitted email:", email);

        setEmail("");
        setSuccess(true);
    };

    if (!isOpen) return null;

    return (
        <div className='fixed inset-x-0 bottom-4 z-50 flex justify-center'>
            <div className='relative w-[90%] max-w-md bg-white shadow-xl border border-gray-200 rounded-lg p-6 space-y-4'>
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className='absolute top-3 right-3 text-gray-400 hover:text-gray-600'
                    aria-label='Close popup'
                >
                    <BsFillXCircleFill size={24} />
                </button>

                {/* Bee Icon */}
                <div className='flex justify-center'>
                    <div className='bg-yellow-300 rounded-full p-3'>
                        <BeeIcon />
                    </div>
                </div>

                {success ? (
                    <div className='text-center space-y-4'>
                        <h2 className='text-2xl font-bold text-yellow-500'>
                            You’re signed up!
                        </h2>
                        <p className='text-gray-700'>
                            Thank you for joining our newsletter. Enjoy your{" "}
                            <span className='font-bold text-black'>
                                20% OFF
                            </span>{" "}
                            code:
                        </p>
                        <div className='inline-block px-4 py-2 text-white bg-yellow-500 rounded-md shadow-lg'>
                            CLEANBEE20
                        </div>
                        <p className='text-sm text-gray-500'>
                            Apply this code at checkout for your next service.
                        </p>
                    </div>
                ) : (
                    <div className='space-y-4'>
                        <h2 className='text-2xl font-bold text-center text-black'>
                            Get 20% OFF Your Next Service
                        </h2>
                        <p className='text-center text-gray-600 text-sm'>
                            Join our eco-friendly newsletter for tips and
                            discounts!
                        </p>
                        <form
                            onSubmit={handleSignup}
                            className='flex flex-col items-center space-y-3'
                        >
                            <input
                                type='email'
                                required
                                placeholder='Enter your email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400'
                            />
                            <button
                                type='submit'
                                className='w-full py-2 bg-yellow-500 text-white font-semibold rounded-md shadow hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500'
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NewsletterPopup;
