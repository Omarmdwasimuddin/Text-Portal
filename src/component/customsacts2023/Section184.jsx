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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৮৪। তল্লাশির সময় সংগৃহীত দলিল ও পণ্য সংরক্ষণ করা---</span> (১) এই আইনের অধীন যদি কোনো কাস্টমস কর্মকর্তা অথবা ক্ষমতাপ্রাপ্ত ব্যক্তি কোনো আইনানুগ তল্লাশি, পরিদর্শন, নিরীক্ষা অথবা পরীক্ষা পরিচালনা করেন এবং যুক্তিসংগত কারণে যদি তাহার এই বিশ্বাস জন্মে যে, উক্ত তল্লাশি, পরিদর্শন, নিরীক্ষা অথবা পরীক্ষাকালে তাহার হস্তগত হওয়া দলিলপত্র ও পণ্য এই আইনের অধীন সংঘটিত কোনো অপরাধের সাক্ষ্য হইবে অথবা এই আইনের অধীন কোনো অপরাধ সংঘটনের উদ্দেশ্যে ব্যবহৃত হইবে, তাহা হইলে উক্ত কর্মকর্তা অথবা তদ্‌কর্তৃক ক্ষমতাপ্রাপ্ত ব্যক্তি দলিলপত্রের বা, ক্ষেত্রমত, পণ্যের কর্তৃত্ব গ্রহণ এবং সংরক্ষণ করিতে পারিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) যদি কোনো কাস্টমস কর্মকর্তা অথবা তদ&কর্তৃক ক্ষমতাপ্রাপ্ত ব্যক্তি উপ- ধারা (১) এর অধীন কোনো দলিলের কর্তৃত্ব গ্রহণ করেন, তাহা হইলে উক্ত দলিলের স্বত্ব সংরক্ষণ করেন এইরূপ ব্যক্তির অনুরোধক্রমে, তিনি তদ্‌কর্তৃক অথবা তাহার পক্ষে প্রত্যায়িত উহার কাস্টমস সিলযুক্ত একটি কপি অবিকল কপি হিসাবে উক্ত ব্যক্তিকে প্রদান করিবেন।
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