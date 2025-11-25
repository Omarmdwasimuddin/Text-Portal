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
                    <sup className='text-blue-500 cursor-pointer' title='৩৭ক।'>১</sup>[<span className="text-xl font-bold leading-tight text-gray-950 md:text-xl">৩৭ক। স্পেশাল জজ কর্তৃক বিচারকার্য পরিচালনা---</span>(১) Code of Criminal Procedure, 1898 (Act V of 1898) অথবা অন্য কোন আইনে যাহা কিছুই থাকুক না কেন, এই আইনের ধারা ৩৭ এর উপ-ধারা (২) এ বর্ণিত অপরাধসমূহের জন্য স্পেশাল জজ কর্তৃক দণ্ডারোপ করার ক্ষেত্রে তদ্কর্তৃক উহা এমনভাবে বিচার্য হইবে যেন উক্ত অপরাধসমূহ Criminal Law Amendment Act, 1958 (Act No. XL of 1858) এর তফসিলভুক্ত কোন অপরাধ।
                </p>

                <p className="mb-4">
                    (২) স্পেশাল জজ, সহকারী কমিশনারের নিম্নে নহেন এমন পদমর্যাদার কোন মূল্য সংযোজন কর কর্মকর্তার নিকট হইতে, বোর্ডের পূর্বানুমোদন সাপেক্ষে, লিখিত অভিযোগ ব্যতীত, এই আইনের অধীন কোন অপরাধ বিচারার্থ গ্রহণ করিবেন না।
                </p>

                <p className="mb-4">
                    (৩) উপ-ধারা (২) এ উল্লিখিত মূল্য সংযোজন কর কর্মকর্তার দপ্তর বা এখতিয়ারাধীন এলাকা বিচারকার্য পরিচালনাধীন স্পেশাল জজের এখতিয়ারাধীন এলাকার অন্তর্ভুক্ত হইবে।]
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
                <sup className="font-bold">১</sup>ধারা (৩৭) এর পর নুতন উপ-ধারা (৩৭ক এবং ৩৭খ) অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৮৫ ধারাবলে সন্নিবেশিত।
            </p>
            </div>
        </div>
        </div>

      </div>
    </div>
  );
}