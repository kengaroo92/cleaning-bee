import React from "react";

function Footer() {
    return (
        <footer className='bg-beeBlack text-white text-center py-4'>
            <p className='text-sm'>
                &copy; {new Date().getFullYear()} Cleaning Bee. All Rights
                Reserved.
            </p>
        </footer>
    );
}

export default Footer;
