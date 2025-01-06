import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ post }) {
    return (
        <div className='bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105'>
            <div className='h-48'>
                {/* Dynamically load image from the blog data */}
                <img
                    src={post.image}
                    alt={post.title}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='p-6 space-y-4'>
                <h2 className='text-2xl font-bold text-beeBlack'>
                    {post.title}
                </h2>
                <p className='text-gray-700'>{post.excerpt}</p>
                <Link
                    to={`/blog/${post.slug}`}
                    className='inline-block bg-beeYellow text-beeBlack font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors'
                >
                    Read More
                </Link>
            </div>
        </div>
    );
}

export default BlogCard;
