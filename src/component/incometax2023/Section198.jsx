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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৯৮। কতিপয় সংকেত বা সংবাদ প্রস্তুত বা প্রেরণ নিরোধ করিবার ক্ষমতা---</span> যদি কোনো কাস্টমস বা পুলিশ কর্মকর্তা বা বাংলাদেশ সশস্ত্র বাহিনীর কোনো সদস্যের সন্দেহ করিবার যুক্তিসংগত কারণ থাকে যে, কোনো পণ্য বাংলাদেশের অভ্যন্তরে অথবা বাংলাদেশ হইতে বাহিরে চোরাচালানের বা চোরাচালানের অভিপ্রায়ে অথবা অভিসন্ধির সহিত সম্পৃক্ত কোনো সংকেত বা সংবাদ কোনো যানবাহন, গৃহ বা স্থানে প্রস্তুত অথবা উক্ত স্থান হইতে প্রেরণ করা হইতেছে অথবা প্রস্তুত বা প্রেরণের উপক্রম হইতেছে, তাহা হইলে তিনি উক্ত যানবাহনে আরোহণ বা উক্ত গৃহে অথবা স্থানে প্রবেশ করিতে পারিবেন এবং সংকেত বা সংবাদটি প্রস্তুত বা প্রেরণ বন্ধ অথবা নিরোধ করিবার জন্য যুক্তিসঙ্গতভাবে প্রয়োজনীয় পদক্ষেপ গ্রহণ করিতে পারিবেন।
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