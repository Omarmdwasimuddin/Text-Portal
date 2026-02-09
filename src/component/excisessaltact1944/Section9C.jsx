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
                <div>
                    <p className="mb-4">
                        <span className="text-xl font-bold leading-tight text-gray-950 md:text-xl">
                            ৬২ক। তথ্যের গোপনীয়তা রক্ষণ---
                        </span>
                        <sup className='text-blue-500' title='ধারা(৬২ক) অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৯০ ধারাবলে সন্নিবেশিত।'>১</sup>[নিম্নবর্ণিত সকল বিবরণ এবং তথ্যাদি গোপনীয় থাকিবে, যথা :-]

                        <br /><br />

                        (ক) এই আইনের অধীনে গৃহিত যে কোন বিবৃতি, দাখিলপত্র, বা ধারা ২৪ এর উপ-ধারা (২) অনুযায়ী প্রাপ্ত তথ্য ও দলিলাদি এবং ধারা ২৬ অনুযায়ী আটককৃত যে কোন দলিলাদি এবং ধারা ৩১ অনুযায়ী নিবন্ধিত ব্যক্তি কর্তৃক সংরক্ষিত পুস্তক ও নথিপত্র বা তৎকর্তৃক সরবরাহকৃত যে কোন বাণিজ্যিক দলিলাদি;

                        <br /><br />

                        (খ) এই আইনের অধীনে গৃহিত কোন সাক্ষ্য বা এফিডেভিট বা জবানবন্দী;

                        <br /><br />

                        (গ) এই আইনের অধীনে দাবী আদায় সংক্রান্ত যে কোন দলিলাদি।
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
                        <sup className="font-bold">১</sup> ধারা(৬২ক) অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৯০ ধারাবলে সন্নিবেশিত।
                    </p>

                </div>
            </div>
        </div>




      </div>
    </div>
  );
}