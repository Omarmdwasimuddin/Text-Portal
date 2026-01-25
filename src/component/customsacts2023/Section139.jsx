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
                    সপ্তদশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    ট্রান্সশিপমেন্ট
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৩৯। মেরামতের সময় পণ্য নামানো---</span> (১) যাত্রা অথবা সমুদ্রযাত্রা সম্পন্ন করিবার পূর্বে যদি কোনো যানবাহন মেরামতের জন্য কোনো কাস্টমস স্টেশনে প্রবেশ করিতে বাধ্য হয়, তাহা হইলে উক্ত যানবাহনের ভারপ্রাপ্ত ব্যক্তির আবেদনক্রমে যথাযথ কর্মকর্তা পণ্য অথবা উহার অংশবিশেষ নামানোর, এবং উক্ত মেরামতকালীন উহা একজন যথাযথ কর্মকর্তার তত্ত্বাবধানে রাখিবার, এবং বিনা শুল্কে উহা বোঝাই ও রপ্তানি করিবার অনুমতি প্রদান করিতে পারিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) উপ- ধারা (১) এর অধীন তত্ত্বাবধান সংশ্লিষ্ট সমুদয় ব্যয় সংশ্লিষ্ট যানবাহনের ভারপ্রাপ্ত ব্যক্তি বহন করিবেন।
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