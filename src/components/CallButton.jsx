import React from "react";

function CallButton({
    phoneNumber = "+18017122639",
    label = "Call Us: 801-712-2639",
    ariaLabel = "Call Cleaning Bee for a free quote",
    onClick,
}) {
    return (
        <span itemProp='telephone'>
            <a
                href={`tel:${phoneNumber}`}
                target='_self'
                rel='noopener noreferrer'
                className='btn-primary text-xl md:text-2xl inline-block px-4 py-2 text-white bg-beeYellow rounded-full hover:bg-beeYellow/90 focus:outline-none focus-visible:ring focus-visible:ring-yellow-400 transition'
                aria-label={ariaLabel} // Added aria-label here
                onClick={onClick}
            >
                {label}
            </a>
        </span>
    );
}

export default CallButton;
