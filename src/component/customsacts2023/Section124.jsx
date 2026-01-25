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
                    ষোড়শ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    ওয়্যারহাউসিং
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১২৪। ওয়্যারহাউসে রক্ষিত পণ্যের ক্ষতি হইলে বা অবনতি ঘটিলে উহার পুনঃশুল্কায়ন---</span> মূল্যভিত্তিক শুল্ক আরোপযোগ্য কোনো পণ্য ওয়্যারহাউসিং এর জন্য ছাড় করিবার পর হইতে দেশীয় ভোগের জন্য খালাস করিবার পূর্ব পর্যন্ত কোনো অনিবার্য দুর্ঘটনা অথবা কারণে যদি ক্ষতিগ্রস্ত অথবা অপচায়িত হয়, তাহা হইলে মালিক ইচ্ছা করিলে ক্ষতিগ্রস্ত অথবা অপচায়িত অবস্থায় উহাদের মূল্য কোনো কাস্টমস কর্মকর্তা কর্তৃক নিরূপণ করাইতে পারিবেন এবং তদনুসারে উহাদের উপর আরোপযোগ্য শুল্ক হ্রাসকৃত মূল্যের অনুপাতে হ্রাস করা হইবে এবং মালিকের স্বেচ্ছায় প্রথমে সম্পাদিত বন্ড প্রতিস্থাপন করিবার জন্য হ্রাসকৃত শুল্কের দ্বিগুণ পরিমাণ অর্থের একটি নূতন বন্ড সম্পাদন করা যাইবে।
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