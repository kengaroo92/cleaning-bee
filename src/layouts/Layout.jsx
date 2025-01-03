import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Analytics } from "@vercel/analytics/react";

function Layout({ children }) {
    return (
        <div className='min-h-screen flex flex-col bg-white'>
            <Navbar />
            <main className='flex-1 mb-16'>
                {children}
                <Analytics />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
