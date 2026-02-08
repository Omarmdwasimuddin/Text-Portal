import React from 'react';
import Link from 'next/link';

export default function LawPage() {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-xl">
        {/* Banner Section */}
        <div className="relative px-4 py-8 text-white bg-gradient-to-r from-green-700 to-green-700 md:px-8">
          <div className="text-center">
            <h1 className="mb-2 text-xl md:text-2xl">
              কাস্টমস আইন, ২০২৩
            </h1>
            <p className="text-sm md:text-sm opacity-90">
              ( ২০২৩ সনের ৫৭ নং আইন )
            </p>
            <div className="inline-block px-4 py-1 mt-3 bg-green-500 rounded-full shadow-md">
              <p className="text-sm font-medium md:text-sm">[ ১৩ নভেম্বর, ২০২৩ ]</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/regulations/acts/customs-acts/customs-act-2023"
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
                

              <div className="py-2 text-black bg-gradient-to-r from-green-300 to-green-300 md:px-8">
                <div className="text-center">
                  <h1 className="text-lg font-bold">
                    নবম অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    যানবাহনের আগমন এবং প্রস্থান
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৪৭। কাস্টমস এর নিয়ন্ত্রণাধীন পণ্য---</span> (১) শুল্ক ও কর প্রদানের জন্য, দায়বদ্ধ হউক বা না হউক, বাংলাদেশে প্রবেশ করে বা বাংলাদেশ হইতে বাহিরে যায় এইরূপ সকল পণ্য কাস্টমস এর নিয়ন্ত্রণাধীন থাকিবে।
                </p>

                <p className="mb-4 text-sm">
                  (২) আমদানিকৃত পণ্য বাংলাদেশে আগমনের সময় হইতে এই আইন অনুসারে দেশীয় ভোগের জন্য ছাড় বা সরকারের নিকট হস্তান্তর বা সমর্পণ না করা পর্যন্ত কাস্টমস এর নিয়ন্ত্রণাধীন থাকিবে।
                </p>

                <p className="mb-4 text-sm">
                  (৩) আমদানিকৃত পণ্য কাস্টমস ওয়্যারহাউস, অস্থায়ী আমদানি, ইনওয়ার্ড প্রসেসিং, ট্রান্সশিপমেন্ট, ট্রানজিট বা মজুদের জন্য কাস্টমস পদ্ধতিতে ন্যস্ত থাকিলে, উক্ত পণ্য কাস্টমস এর নিয়ন্ত্রণাধীন থাকিবে এবং কেবল উক্ত পণ্য রপ্তানি বা এই আইনের অধীন অনুমোদিত সংশ্লিষ্ট পদ্ধতিতে দেশীয় ভোগের জন্য ছাড় বা সরকারের নিকট হস্তান্তর বা পরিত্যাগ করা হইলে উক্ত নিয়ন্ত্রণ সমাপ্ত হইবে।
                </p>

                <p className="mb-4 text-sm">
                  (৪) রপ্তানিতব্য পণ্য কোনো কাস্টমস এলাকায় আনয়নের সময় হইতে বাংলাদেশের বাহিরে কোনো স্থানে রপ্তানি বা সরকারের নিকট হস্তান্তর বা পরিত্যাগ না করা পর্যন্ত কাস্টমস এর নিয়ন্ত্রণাধীন থাকিবে।
                </p>

                <p className="mb-4 text-sm">
                  (৫) সরকারি গেজেট প্রজ্ঞাপনের মাধ্যমে স্ক্যানিং করা হইতে অব্যাহতি প্রদান করা হয় নাই এইরূপ কোনো পণ্য ইলেক্ট্রনিক পদ্ধতিতে স্ক্যানিং করা ব্যতীত দেশীয় ভোগ বা ওয়্যারহাউসিং এর জন্য বা বাংলাদেশের বাহিরে কোনো স্থানে রপ্তানির জন্য কাস্টমস এর নিয়ন্ত্রণ হইতে ছাড় প্রদান করা যাইবে না।
                </p>

              </div>
                
                
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="">
          <div className="p-6">
            <div className="w-1/2 pb-2 mb-4 border-b border-gray-700">
              {/* Horizontal line */}
            </div>
            <p className="text-xs italic text-gray-950">
              
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}