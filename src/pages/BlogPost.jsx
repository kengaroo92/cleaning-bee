import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogPosts from "../data/blogPosts.json";

function BlogPost() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className='text-center py-16'>
                <h1 className='text-4xl font-bold text-red-600'>
                    Post Not Found
                </h1>
                <p className='text-gray-700 mt-4'>
                    Sorry, we couldn't find the blog post you're looking for.
                </p>
            </div>
        );
    }

    return (
        <div className='w-full bg-gray-300 py-16'>
            <div className='w-[90%] md:w-[70%] mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6'>
                <button
                    onClick={() => navigate(-1)}
                    className='inline-block bg-beeYellow text-beeBlack font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors mb-4'
                >
                    ← Back to Blog
                </button>
                <img
                    src={post.image}
                    alt={post.title}
                    className='w-full max-h-72 object-cover rounded-md'
                />
                <h1 className='text-4xl font-extrabold text-beeBlack'>
                    {post.title}
                </h1>
                <p className='text-gray-600 italic'>{post.date}</p>
                <div
                    className='prose prose-lg text-gray-700'
                    dangerouslySetInnerHTML={{ __html: post.content }}
                ></div>
            </div>
        </div>
    );
}

export default BlogPost;
