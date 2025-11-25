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
                            <sup className='text-blue-500' title='ধারা ৪১ক, ৪১খ, ৪১গ, ৪১ঘ, ৪১ঙ, ৪১চ, ৪১ছ, ৪১জ, ৪১ঝ, ৪১ঞ এবং ৪১ট অর্থ আইন, ২০১১ (২০১১ সনের ১২ নং আইন) এর ৭৬ ধারাবলে সন্নিবেশিত।'>১</sup><span className="text-xl font-bold leading-tight text-black md:text-xl">৪১ক। বিকল্প বিরোধ-নিষ্পত্তি---</span> (১) এই আইনের অন্য কোন বিধানে যাহা কিছুই থাকুক না কেন, মূল্য সংযোজন কর কর্তৃপক্ষ বা শুল্ক ও মূল্য সংযোজন কর আপীল কর্তৃপক্ষের নিকট নিম্পন্নাধীন রহিয়াছে, এইরূপ ন্যায়নির্ণয়ন অথবা ধারা ৪১গ এ বর্ণিত কোন বিরোধের ক্ষেত্রে, কোন ব্যক্তি সংক্ষুব্ধ হইলে তিনি এই আইন ও বিধিতে বর্ণিত পদ্ধতি অনুযায়ী বিকল্প বিরোধ-নিষ্পত্তি প্রক্রিয়ার মাধ্যমে উক্ত বিরোধ নিষ্পত্তির জন্য সংশ্লিষ্ট সহায়তাকারীর নিকট আবেদন করিতে পারিবেন।
                        </p>

                        <p className="mb-4">
                            (২) ন্যায়নির্ণয়ন বা আপীল চূড়ান্ত হইবার পূর্বে এই ধারার অধীন বিকল্প বিরোধনিষ্পত্তি প্রক্রিয়ার আওতায় প্রয়োজনীয় ব্যবস্থা গ্রহণ করিতে হইবে।
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
                <sup className="font-bold">১</sup>ধারা ৪১ক, ৪১খ, ৪১গ, ৪১ঘ, ৪১ঙ, ৪১চ, ৪১ছ, ৪১জ, ৪১ঝ, ৪১ঞ এবং ৪১ট অর্থ আইন, ২০১১ (২০১১ সনের ১২ নং আইন) এর ৭৬ ধারাবলে সন্নিবেশিত।
            </p>
            </div>
        </div>
        </div>

      </div>
    </div>
  );
}