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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৩৮। ট্রান্সশিপমেন্টের ক্ষেত্রে আমদানিকারকের বাধ্যবাধকতা---</span> ট্রান্সশিপমেন্ট পদ্ধতির অধীন পণ্য ন্যস্ত করিয়াছেন এইরূপ কোনো আমদানিকারক নিম্নলিখিত বিষয়ের জন্য দায়ী থাকিবেন, যথা:-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক) কাস্টমস বন্দর বা কাস্টমস বিমানবন্দরের মধ্যে বোর্ড কর্তৃক এতদুদ্দেশ্যে অনুমোদিত স্থানে আমদানিকারী নৌযান বা উড়োজাহাজ হইতে নামানো পণ্যের নিরাপদ সংরক্ষণ;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (খ) পণ্য শনাক্তকরণ নিশ্চিত করিবার জন্য কোনো কাস্টমস কর্মকর্তা কর্তৃক গৃহীত কোনো পদক্ষেপ প্রতিপালন;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (গ) নির্ধারিত সময়সীমার মধ্যে রপ্তানিকারী বাহনে পণ্য বোঝাই;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ঘ) পণ্য ঘোষণা ও ছাড়ের জন্য প্রয়োজনীয় আনুষ্ঠানিকতা সম্পন্ন করা; এবং
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ঙ) ট্রান্সশিপমেন্ট পদ্ধতি সম্পর্কিত বিধি- বিধান প্রতিপালন ।
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