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
              <h1 className="text-xl md:text-xl font-bold text-gray-800 leading-tight">
                অব্যাহতি
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
              <div className="space-y-6 text-gray-700">
                {/* Section 1 */}
                <div>
                  <p className="mb-4">
                    ১৪৷ (১) সরকার, সরকারী গেজেটে প্রজ্ঞাপন দ্বারা, প্রজ্ঞাপনে উল্লিখিত সীমা ও শর্ত সাপেক্ষে, যে কোন পণ্য বা পণ্য শ্রেণীর আমদানি বা সরবরাহ বা প্রদত্ত যে কোন সেবাকে এই আইনের অধীন আরোপযোগ্য মূল্য সংযোজন কর বা, ক্ষেত্রমত, সম্পূরক শুল্ক হইতে অব্যাহতি প্রদান করিতে পারিবে৷
                  </p>

                  <p className="mb-4">
                    <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (১ক) অর্থ আইন, ১৯৯৯ (১৯৯৯ সনের ১৬ নং আইন) এর ৭ ধারাবলে সন্নিবেশিত'>১</sup>[(১ক) বোর্ড, বিশেষ আদেশ দ্বারা, আদেশে উল্লিখিত সীমা ও শর্ত সাপেক্ষে কোন আন্তর্জাতিক চুক্তি বা দ্বিপক্ষীয় চুক্তি পারষ্পরিক ভিত্তিতে (reciprocal basis) বাস্তবায়নের জন্য, যে কোন পণ্যের আমদানী, সরবরাহ গ্রহন বা সেবা গ্রহন-কে এই আইনের অধীনে আরোপযোগ্য মূল্য সংযোজন কর বা ক্ষেত্রমত, সম্পূরক শুল্ক হইতে অব্যাহতি প্রদান করিতে পারিবে৷]
                  </p>

                  <p className="mb-4">
                    (২) বোর্ড, বিশেষ আদেশবলে প্রত্যেক ক্ষেত্রে কারণ উল্লেখপূর্বক, করযোগ্য যে কোন পণ্যের আমদানি বা সরবরাহ বা প্রদত্ত সেবাকে এই আইনের অধীনে আরোপযোগ্য মূল্য সংযোজন কর বা, ক্ষেত্রমত, সম্পূরক শুল্ক হইতে অব্যাহতি প্রদান করিতে পারিবে৷
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Section */}
          <div className="border-t border-gray-300">
            <div className="p-6">
              <div className="w-1/2 border-b border-gray-400 pb-2 mb-4">
                {/* Horizontal line */}
              </div>
              <p className="text-xs text-gray-600 italic mb-2">
                <sup className="font-bold">১</sup>উপ-ধারা (১ক) অর্থ আইন, ১৯৯৯ (১৯৯৯ সনের ১৬ নং আইন) এর ৭ ধারাবলে সন্নিবেশিত
              </p>
            </div>
          </div>

      </div>
    </div>
  );
}