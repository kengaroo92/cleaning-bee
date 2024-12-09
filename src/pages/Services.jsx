import React from "react";

function Services() {
    return (
        <div className='space-y-4'>
            <h1 className='text-2xl font-bold text-beeBlack'>Our Services</h1>
            <ul className='space-y-2 list-disc ml-5 text-gray-700'>
                <li>Residential Cleaning</li>
                <li>Commercial Cleaning</li>
                <li>Deep Cleaning & Move-In/Move-Out</li>
                <li>Recurring Maintenance Plans</li>
            </ul>
            <p className='text-gray-700'>
                We tailor our services to meet your specific needs. Whether you
                need a one-time deep clean or ongoing upkeep, our skilled team
                is here to help.
            </p>
        </div>
    );
}

export default Services;
