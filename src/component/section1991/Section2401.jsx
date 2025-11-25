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
                    <sup className='text-blue-500 cursor-pointer' title='ধারা ২৪ক  অর্থ আইন, ১৯৯৯ (১৯৯৯ সনের ১৬ নং আইন) এর ৭ ধারাবলে সংযোজিত'>১</sup>[<span className="text-xl font-bold leading-tight text-gray-950 md:text-xl">২৪ক৷ মূল্য সংযোজন কর কর্মকর্তা কর্তৃক সহায়তা প্রদান---</span> The <Link href='/' className='text-blue-500'>Customs Act, 1969</Link> (IV of 1969), Gift Tax Act, 1963 (XIV of 1963) কিংবা দান কর আইন, ১৯৯০ (১৯৯০ সনের ২২ নং আইন), Income Tax Ordinance, 1984 (XXXVI of 1984) এর <sup className='text-blue-500 cursor-pointer' title='“উদ্দেশ্য” শব্দটি “উদ্দেশ্যে” শব্দের পরিবর্তে অর্থ আইন, ২০০৯ (২০০৯ সনের ৩৬ নং আইন) এর  ৫৩ ধারাবলে প্রতিস্থাপিত যাহা ১ জুলাই ২০০৯ তারিখ হইতে কার্যকর।'>২</sup>[উদ্দেশ্য] পূরণকল্পে মূল্য সংযোজন কর সংক্রান্ত প্রয়োজনীয় সকল তথ্যাদি উক্ত আইন প্রয়োগ ও বাস্তবায়নকারী কর্তৃপক্ষকে মূল্য সংযোজন কর কর্মকর্তাগণ সরবরাহ করিবেন৷]
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
            <p className="mb-2 text-xs italic text-gray-600">
              <sup className="font-bold">১</sup>ধারা ২৪ক অর্থ আইন, ১৯৯৯ (১৯৯৯ সনের ১৬ নং আইন) এর ৭ ধারাবলে সংযোজিত
            </p>
            <p className="mb-2 text-xs italic text-gray-600">
              <sup className="font-bold">২</sup>“উদ্দেশ্য” শব্দটি “উদ্দেশ্যে” শব্দের পরিবর্তে অর্থ আইন, ২০০৯ (২০০৯ সনের ৩৬ নং আইন) এর ৫৩ ধারাবলে প্রতিস্থাপিত যাহা ১ জুলাই ২০০৯ তারিখ হইতে কার্যকর।
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}