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
                    পঞ্চদশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    ইনওয়ার্ড ও আউটওয়ার্ড প্রসেসিং পদ্ধতি
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১০৪। ইনওয়ার্ড প্রসেসিং পদ্ধতি---</span> এই আইনের ষোড়শ অধ্যায়ে উল্লিখিত ক্ষেত্র ব্যতীত এবং এই অধ্যায়ে উল্লিখিত আবশ্যকতা এবং পণ্য ঘোষণা ও ছাড় সংক্রান্ত প্রয়োজনীয় আনুষ্ঠানিকতা সম্পাদন সাপেক্ষে, বিধি দ্বারা নির্ধারিত পদ্ধতিতে, কমিশনার অব কাস্টমস মেরামত, আংশিক পরিবর্তন বা প্রসেসিং এর জন্য বাংলাদেশে অস্থায়ীভাবে আমদানিকৃত পণ্যের উপর প্রযোজ্য আমদানি শুল্ক ও কর পরিশোধ নিশ্চিত করিবার লক্ষ্যে, ব্যাংক গ্যারান্টি প্রদান সাপেক্ষে, উক্ত পণ্য ইনওয়ার্ড প্রসেসিং পদ্ধতির অধীন শুল্ক ও কর পরিশোধ ব্যতিরেকে ছাড় করিতে পারিবেন।
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