import React from 'react';
import Link from 'next/link';

export default function LawPage() {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Banner Section */}
        <div className="relative px-4 py-8 text-white bg-gradient-to-r from-green-600 to-green-800 md:px-8">
          <div className="text-center">
            <h1 className="mb-2 text-2xl font-bold md:text-4xl">
              মূল্য সংযোজন কর আইন, ১৯৯১
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              ( ১৯৯১ সনের ২২ নং আইন )
            </p>
            <div className="inline-block px-4 py-1 mt-3 bg-green-500 rounded-full shadow-md">
              <p className="text-sm font-medium md:text-base">[ ৩০ জুন, ১৯৯১ ]</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/regulations/acts/vat-acts/value-added-tax-act"
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
        <div className="border-b border-gray-300 bg-blue-25">
          <div className="p-6 text-center">
            <h1 className="mb-6 text-lg font-bold text-gray-800 md:text-lg">
              পণ্য ও সেবার উপর মূল্য সংযোজন কর আরোপের বিধানকরণকল্পে প্রণীত আইন৷
            </h1>
            <div className="max-w-4xl mx-auto leading-relaxed text-left text-gray-700 text-md">
              <p className="mb-3">যেহেতু মূল্য সংযোজন কর আরোপ করার উদ্দেশ্যে বিধান করা সমীচীন ও প্রয়োজনীয়;</p>
              <p>সেহেতু এতদ্‌দ্বারা নিম্নরূপ আইন করা হইল:-</p>
            </div>
          </div>
        </div>

        {/* Header Section */}
        <div className="">
          <div className="flex flex-col md:flex-row">
            <div className="p-6">
              <div className="space-y-6 text-justify text-black">
                {/* Section 1 */}
                <div>
                  <p className="mb-4">
                    <span className='text-xl font-bold leading-tight text-gray-950 md:text-xl'>১৷ সংক্ষিপ্ত শিরোনামা,<sup className='text-blue-500' title='“, প্রয়োগ” কমা ও শব্দটি  অর্থ আইন, ১৯৯৮ (১৯৯৮ সনের ১৪ নং আইন) এর ৭ ধারাবলে বিলুপ্ত'>১</sup>[***] ও প্রবর্তন</span>---(১) এই আইন <Link href="/regulations/acts/vat-acts/value-added-tax-act" className='text-blue-500'> সংযোজন কর আইন, ১৯৯১</Link> নামে অভিহিত হইবে৷
                  </p>
                  
                  <p className="mb-4">
                    (২) এই আইনের-
                  </p>
                  
                  <div className="ml-6 space-y-3">
                    <p>
                      (ক) ধারা ১৫, ১৬, ১৭, ১৮, ২০, ২১, ২২ এবং ৭২ ২রা জুন, ১৯৯১ ইং মোতাবেক ১৮ই জ্যৈষ্ঠ, ১৩৯৮ বাং তারিখে বলবৎ হইয়াছে বলিয়া গণ্য হইবে; এবং
                    </p>
                    
                    <p>
                      (খ) উপরে উল্লিখিত ধারাসমূহ ব্যতীত অন্যান্য ধারাসমূহ ১লা জুলাই, ১৯৯১ ইং মোতাবেক ১৬ই আষাঢ়, ১৩৯৮ বাং তারিখে বলবৎ হইবে৷
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="">
          <div className="p-6">
            <div className="w-1/2 pb-2 mb-4 border-b border-gray-400">
              {/* Horizontal line */}
            </div>
            <p className="text-xs italic text-gray-600">
              ১ ", প্রয়োগ" কমা ও শব্দটি অর্থ আইন, ১৯৯৮ (১৯৯৮ সনের ১৪ নং আইন) এর ৭ ধারাবলে বিলুপ্ত
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}