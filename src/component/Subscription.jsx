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




/* 

 {Subscription Section}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-md max-w-md mx-auto"
              >
                <p className="text-gray-700 text-justify mb-4">
                  বার্ষিক সাবস্ক্রিপশনে আনলক করুন সব VAT, কাস্টমস, বন্ড ও পরীক্ষার সহায়িকা বইয়ের সফটকপি। 
                  যেকোনো সময় অনলাইনে পড়ুন এবং এক বছরের জন্য আপডেটেড কনটেন্ট উপভোগ করুন।
                </p>
                <div className="flex justify-center">
                <a
                  href="/subscribe"
                  className="w-48 py-2 rounded-full bg-gradient-to-r from-green-600 to-green-800 text-white font-medium shadow-lg text-center hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  <FiBell size={16} />
                  Subscribe
                </a>
                </div>
              </motion.div>

*/