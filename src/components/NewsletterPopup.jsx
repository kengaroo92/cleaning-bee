import React, { useState } from "react";

function NewsletterPopup() {
    const [email, setEmail] = useState("");
    const [isOpen, setIsOpen] = useState(true); // Whether the popup is visible
    const [success, setSuccess] = useState(false); // Whether form is submitted successfully

    // Fake function to handle sign-up
    const handleSignup = (e) => {
        e.preventDefault();

        // Here, you would send the `email` to your backend / mailing service
        // For demonstration, we’ll just mock the success state:
        console.log("Submitted email:", email);

        // Clear the input
        setEmail("");

        // Mark as successful
        setSuccess(true);

        // You can auto-close after a few seconds, or keep it open
        // setTimeout(() => setIsOpen(false), 3000);
    };

    // If the popup is closed or the user dismissed it
    if (!isOpen) return null;

    return (
        <div
            className='
        fixed
        inset-x-0
        bottom-4        /* margin bottom of 1rem from the bottom of the screen */
        z-50
        flex
        justify-center
      '
        >
            <div
                className='
          w-[90%] max-w-xl   /* controls the width of the popup */
          bg-white
          shadow-lg
          border
          border-gray-200
          rounded-md
          p-4
          md:p-6
          relative          /* needed for absolute close button if you want one */
        '
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className='
            absolute
            top-2
            right-2
            text-gray-400
            hover:text-gray-600
            text-xl
            focus:outline-none
          '
                    aria-label='Close popup'
                >
                    &times;
                </button>

                {/* If user has submitted => show success message */}
                {success ? (
                    <div className='text-center space-y-4'>
                        <h2 className='text-xl font-bold text-green-600'>
                            You’re signed up!
                        </h2>
                        <p className='text-gray-700'>
                            Thank you for joining our mailing list. Here is your
                            <strong className='text-black'>
                                {" "}
                                20% OFF{" "}
                            </strong>{" "}
                            code:
                        </p>
                        <div className='inline-block px-3 py-1 text-white bg-green-600 rounded'>
                            CLEANBEE20
                        </div>
                        <p className='text-sm text-gray-500'>
                            (Apply this code at checkout.)
                        </p>
                    </div>
                ) : (
                    /* If user hasn't submitted => show sign-up form */
                    <div className='space-y-4'>
                        <h2 className='text-xl font-bold text-center text-gray-800'>
                            Get 20% OFF Your Next Service
                        </h2>
                        <p className='text-center text-gray-600 text-sm'>
                            Sign up for our newsletter to receive eco-friendly
                            cleaning tips plus an exclusive discount!
                        </p>
                        <form
                            onSubmit={handleSignup}
                            className='flex flex-col items-center space-y-2'
                        >
                            <input
                                type='email'
                                required
                                placeholder='Enter your email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='
                  w-full
                  px-4
                  py-2
                  border
                  border-gray-300
                  rounded
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-400
                  text-sm
                '
                            />
                            <button
                                type='submit'
                                className='
                  bg-beeBlue  /* or use a standard color like bg-blue-600 */
                  text-white
                  font-bold
                  py-2
                  px-6
                  rounded
                  hover:opacity-90
                  transition
                  duration-200
                  ease-in-out
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-400
                '
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
