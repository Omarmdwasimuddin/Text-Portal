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
                     <span className="text-xl font-bold leading-tight text-gray-950 md:text-xl">১৪৷ অব্যাহতি---</span>(১) সরকার, সরকারী গেজেটে প্রজ্ঞাপন দ্বারা, প্রজ্ঞাপনে উল্লিখিত সীমা ও শর্ত সাপেক্ষে, যে কোন পণ্য বা পণ্য শ্রেণীর আমদানি বা সরবরাহ বা প্রদত্ত যে কোন সেবাকে এই আইনের অধীন আরোপযোগ্য মূল্য সংযোজন কর বা, ক্ষেত্রমত, সম্পূরক শুল্ক হইতে অব্যাহতি প্রদান করিতে পারিবে৷
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
          <div className="">
            <div className="p-6">
              <div className="w-1/2 pb-2 mb-4 border-b border-gray-400">
                {/* Horizontal line */}
              </div>
              <p className="mb-2 text-xs italic text-gray-600">
                <sup className="font-bold">১</sup>উপ-ধারা (১ক) অর্থ আইন, ১৯৯৯ (১৯৯৯ সনের ১৬ নং আইন) এর ৭ ধারাবলে সন্নিবেশিত
              </p>
            </div>
          </div>

      </div>
    </div>
  );
}