import React from "react";
import { Helmet } from "react-helmet-async";

function PrivacyPolicy() {
    return (
        <div className='w-full bg-gray-100 py-16'>
            <Helmet>
                <title>Cleaning Bee | Privacy Policy</title>
                <meta
                    name='description'
                    content='Learn how Cleaning Bee collects, uses, and protects your personal information. Your privacy is our priority.'
                />
            </Helmet>

            <div className='w-[90%] md:w-[70%] mx-auto space-y-6'>
                {/* Page Title */}
                <h1 className='text-4xl font-bold text-beeBlack text-center mb-6'>
                    Privacy Policy
                </h1>

                {/* Introduction */}
                <p className='text-lg leading-relaxed text-gray-700'>
                    At Cleaning Bee, we are committed to protecting your
                    privacy. This Privacy Policy explains how we collect, use,
                    and safeguard your personal information when you visit our
                    website, contact us, or use our services.
                </p>

                {/* Information We Collect */}
                <section>
                    <h2 className='text-2xl font-bold text-beeBlack mb-4'>
                        Information We Collect
                    </h2>
                    <ul className='list-disc list-inside space-y-2 text-gray-700 text-lg'>
                        <li>
                            **Personal Information**: Name, email address, phone
                            number, and address provided when you contact us or
                            schedule a service.
                        </li>
                        <li>
                            **Usage Data**: Information about how you interact
                            with our website, including IP address, browser
                            type, and pages visited.
                        </li>
                        <li>
                            **Cookies**: Small files stored on your device to
                            improve your user experience.
                        </li>
                    </ul>
                </section>

                {/* How We Use Your Information */}
                <section>
                    <h2 className='text-2xl font-bold text-beeBlack mb-4'>
                        How We Use Your Information
                    </h2>
                    <p className='text-lg leading-relaxed text-gray-700'>
                        We use your information to:
                    </p>
                    <ul className='list-disc list-inside space-y-2 text-gray-700 text-lg'>
                        <li>
                            Provide and improve our services, including
                            scheduling and customer support.
                        </li>
                        <li>
                            Send important updates, promotions, or service
                            reminders.
                        </li>
                        <li>
                            Analyze website usage to enhance user experience.
                        </li>
                    </ul>
                </section>

                {/* How We Protect Your Information */}
                <section>
                    <h2 className='text-2xl font-bold text-beeBlack mb-4'>
                        How We Protect Your Information
                    </h2>
                    <p className='text-lg leading-relaxed text-gray-700'>
                        We implement technical and organizational measures to
                        secure your personal information. While we strive to
                        protect your data, no method of transmission over the
                        internet is completely secure, and we cannot guarantee
                        its absolute security.
                    </p>
                </section>

                {/* Sharing Your Information */}
                <section>
                    <h2 className='text-2xl font-bold text-beeBlack mb-4'>
                        Sharing Your Information
                    </h2>
                    <p className='text-lg leading-relaxed text-gray-700'>
                        We do not sell or share your personal information with
                        third parties, except as necessary to:
                    </p>
                    <ul className='list-disc list-inside space-y-2 text-gray-700 text-lg'>
                        <li>Provide services you have requested.</li>
                        <li>
                            Comply with legal obligations or protect our rights.
                        </li>
                        <li>
                            Work with trusted partners to perform essential
                            business functions (e.g., payment processing).
                        </li>
                    </ul>
                </section>

                {/* Your Choices */}
                <section>
                    <h2 className='text-2xl font-bold text-beeBlack mb-4'>
                        Your Choices
                    </h2>
                    <p className='text-lg leading-relaxed text-gray-700'>
                        You can:
                    </p>
                    <ul className='list-disc list-inside space-y-2 text-gray-700 text-lg'>
                        <li>
                            Opt out of promotional communications by following
                            the instructions in our emails.
                        </li>
                        <li>
                            Disable cookies in your browser settings (note that
                            this may affect website functionality).
                        </li>
                        <li>
                            Request access to, correction of, or deletion of
                            your personal information by contacting us.
                        </li>
                    </ul>
                </section>

                {/* Updates to This Policy */}
                <section>
                    <h2 className='text-2xl font-bold text-beeBlack mb-4'>
                        Updates to This Policy
                    </h2>
                    <p className='text-lg leading-relaxed text-gray-700'>
                        We may update this Privacy Policy from time to time. Any
                        changes will be posted on this page with an updated
                        "Last Updated" date.
                    </p>
                </section>

                {/* Contact Us */}
                <section>
                    <h2 className='text-2xl font-bold text-beeBlack mb-4'>
                        Contact Us
                    </h2>
                    <p className='text-lg leading-relaxed text-gray-700'>
                        If you have any questions or concerns about this Privacy
                        Policy, please contact us:
                    </p>
                    <ul className='list-none space-y-2 text-gray-700 text-lg'>
                        <li>
                            <span className='font-semibold'>Email:</span>{" "}
                            <a
                                href='mailto:ken@cleaningbeeutah.com'
                                className='text-beeYellow hover:underline'
                            >
                                ken@cleaningbeeutah.com
                            </a>
                        </li>
                        <li>
                            <span className='font-semibold'>Phone:</span>{" "}
                            <a
                                href='tel:+18017122639'
                                className='text-beeYellow hover:underline'
                            >
                                (801) 712-2639
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
