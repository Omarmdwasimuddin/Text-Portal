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
                মুল্য সংযোজন কর সম্মাননাপত্র
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
            <div className="space-y-6 text-gray-700">
                {/* Section 1 */}
                <div>
                <p className="mb-4">
                    <sup className='text-blue-500 cursor-pointer' title='ধারা ৩৬ক অর্থ আইন, ২০১১ (২০১১ সনের ১২ নং আইন) এর ৭২ ধারাবলে সন্নিবেশিত।'>১</sup>[৩৬ক। (১) পূর্ববর্তী অর্থ বৎসরের সকল দাখিলপত্র পেশকারী ব্যক্তি মূল্য সংযোজন কর সম্মাননাপত্র লাভের অধিকারী হইবেন;
                </p>

                <p className="mb-4">
                    (২) উপ-ধারা (১) এ উল্লিখিত ব্যক্তি সংশ্লিষ্ট অর্থ বৎসরের জন্য কমিশনার এর নিকট হইতে সরাসরি, বা প্রযোজ্য, ক্ষেত্রে অনলাইনে সম্মাননাপত্রের জন্য আবেদন করিতে পারিবেন;
                </p>

                <p className="mb-4">
                    (৩) বোর্ড, বিধি দ্বারা সম্মাননাপত্র প্রদানের পদ্ধতি, শর্ত ও উপযোগিতা নির্ধারণ করিতে পারিবে।]
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
                    <sup className="font-bold">১</sup>ধারা ৩৬ক অর্থ আইন, ২০১১ (২০১১ সনের ১২ নং আইন) এর ৭২ ধারাবলে সন্নিবেশিত।
                </p>
                </div>
            </div>
            </div>

      </div>
    </div>
  );
}