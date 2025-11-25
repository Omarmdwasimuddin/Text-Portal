import React from 'react';
import Link from 'next/link';

export default function LawPage() {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Banner Section */}
        <div className="relative px-4 py-8 text-white bg-gradient-to-r from-green-600 to-green-800 md:px-8">
          <div className="text-center">
            <h1 className="mb-2 text-2xl font-bold md:text-4xl">
              মূল্য সংযোজন কর আইন, ১৯৯১
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              ( ১৯৯১ সনের ২২ নং আইন )
            </p>
            <div className="inline-block px-4 py-1 mt-3 bg-green-500 rounded-full shadow-md">
              <p className="text-sm font-medium md:text-base">[ ৩০ জুন, ১৯৯১ ]</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/regulations/acts/vat-acts/value-added-tax-act"
            className="absolute flex items-center gap-2 px-3 py-2 text-green-700 transition-all bg-white rounded-full shadow top-4 left-4 hover:bg-green-100"
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
            <div className="p-6 border-r border-gray-300 md:w-2/5 bg-blue-50">
              <h1>
                
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="p-6 md:w-3/5">
              <div className="space-y-6 text-gray-700">
                {/* Section 1 */}
                <div>
                  <p className="mb-4">
                    <sup className="text-blue-500" title='ধারা ৮ঘ অর্থ আইন, ২০০৪ (২০০৪ সনের ১৬ নং আইন) এর ৪৭ ধারাবলে সন্নিবেশিত'>১</sup>[<span className="text-xl font-bold leading-tight text-gray-800 md:text-xl">৮ঘ৷ বৃহত্ করদাতা ইউনিট গঠন---</span> বোর্ড, সরকারী গেজেটে প্রজ্ঞাপন দ্বারা, দেশের সমগ্র এলাকা বা কোন নির্দিষ্ট এলাকায় নির্দিষ্ট পরিসীমা বা শ্রেণীর করদাতার নিকট হইতে মূল্য সংযোজন কর <sup className='text-blue-500' title='“, সম্পূরক শুল্ক ও আবগারী শুল্ক” কমা এবং শব্দগুলি “মূল্য সংযোজন কর” শব্দগুলির পর অর্থ আইন, ২০০৯ (২০০৯ সনের ১০ নং আইন) এর ৪১ ধারাবলে প্রতিস্থাপিত যাহা ১ জুলাই ২০০৮ তারিখ হইতে কার্যকর।'>২</sup>[, সম্পূরক শুল্ক ও আবগারী শুল্ক] আদায় ও তত্ত্বাবধানের জন্য উক্ত শ্রেণীর করদাতাদের সমন্বয়ে প্রয়োজনীয় সংখ্যক বৃহত্ করদাতা ইউনিটে (Large Taxpayer Unit বা LTU) গঠন করিতে পারিবে৷]
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Section */}
        <div className="border-t border-gray-300">
          <div className="p-6">
            <div className="pb-2 mb-4 border-b border-gray-400">
              {/* Horizontal line */}
            </div>
            <p className="mt-2 text-xs italic text-gray-600">
              <sup className='font-bold'>১</sup> ধারা ৮ঘ অর্থ আইন, ২০০৪ (২০০৪ সনের ১৬ নং আইন) এর ৪৭ ধারাবলে সন্নিবেশিত
            </p>
            <p className="mt-2 text-xs italic text-gray-600">
              <sup className='font-bold'>২</sup> ", সম্পূরক শুল্ক ও আবগারী শুল্ক" কমা এবং শব্দগুলি "মূল্য সংযোজন কর" শব্দগুলির পর অর্থ আইন, ২০০৯ (২০০৯ সনের ১০ নং আইন) এর ৪১ ধারাবলে প্রতিস্থাপিত যাহা ১ জুলাই ২০০৮ তারিখ হইতে কার্যকর।
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}