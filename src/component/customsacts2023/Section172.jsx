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
                    ত্রয়োবিংশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    অপরাধ, জরিমানা ও দণ্ড
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৭২। দণ্ড আরোপ কার্যক্রমের দায় ও পরিধি---</span> (১) যদি কোনো ব্যক্তি ধারা ১৭১ এর উপ- ধারা (১) এর টেবিলের কলাম (৩) এ বর্ণিত কোনো অপরাধ সংঘটন করেন বা সংঘটনে সহায়তা করেন, তাহা হইলে তিনি, উহার জন্য অন্য কোনো আইনে দণ্ডযোগ্য হইলে তাহা ক্ষুণ্ন না করিয়া, অতিরিক্ত হিসাবে এই আইনের অধীন দণ্ডিত হইবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) যদি কোনো ব্যক্তি এইরূপ কোনো পণ্য, যাহা এই আইনের বিধি- বিধান লঙ্ঘনের কারণে ধারা ১৭১ এর আওতায় জরিমানা আরোপযোগ্য অপরাধ সংঘটিত হইয়াছে জানিয়াও অথবা জানিবার যথেষ্ট সুযোগ থাকা সত্ত্বেও, দখলে রাখেন বা গ্রহণ করেন, তাহা হইলে উক্ত অপরাধ তিনি নিজেই সংঘটন করিয়াছেন বলিয়া গণ্য হইবে এবং তজ্জন্য তাহার বিরুদ্ধে সংশ্লিষ্ট ধারার অধীনে জরিমানা আরোপণীয় হইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) <span className="font-semibold">“আমদানি”</span> অর্থ বিদেশ হইতে কোনো পণ্য বাংলাদেশে আনয়ন করা;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) ধারা ১৭১ এর উপ- ধারা (১) এর টেবিলের কলাম (৩) এ উল্লিখিত অপরাধের জন্য কোনো ব্যক্তির বিরুদ্ধে একাধিক ধারার অধীন প্রশাসনিক ব্যবস্থা গ্রহণ করা যাইবে না।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৪) যদি কোনো ব্যক্তি দ্বিতীয়বার বা পরবর্তীতে একই অপরাধ সংঘটনের দায়ে অভিযুক্ত হন, তাহা হইলে তাহার বিরুদ্ধে প্রথমবারের অপরাধের জন্য আরোপিত, ক্ষেত্রমত, জরিমানা বা অর্থদন্ডের দ্বিগুণ পরিমাণ জরিমানা বা অর্থদণ্ড আরোপ করা যাইবে।
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