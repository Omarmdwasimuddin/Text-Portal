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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৭৭। যুক্তিসঙ্গত কারণে তল্লাশির ক্ষমতা---</span> (১) যদি যথাযথ কর্মকর্তার বিশ্বাস করিবার কারণ থাকে যে, কোনো ব্যক্তি বাজেয়াপ্তযোগ্য পণ্য অথবা এতদ্‌সম্পর্কিত কোনো দলিলপত্র স্বয়ং বহন করিতেছেন, তাহা হইলে তিনি উক্ত ব্যক্তিকে বাংলাদেশের কাস্টমস জলসীমার মধ্যে অবস্থানকারী কোনো জাহাজ হইতে অবতরণ অথবা জাহাজে আরোহণ করিবার সময়ে অথবা বাংলাদেশে আগমনকারী অথবা বাংলাদেশ হইতে গমনোদ্যত অন্য কোনো যানবাহন হইতে নামার অথবা যানবাহনে ওঠার সময়ে অথবা বাংলাদেশে প্রবেশ অথবা বাংলাদেশ হইতে প্রস্থানোদ্যত হওয়ার সময়ে তাহাকে তল্লাশি করিতে পারিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) উপ- ধারা (১) এর বিধানাবলি ক্ষুণ্ন না করিয়া যথাযথ কর্মকর্তা কোনো ব্যক্তিকে তল্লাশি করিতে পারিবেন, যদি তাহার বিশ্বাস করিবার কারণ থাকে যে, উক্ত ব্যক্তি স্বয়ং এই আইনের অধীন চোরাচালানকৃত প্লাটিনাম, কোনো রেডিওঅ্যাকটিভ খনিজদ্রব্য, স্বর্ণ, রৌপ্য, মহামূল্যবান পাথর, অথবা প্লাটিনামের, রেডিওঅ্যাকটিভ খনিজদ্রব্যের, স্বণের্র, রৌপ্যের অথবা মহামূল্যবান পাথরের তৈরী দ্রব্য, অথবা মুদ্রা, অথবা সরকার কর্তৃক গেজেটে প্রজ্ঞাপিত অন্য কোনো পণ্য অথবা পণ্যশ্রেণি অথবা পূর্বোল্লিখিত এক বা একাধিক কোনো পণ্যের সহিত সংশ্লিষ্ট কোনো দলিলপত্র বহন করিতেছেন।
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