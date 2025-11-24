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

        {/* Header Section */}
        <div className="border-b border-gray-300">
          <div className="flex flex-col md:flex-row">
              <div className="p-6">
                <div className="space-y-6 text-justify text-black">
                  {/* Section 12 */}
                  <div>
                    <p className="mb-4">
                       <span className="text-xl font-bold leading-tight text-gray-950 md:text-xl">১২৷ আইন প্রবর্তনের সময়ে মজুদ বাবদ উপকরণ কর রেয়াত---</span>কোন নিবন্ধিত ব্যক্তির নিকট এই আইন প্রবর্তনের তারিখে উক্ত তারিখের পূর্বে তৎকর্তৃক ক্রীত <Link href='/' className='text-blue-500'>Excises and Salt Act, 1944 </Link>(I of 1944) এর অধীনে আব্‌গারী শুল্ক আরোপযোগ্য এবং Sales Tax Ordinance, 1982 (XVIII of 1982) এর অধীনে বিক্রয় কর আরোপযোগ্য উপকরণের অথবা এই আইন প্রবর্তনের পরবর্তী কোন সময়ে নূতনভাবে মূল্য সংযোজন করের আওতায় অন্তর্ভুক্ত কোন পণ্য প্রস্তুতে বা উত্পাদনে ব্যবহৃতব্য মূল্য সংযোজন কর প্রদত্ত উপকরণের মজুদ থাকিলে তিনি সংশ্লিষ্ট কর্মকর্তার অনুমোদনক্রমে বিধি দ্বারা নির্ধারিত কোন মেয়াদে ক্রীত উক্তরূপ উপকরণ বাবদ বিধিতে উল্লিখিত হারে ও পদ্ধতিতে প্রদেয় উত্পাদ করের বিপরীতে উপকরণ কর রেয়াত গ্রহণ করিতে পারিবেন৷
                    </p>
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
          </div>
        </div>

      </div>
    </div>
  );
}