import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Residential from "./pages/services/Residential.jsx";
import Commercial from "./pages/services/Commercial.jsx";
import Construction from "./pages/services/Construction.jsx";
import Janitorial from "./pages/services/Janitorial.jsx";
import Pricing from "./pages/Pricing.jsx";
import Contact from "./pages/Contact.jsx";
import Loyalty from "./pages/Loyalty.jsx";
import Blog from "./pages/Blog.jsx";
import { HelmetProvider } from "react-helmet-async";

function App() {
    return (
        <HelmetProvider>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route
                        path='/services/residential'
                        element={<Residential />}
                    />
                    <Route
                        path='/services/commercial'
                        element={<Commercial />}
                    />
                    <Route
                        path='/services/construction'
                        element={<Construction />}
                    />
                    <Route
                        path='/services/janitorial'
                        element={<Janitorial />}
                    />
                    <Route path='/pricing' element={<Pricing />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/loyalty' element={<Loyalty />} />
                    <Route path='/blog' element={<Blog />} />
                </Routes>
            </Layout>
        </HelmetProvider>
    );
}

export default App;
