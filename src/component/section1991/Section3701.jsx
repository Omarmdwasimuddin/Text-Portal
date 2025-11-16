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
                স্পেশাল জজ কর্তৃক বিচারকার্য পরিচালনা
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
            <div className="space-y-6 text-gray-700">
                {/* Section 1 */}
                <div>
                <p className="mb-4">
                    <sup className='text-blue-500 cursor-pointer' title='৩৭ক।'>১</sup>[৩৭ক।(১) Code of Criminal Procedure, 1898 (Act V of 1898) অথবা অন্য কোন আইনে যাহা কিছুই থাকুক না কেন, এই আইনের ধারা ৩৭ এর উপ-ধারা (২) এ বর্ণিত অপরাধসমূহের জন্য স্পেশাল জজ কর্তৃক দণ্ডারোপ করার ক্ষেত্রে তদ্কর্তৃক উহা এমনভাবে বিচার্য হইবে যেন উক্ত অপরাধসমূহ Criminal Law Amendment Act, 1958 (Act No. XL of 1858) এর তফসিলভুক্ত কোন অপরাধ।
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
        <div className="border-t border-gray-300">
        <div className="p-6">
            <div className="w-1/2 border-b border-gray-400 pb-2 mb-4">
            {/* Horizontal line */}
            </div>
            <div className="text-xs text-gray-600 italic space-y-2">
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