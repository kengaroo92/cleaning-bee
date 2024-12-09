import React from "react";
import Banner from "../components/Banner.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function Layout({ children }) {
    return (
        <div className='min-h-screen flex flex-col bg-white'>
            <Banner />
            <Navbar />
            <main className='flex-1 container mx-auto px-4 py-8'>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
