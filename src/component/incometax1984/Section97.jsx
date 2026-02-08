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
                    দ্বাদশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    পণ্যের ঘোষণা এবং ছাড়করণ
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৯৭। অথরাইজড ইকোনোমিক অপারেটর (Authorized Economic Operator)---</span> (১) বোর্ড, বিধি দ্বারা নির্ধারিত পদ্ধতি সাপেক্ষে, বাংলাদেশে প্রতিষ্ঠিত কোনো ব্যক্তিকে, যিনি এই আইন ও বিধি উপযুক্ত পর্যায় পর্যন্ত প্রতিপালন করিয়াছেন এবং বোর্ড কর্তৃক নির্ধারিত বিধানের মান্যতা (compliance) বা অমান্যতা (Non- compliance) এর ঝুঁকি সম্পর্কিত অন্যান্য মানদণ্ড পূরণ করিয়াছেন, অথরাইজড ইকোনোমিক অপারেটর এর মর্যাদা প্রদান করিতে পারিবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) অথরাইজড ইকোনোমিক অপারেটর, বোর্ড কর্তৃক নির্ধারিত শর্ত সাপেক্ষে সহজীকৃত কাস্টমস আনুষ্ঠানিকতা ব্যবহার করিবার যোগ্যতাসম্পন্ন হইবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) বাংলাদেশ ব্যতীত অন্য কোনো দেশে বা ভূখন্ডে প্রতিষ্ঠিত কোনো ব্যক্তিকে এই ধারার অধীন অথরাইজড ইকোনোমিক অপারেটর সুবিধা মঞ্জুর করিবার জন্য সরকার আন্তর্জাতিক চুক্তি করিতে পারিবে, যদি সরকার এই মর্মে সন্তুষ্ট হয় যে, উক্ত দেশ বা ভূখণ্ডের প্রাসঙ্গিক আইনে বর্ণিত শর্তাবলি ও বাধ্যবাধকতা এই ধারার অধীন নির্ধারিত শর্তাবলি ও বাধ্যবাধকতার সমতুল্য হয় এবং উক্ত সুবিধা বাংলাদেশে প্রতিষ্ঠিত ব্যক্তিকে পারস্পরিক ভিত্তিতে প্রদান করা হয়।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৪) উপ- ধারা (৩) এ উল্লিখিত আন্তর্জাতিক চুক্তি সাপেক্ষে, বোর্ড এই ধারার অধীন অথরাইজড ইকোনোমিক অপারেটরকে প্রদত্ত সুবিধা, বিদেশি রাষ্ট্র বা ভূখণ্ডের প্রাসঙ্গিক আইনে বর্ণিত শর্তাবলি পূরণ ও বাধ্যবাধকতা প্রতিপালন করিয়াছে এইরূপ কোনো ব্যক্তিকে, মঞ্জুর করিতে পারিবে।
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