import React from "react";
import { Link } from "react-router-dom";

function Blog() {
    const posts = [
        {
            title: "10 Tips for Maintaining a Spotless Home",
            date: "September 12, 2023",
            excerpt:
                "Discover simple habits and routines you can adopt to keep every corner of your home sparkling clean year-round.",
            slug: "10-tips-spotless-home",
        },
        {
            title: "Eco-Friendly Cleaning: Better for You & the Planet",
            date: "August 25, 2023",
            excerpt:
                "Learn how to minimize harsh chemicals and incorporate green cleaning solutions to protect your family and the environment.",
            slug: "eco-friendly-cleaning",
        },
        {
            title: "Office Cleaning Hacks to Boost Productivity",
            date: "August 10, 2023",
            excerpt:
                "A tidy workspace can make all the difference in your productivity. Here’s how to keep your desk and office in top shape.",
            slug: "office-cleaning-hacks",
        },
        {
            title: "Deep Cleaning: What It Is & Why You Need It",
            date: "July 30, 2023",
            excerpt:
                "Learn the difference between a regular clean and a deep clean, and find out how often you should schedule one for best results.",
            slug: "deep-cleaning-explained",
        },
        {
            title: "Seasonal Cleaning Checklist for a Fresh Start",
            date: "July 15, 2023",
            excerpt:
                "From refreshing your curtains to flipping your mattress, discover our seasonal cleaning checklist for a fresh, organized home.",
            slug: "seasonal-cleaning-checklist",
        },
    ];

    return (
        <div className='w-[70%] mx-auto space-y-16 my-16 text-gray-700'>
            {/* Page Title */}
            <section className='text-center space-y-4'>
                <h1 className='text-4xl md:text-5xl font-bold text-beeBlack'>
                    The Cleaning Bee Blog
                </h1>
                <p className='text-lg md:text-xl max-w-2xl mx-auto'>
                    Explore expert tips, eco-friendly advice, and the latest in
                    professional cleaning techniques to keep your space shining.
                </p>
            </section>

            {/* Blog Posts */}
            <section className='space-y-8'>
                {posts.map((post, index) => (
                    <article
                        key={index}
                        className='bg-white shadow-lg rounded p-6 space-y-4'
                    >
                        <h2 className='text-2xl font-bold text-beeBlack'>
                            {post.title}
                        </h2>
                        <p className='text-sm text-gray-500'>{post.date}</p>
                        <p>{post.excerpt}</p>
                        <Link
                            to={`/blog/${post.slug}`}
                            className='inline-block bg-beeYellow text-beeBlack font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                        >
                            Read More
                        </Link>
                    </article>
                ))}
            </section>
        </div>
    );
}

export default Blog;
