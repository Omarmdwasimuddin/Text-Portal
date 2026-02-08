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


        {/* New Heading and Paragraph Section */}
        <div className="border-b border-gray-400 bg-blue-25">
          <div className="p-6 text-center">
            <h1 className="mb-6 text-sm font-bold text-black md:text-sm">
              Customs Act, 1969 রহিতক্রমে যুগোপযোগী করিয়া নূতনভাবে প্রণয়নকল্পে প্রণীত আইন
            </h1>
            <div className="max-w-4xl mx-auto text-sm leading-relaxed text-left text-black">
              <p className="mb-3">যেহেতু Customs Act, 1969 (Act No. IV of 1969) রহিতক্রমে যুগোপযোগী করিয়া নূতনভাবে প্রণয়ন করা সমীচীন ও প্রয়োজনীয়;</p>
              <p>সেহেতু এতদ্দ্বারা নিম্নরূপ আইন করা হইল:-</p>
            </div>
          </div>
        </div>

        

        {/* Header Section */}
        <div className="">
          <div className="flex flex-col md:flex-row">
            <div className="p-6">
              <div className="space-y-6 text-justify text-black ">
                

              <div className="py-2 text-black bg-gradient-to-r from-green-300 to-green-300 md:px-8">
                <div className="text-center">
                  <h1 className="text-lg font-semibold ">
                    প্রথম অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    প্রারম্ভিক
                  </p>
                </div>
              </div>

                
                {/* Section 1 */}
                <div>
                  <p className="mb-4 text-sm">
                    <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৷ সংক্ষিপ্ত শিরোনাম ও প্রবর্তন</span>---(১) এই আইন <Link href="/regulations/acts/customs-acts/customs-act-2023" className='text-blue-600 hover:underline hover:text-blue-700'>কাস্টমস আইন, ২০২৩</Link> নামে অভিহিত হইবে৷
                  </p>
                  
                  <p className="mb-4 ml-10 text-sm">
                    (২) সরকার, সরকারি গেজেটে প্রজ্ঞাপন দ্বারা, যেই তারিখ নির্ধারণ করিবে, সেই তারিখে এই আইন কার্যকর হইবে।
                  </p>
                  
                 <p className='mb-4 ml-10 text-sm'>
                    * এস, আর, ও নং ১৫৩-আইন/২০২৪, তারিখ: ২৮ মে, ২০২৪ ইং দ্বারা ২৩ জ্যৈষ্ঠ, ১৪৩১ বঙ্গাব্দ মোতাবেক ৬ জুন, ২০২৪ খ্রিস্টাব্দ উক্ত আইন কার্যকর হইবে।
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
            
          </div>
        </div>
      </div>
    </div>
  );
}