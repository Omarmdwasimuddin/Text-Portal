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

        {/* Header Section */}
        <div className="border-b border-gray-300">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Heading */}
            <div className="md:w-1/5 bg-blue-50 p-6 border-r border-gray-300">
              <h1 className="text-xl md:text-xl font-bold text-gray-800 leading-tight">
                আইন প্রবর্তনের সময়ে মজুদ বাবদ উপকরণ কর রেয়াত
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
              <div className="md:w-4/5 p-6">
                <div className="space-y-6 text-gray-700">
                  {/* Section 1 */}
                  <div>
                    <p className="mb-4">
                      ১২৷ কোন নিবন্ধিত ব্যক্তির নিকট এই আইন প্রবর্তনের তারিখে উক্ত তারিখের পূর্বে তৎকর্তৃক ক্রীত <Link href='/' className='text-blue-500'>Excises and Salt Act, 1944 </Link>(I of 1944) এর অধীনে আব্‌গারী শুল্ক আরোপযোগ্য এবং Sales Tax Ordinance, 1982 (XVIII of 1982) এর অধীনে বিক্রয় কর আরোপযোগ্য উপকরণের অথবা এই আইন প্রবর্তনের পরবর্তী কোন সময়ে নূতনভাবে মূল্য সংযোজন করের আওতায় অন্তর্ভুক্ত কোন পণ্য প্রস্তুতে বা উত্পাদনে ব্যবহৃতব্য মূল্য সংযোজন কর প্রদত্ত উপকরণের মজুদ থাকিলে তিনি সংশ্লিষ্ট কর্মকর্তার অনুমোদনক্রমে বিধি দ্বারা নির্ধারিত কোন মেয়াদে ক্রীত উক্তরূপ উপকরণ বাবদ বিধিতে উল্লিখিত হারে ও পদ্ধতিতে প্রদেয় উত্পাদ করের বিপরীতে উপকরণ কর রেয়াত গ্রহণ করিতে পারিবেন৷
                    </p>
                  </div>
                </div>
              </div>

          </div>
        </div>

        {/* Footer Section */}
        <div className="border-t border-gray-300">
          <div className="p-6">
            <div className="w-1/2 border-b border-gray-400 pb-2 mb-4">
              {/* Horizontal line */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}