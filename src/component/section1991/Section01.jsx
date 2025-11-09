import React from 'react';
import Link from 'next/link';

export default function LawPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Banner Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-8 px-4 md:px-8 relative">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              মূল্য সংযোজন কর আইন, ১৯৯১
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              ( ১৯৯১ সনের ২২ নং আইন )
            </p>
            <div className="mt-3 inline-block bg-green-500 px-4 py-1 rounded-full shadow-md">
              <p className="text-sm md:text-base font-medium">[ ৩০ জুন, ১৯৯১ ]</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/regulations/acts/vat-acts/value-added-tax-act"
            className="absolute top-4 left-4 flex items-center gap-2 bg-white text-green-700 hover:bg-green-100 transition-all px-3 py-2 rounded-full shadow"
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
            <h1 className="text-xl md:text-xl font-bold text-gray-800 mb-6">
              পণ্য ও সেবার উপর মূল্য সংযোজন কর আরোপের বিধানকরণকল্পে প্রণীত আইন৷
            </h1>
            <div className="text-gray-700 text-left leading-relaxed max-w-4xl mx-auto">
              <p className="mb-3">যেহেতু মূল্য সংযোজন কর আরোপ করার উদ্দেশ্যে বিধান করা সমীচীন ও প্রয়োজনীয়;</p>
              <p>সেহেতু এতদ্‌দ্বারা নিম্নরূপ আইন করা হইল:-</p>
            </div>
          </div>
        </div>

        {/* Header Section */}
        <div className="border-b border-gray-300">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Heading */}
            <div className="md:w-2/5 bg-blue-50 p-6 border-r border-gray-300">
              <h1 className="text-xl md:text-xl font-bold text-gray-800 leading-tight">
                সংক্ষিপ্ত শিরোনামা,[***] ও প্রবর্তন
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-3/5 p-6">
              <div className="space-y-6 text-gray-700">
                {/* Section 1 */}
                <div>
                  <p className="mb-4">
                    <span className="font-semibold">১৷</span> (১) এই আইন মূল্য সংযোজন কর আইন, ১৯৯১ নামে অভিহিত হইবে৷
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
        <div className="border-t border-gray-300">
          <div className="p-6">
            <div className="border-b border-gray-400 pb-2 mb-4">
              {/* Horizontal line */}
            </div>
            <p className="text-sm text-gray-600 italic">
              ১ ", প্রয়োগ" কমা ও শব্দটি অর্থ আইন, ১৯৯৮ (১৯৯৮ সনের ১৪ নং আইন) এর ৭ ধারাবলে বিলুপ্ত
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}