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
                    ষষ্ঠ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    কাস্টমস শুল্ক আরোপ ও অব্যাহতি
                  </p>
                </div>
              </div>

                
              {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className="text-lg font-bold leading-tight text-black md:text-lg">
                    ২৫। শুল্ক ও কর হইতে অব্যাহতি প্রদানের ক্ষমতা---
                  </span>{" "}
                  (১) সরকার, বোর্ডের সহিত পরামর্শক্রমে, জনস্বার্থে, সরকারি গেজেটে প্রজ্ঞাপন দ্বারা,
                  উপযুক্ত শর্ত, সীমা অথবা বিধি-নিষেধ, যদি থাকে, আরোপ সাপেক্ষে, কোনো পণ্য আমদানি
                  বা রপ্তানির উপর আরোপনীয় সমুদয় বা আংশিক শুল্ক ও কর হইতে অব্যাহতি প্রদান করিতে পারিবে:
                </p>

                <p className="mb-4 text-sm">
                  তবে শর্ত থাকে যে, যদি কোনো অর্থ-বৎসরে কোনো পণ্যের ক্ষেত্রে শুল্ক অব্যাহতি প্রদান
                  করা হয়, তাহা হইলে সেই বৎসরে একবারের অধিক শুল্কহার বৃদ্ধি করা যাইবে না।
                </p>

                <p className="mb-4 text-sm">
                  (২) সরকার, বোর্ডের সহিত পরামর্শক্রমে, জনস্বার্থে, সরকারি গেজেটে প্রজ্ঞাপন দ্বারা,
                  সীমা অথবা বিধি-নিষেধ, যদি থাকে, আরোপ সাপেক্ষে, কোনো আন্তর্জাতিক চুক্তি বা
                  দ্বিপক্ষীয় চুক্তি পারস্পরিক ভিত্তিতে (reciprocal basis) বাস্তবায়নের জন্য, কোনো
                  পণ্য বা পণ্য শ্রেণি আমদানি বা রপ্তানির উপর আরোপনীয় সমুদয় বা আংশিক শুল্ক ও কর
                  হইতে অব্যাহতি প্রদান করিতে পারিবে।
                </p>

                <p className="mb-4 text-sm">
                  (৩) সরকার, বিশেষ আদেশ দ্বারা, প্রত্যেক ক্ষেত্রে কারণ উল্লেখপূর্বক, আমদানিকৃত কোনো
                  পণ্য বা পণ্য চালানের উপর আমদানি পর্যায়ে আরোপযোগ্য সমুদয় বা আংশিক শুল্ক ও কর
                  হইতে অব্যাহতি প্রদান করিতে পারিবে।
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