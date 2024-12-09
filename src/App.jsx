import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Pricing from "./pages/Pricing.jsx";
import Contact from "./pages/Contact.jsx";
import Loyalty from "./pages/Loyalty.jsx";
import Blog from "./pages/Blog.jsx";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/loyalty' element={<Loyalty />} />
                <Route path='/blog' element={<Blog />} />
            </Routes>
        </Layout>
    );
}

export default App;
