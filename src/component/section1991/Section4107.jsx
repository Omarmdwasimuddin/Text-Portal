import React from 'react';
import Link from 'next/link';

export default function LawPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Banner Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-8 px-4 md:px-8 relative">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              মূল্য সংযোজন কর আইন, ১৯৯১
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              ( ১৯৯১ সনের ২২ নং আইন )
            </p>
            <div className="mt-3 inline-block bg-green-500 px-4 py-1 rounded-full shadow-md">
              <p className="text-sm md:text-base font-medium">[ ৩০ জুন, ১৯৯১ ]</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/regulations/acts/vat-acts/value-added-tax-act"
            className="absolute top-4 left-4 flex items-center gap-2 bg-white text-green-700 hover:bg-green-100 transition-all px-3 py-2 rounded-full shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>

        {/* Header Section */}
        <div className="border-b border-gray-300">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Heading */}
            <div className="md:w-1/5 bg-blue-50 p-6 border-r border-gray-300">
              <h1 className="text-xl md:text-xl font-bold text-black leading-tight">
                সমঝোতা (Negotiation) এবং নিষ্পত্তির সময়সীমা
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
                <div className="space-y-6 text-black">
                    {/* Section 1 */}
                    <div>
                        <p className="mb-4">
                            ৪১ছ। (১) বিকল্প বিরোধ নিষ্পত্তির প্রক্রিয়াধীন কোন আবেদনপত্র যেই মূল্য সংযোজন কর কমিশনারেটে দাখিল করা হইয়াছে, সেই একই কমিশনারেটে উক্ত বিরোধের উদ্ভব হইয়া থাকিলে, তাহা নিষ্পত্তি সংক্রান্ত সকল আনুষ্ঠানিকতা বা সমঝোতা, মতৈক্য বা মতানৈক্য বা নিষ্পত্তি উক্ত আবেদনপত্র দাখিলের সর্বোচ্চ ৩০ (ত্রিশ) কার্যদিবসের মধ্যে সম্প্ন্ন করিতে হইবে।
                        </p>

                        <p className="mb-4">
                            (২) বিকল্প বিরোধ-নিষ্পত্তি প্রক্রিয়ায় দাখিলকৃত আবেদনপত্র সংশ্লিষ্ট কমিশনার (আপীল), আপীলাত ট্রাইব্যুনাল অথবা অন্য কোন আদালত যেখানে উহা নিষ্পন্নাধীন রহিয়াছে, তাহা আবেদনপত্র দাখিলের সর্বোচ্চ <sup className='text-blue-500 cursor-pointer' title='“৫০ (পঞ্চাশ)” সংখ্যা, বন্ধনী ও শব্দ “৬০ (ষাট)” সংখ্যা, বন্ধনী ও শব্দের পরিবর্তে অর্থ আইন, ২০১৬ (২০১৬ সনের ২৮ নং আইন) এর ৭২ ধারাবলে প্রতিস্থাপিত (with effect from 1st July 2016).'>১</sup>[৫০ (পঞ্চাশ)] কার্যদিবসের মধ্যে নিষ্পত্তি করিতে হইবে。
                        </p>
                    </div>
                </div>
            </div>

          </div>
        </div>

        {/* Footer Section */}
        <div className="border-t border-gray-300">
          <div className="p-6">
            <div className="border-b border-gray-400 pb-2 mb-4">
              {/* Horizontal line */}
            </div>
            <p className="text-xs text-gray-600 italic">
              <sup className="font-bold">১</sup>“৫০ (পঞ্চাশ)” সংখ্যা, বন্ধনী ও শব্দ “৬০ (ষাট)” সংখ্যা, বন্ধনী ও শব্দের পরিবর্তে অর্থ আইন, ২০১৬ (২০১৬ সনের ২৮ নং আইন) এর ৭২ ধারাবলে প্রতিস্থাপিত (with effect from 1st July 2016).
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}