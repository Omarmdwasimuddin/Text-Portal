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
                    একবিংশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    ব্যাগেজ এবং ডাকযোগে আমদানিকৃত অথবা রপ্তানিকৃত পণ্য সম্পর্কিত বিশেষ বিধানাবলি
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৫৪। যাত্রী অথবা ক্রু কর্তৃক ব্যাগেজ ঘোষণা---</span> বাংলাদেশে আগমনকারী কোনো যাত্রী অথবা ক্রু তাহার ব্যাগেজ বা ব্যাগেজের পণ্য খালাসের উদ্দেশ্যে, বিধি দ্বারা নির্ধারিত পদ্ধতিতে, যথাযথ কর্মকর্তার নিকট একটি মৌখিক বা লিখিত ঘোষণা প্রদান করিবেন এবং তাহার ব্যাগেজ এবং ব্যাগেজের পণ্য অথবা তাহার সহিত বহনকৃত পণ্য সম্পর্কে উক্ত কর্মকর্তার সকল প্রশ্নের জবাব প্রদান করিবেন এবং উক্ত ব্যাগেজ বা ব্যাগেজের পণ্য পরীক্ষার জন্য উপস্থাপন করিবেন।
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