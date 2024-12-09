import React from "react";

function Home() {
    return (
        <div className='space-y-8'>
            <section className='text-center'>
                <h1 className='text-3xl md:text-5xl font-bold text-beeBlack'>
                    The ABCs of a Spotless Home
                </h1>
                <p className='mt-4 text-gray-700'>
                    Always Be Cleaning with Cleaning Bee!
                </p>
            </section>
            <section className='grid md:grid-cols-3 gap-6'>
                <div className='bg-white shadow p-4 text-center rounded'>
                    <h2 className='text-xl font-semibold text-beeBlack'>
                        A - All Surfaces
                    </h2>
                    <p className='text-sm text-gray-600 mt-2'>
                        We cover every surface in your home.
                    </p>
                </div>
                <div className='bg-white shadow p-4 text-center rounded'>
                    <h2 className='text-xl font-semibold text-beeBlack'>
                        B - Best Equipment
                    </h2>
                    <p className='text-sm text-gray-600 mt-2'>
                        Top-tier tools for a deeper clean.
                    </p>
                </div>
                <div className='bg-white shadow p-4 text-center rounded'>
                    <h2 className='text-xl font-semibold text-beeBlack'>
                        C - Consistent Quality
                    </h2>
                    <p className='text-sm text-gray-600 mt-2'>
                        Our standards never falter.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Home;
