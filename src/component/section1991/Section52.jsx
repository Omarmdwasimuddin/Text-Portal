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
        <div className="">
          <div className="flex flex-col md:flex-row">
            <div className="p-6">
                <div className="space-y-6 text-justify text-black">
                    {/* Section 1 */}
                    <div>
                        <p className="mb-4">
                            <span className="text-xl font-bold leading-tight text-gray-950 md:text-xl">৫২৷ গ্রেফতারকৃত ব্যক্তিদের ব্যবস্থাপনা---</span> এই আইনের অধীন গ্রেফতারকৃত প্রত্যেক ব্যক্তিকে অবিলম্বে নিকটতম এমন কোন মূল্য সংযোজন কর কর্মকর্তার নিকট প্রেরণ করিতে হইবে যিনি উক্তরূপ গ্রেফতারকৃত কোন ব্যক্তিকে ম্যাজিষ্ট্রেট এর নিকট প্রেরণ করার জন্য <sup className='text-blue-500' title='“কমিশনার” শব্দটি “কালেক্টর” শব্দের পরিবর্তে অর্থ আইন, ১৯৯৫ (১৯৯৫ সনের ১২ নং আইন) এর ৮ ধারাবলে প্রতিস্থাপিত'>১</sup>[কমিশনার], মূল্য সংযোজন কর এর নিকট হইতে এতদুদ্দেশ্যে ক্ষমতা প্রাপ্ত হইয়াছেন অথবা যদি যুক্তিসংগত দূরত্বের মধ্যে এইরূপ কোন মূল্য সংযোজন কর কর্মকর্তা না থাকেন তাহা হইলে গ্রেফতারকৃত ব্যক্তিকে নিকটতম থানার ভারপ্রাপ্ত কর্মকর্তার নিকট প্রেরণ করিতে হইবে৷
                        </p>
                    </div>
                </div>
            </div>

          </div>
        </div>

        {/* Footer Section */}
        <div className="">
            <div className="p-6">
                <div className="w-1/2 pb-2 mb-4 border-b border-gray-400">
                    {/* Horizontal line */}
                </div>
                <div className="space-y-2 text-xs italic text-gray-600">
                    <p>
                        <sup className="font-bold">১</sup> “কমিশনার” শব্দটি “কালেক্টর” শব্দের পরিবর্তে অর্থ আইন, ১৯৯৫ (১৯৯৫ সনের ১২ নং আইন) এর ৮ ধারাবলে প্রতিস্থাপিত
                    </p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}