"use client";

import Link from "next/link";

const SubscriptionPlans = () => {
  return (
    <section className=" text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Subscription Plans
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-300 mb-10">
          Unlock access to all premium books and resources with our yearly
          subscription. Get unlimited reading of softcopy books, exclusive
          updates, and priority support.
        </p>

        {/* Button */}
        <Link
          href="/subscription"
          className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 
          text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transform transition"
        >
          Subscribe Now
        </Link>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
