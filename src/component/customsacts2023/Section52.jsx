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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৫২। রপ্তানি পণ্য বোঝাই করিবার পূর্বে বহির্গমন এন্ট্রি বা পণ্য বোঝাইয়ের আদেশ গ্রহণ---</span> (১) যথাযথ কর্মকর্তা ভিন্নরূপ নির্দেশনা প্রদান না করিলে, যাত্রী ব্যাগেজ এবং মেইল ব্যাগ ব্যতীত অন্য কোনো পণ্য কোনো যানবাহনে বোঝাই করা যাইবে না, যতক্ষণ পর্যন্ত না উক্ত পণ্য এই আইন অনুসারে রপ্তানি পদ্ধতির অধীন ন্যস্ত করা হয় এবং-
                </p>

                <p className="mb-4 text-sm">
                  (ক) নৌযানের ক্ষেত্রে, উক্ত নৌযান বহির্গমন এন্ট্রির জন্য যথাযথ কর্মকর্তার নিকট নৌযানের মাস্টার কর্তৃক স্বাক্ষরিত লিখিত আবেদন করা হয় এবং উক্ত এন্ট্রির জন্য উহার উপর আদেশ প্রদান করা হয়; এবং
                </p>

                <p className="mb-4 text-sm">
                  (খ) অন্যান্য যানবাহনের ক্ষেত্রে, যানবাহনে পণ্য বোঝাই করিবার অনুমতি পাওয়ার জন্য যথাযথ কর্মকর্তার নিকট যানবাহনের ভারপ্রাপ্ত ব্যক্তি কর্তৃক স্বাক্ষরিত লিখিত আবেদন করা হয় এবং উহার উপর পণ্য বোঝাইয়ের আদেশ প্রদান করা হয়।
                </p>

                <p className="mb-4 text-sm">
                  (২) এই ধারার অধীন পেশকৃত প্রত্যেক আবেদনপত্রে বোর্ড কর্তৃক নির্ধারিত বিবরণ উল্লেখ থাকিতে হইবে।
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