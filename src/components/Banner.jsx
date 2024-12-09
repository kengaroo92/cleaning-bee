import React, { useState } from "react";

function Banner() {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className='bg-beeYellow text-beeBlack text-center relative py-2 font-medium text-sm md:text-base'>
            <button
                onClick={() => setVisible(false)}
                className='absolute right-2 top-1/2 -translate-y-1/2 text-beeBlack hover:text-beeBlack/80'
                aria-label='Close Banner'
            >
                ✕
            </button>
            <span>Special Discount: Get 10% off your first cleaning!</span>
        </div>
    );
}

export default Banner;
