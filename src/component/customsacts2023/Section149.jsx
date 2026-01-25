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
                    ঊনবিংশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    রপ্তানি বা জাহাজীকরণ এবং পুনরায় অবতরণ
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৪৯। কাস্টমস স্টেশনে প্রত্যাবর্তনকারী যানবাহনের প্রবেশ এবং পণ্য নামানো---</span> (১) ধারা ১৪৮ এ উল্লিখিত দুইটি ক্ষেত্রের মধ্যে যে কোনো একটি ক্ষেত্রে যানবাহনের ভারপ্রাপ্ত ব্যক্তি সংশ্লিষ্ট যানবাহন কাস্টমস স্টেশনের অভ্যন্তরে প্রবেশ করানোর জন্য এন্ট্রি করিতে পারিবেন এবং পণ্যের মালিক অতঃপর, যানবাহনটির ভারপ্রাপ্ত ব্যক্তির সম্মতিক্রমে, এই আইন এবং বিধির বিধান অনুসারে উহা নামাইতে পারিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) প্রত্যেক ক্ষেত্রে কোনো পরিশোধিত রপ্তানি শুল্ক সংশ্লিষ্ট পণ্যের মালিকের আবেদনক্রমে, উহা নামানোর এক বৎসরের মধ্যে, ফেরত প্রদান করা হইবে এবং উক্ত পণ্যের মালিককে প্রত্যর্পণ অথবা শুল্ক (কাস্টমস শুল্ক বা অন্য কোনো কর হউক না কেন) ফেরত (repayment) প্রদান হিসাবে প্রদত্ত অর্থ তাহার নিকট হইতে আদায় করা হইবে অথবা ফেরতযোগ্য অর্থের সহিত সমন্বয় করা হইবে।
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