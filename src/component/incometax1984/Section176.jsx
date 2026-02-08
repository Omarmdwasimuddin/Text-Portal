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
                    চতুর্বিংশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    কাস্টমস কর্মকর্তা কর্তৃক ক্ষমতা প্রয়োগ (enforcement)
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৭৬। কাস্টমস কর্মকর্তা কর্তৃক দলিল ও নথিপত্র দখলে নেওয়া এবং রাখা---</span> (১) কোনো কাস্টমস কর্মকর্তা, কোনো ঘোষণা প্রসঙ্গে উপস্থাপিত অথবা এই আইনের অধীন আবশ্যকতার কারণে দাখিলকৃত কোনো দলিলপত্র অথবা রেকর্ডপত্র দখলে লইতে এবং তত্ত্বাবধানে রাখিতে পারিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) যেক্ষেত্রে একজন কাস্টমস কর্মকর্তা, উপ- ধারা (১) এর অধীন, কোনো দলিল বা রেকর্ড দখলে নেন, সেই ক্ষেত্রে উক্ত দলিল বা রেকর্ডের স্বত্ব সংরক্ষণ করেন এইরূপ ব্যক্তির অনুরোধক্রমে উক্ত কর্মকর্তা তদ্‌কর্তৃক অথবা তাহার পক্ষে প্রত্যায়িত দলিলের কাস্টমস সিলযুক্ত একটি কপি অবিকল নকল হিসাবে সেই ব্যক্তিকে প্রদান করিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) উপ- ধারা (২) এর অধীন প্রত্যায়িত প্রতিটি কপি সকল আদালতে এইরূপে সাক্ষ্য হিসাবে গ্রহণযোগ্য হইবে, যেন উহাই মূল কপি।
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