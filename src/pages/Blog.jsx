import React from "react";
import BlogCard from "../components/BlogCard";
import blogPosts from "../data/blogPosts.json";

function Blog() {
    return (
        <div className='w-full bg-gray-300 py-16'>
            <div className='text-center mb-16'>
                <h1 className='text-5xl font-extrabold text-beeBlack'>
                    Cleaning Bee Blog
                </h1>
                <p className='text-lg text-gray-700 mt-4'>
                    Discover expert cleaning tips, tricks, and advice to keep
                    your home or office sparkling clean.
                </p>
            </div>
            <div className='w-[90%] md:w-[70%] mx-auto grid md:grid-cols-2 gap-8'>
                {blogPosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>
        </div>
    );
}

export default Blog;
