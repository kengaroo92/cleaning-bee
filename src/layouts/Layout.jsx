import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Newsletter from "../components/NewsletterPopup.jsx";

function Layout({ children }) {
    return (
        <div className='min-h-screen flex flex-col bg-gray-300'>
            <Navbar />
            <main className='flex-1 mb-16 mt-10'>{children}</main>
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Layout;
