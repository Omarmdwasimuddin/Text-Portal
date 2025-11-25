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
        <div className="">
          <div className="flex flex-col md:flex-row">
            <div className="p-6">
                <div className="space-y-6 text-justify text-black">
                    {/* Section 1 */}
                    <div>
                        <p className="mb-4">
                            <span className="text-xl font-bold leading-tight text-gray-950 md:text-xl">৪১৷ বাজেয়াপ্তির পরিবর্তে জরিমানা আরোপ---</span>যখন এই আইন বা বিধি অনুযায়ী কোন পণ্য বাজেয়াপ্তির সিদ্ধান্ত গ্রহণ করা হয়, তখন ন্যায়-নির্ণয়নকারী কর্মকর্তা পণ্যের মালিককে বাজেয়াপ্তির বিকল্প হিসাবে উক্ত পণ্যের উপর প্রদেয় কর, অন্যান্য সরকারী পাওনা, অর্থদণ্ড এবং উক্ত কর্মকর্তার বিবেচনায় <sup className='text-blue-500 cursor-pointer' title='‘‘ফাঁকিকৃত করের সর্বনিম্ন এক চতুর্থাংশ হইতে সর্বোচ্চ অর্ধাংশ পর্যন্ত জরিমানা আরোপণপূর্বক’’ শব্দগুলি ‘‘উপযুক্ত জরিমানা প্রদানপূর্বক’’ শব্দগুলির পরিবর্তে অর্থ আইন, ২০১৪ (২০১৪ সনের ৪ নং আইন) এর ৬৩ ধারাবলে প্রতিস্থাপিত ।'>১</sup>[ফাঁকিকৃত করের সর্বনিম্ন এক চতুর্থাংশ হইতে সর্বোচ্চ অর্ধাংশ পর্যন্ত জরিমানা আরোপণপূর্বক] উক্ত পণ্য বিমোচনের সুযোগ দিতে পারিবেন:<br/>
                            তবে শর্ত থাকে যে, কোন আইন দ্বারা বা উহার অধীনে যে পণ্যের আমদানি নিষিদ্ধ করা হইয়াছে সেই পণ্যের ক্ষেত্রে এই ধারার কোন কিছু প্রযোজ্য হইবে না৷
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
            <div className="space-y-2 text-xs italic text-gray-600">
            <p>
                <sup className="font-bold">১</sup>‘‘ফাঁকিকৃত করের সর্বনিম্ন এক চতুর্থাংশ হইতে সর্বোচ্চ অর্ধাংশ পর্যন্ত জরিমানা আরোপণপূর্বক’’ শব্দগুলি ‘‘উপযুক্ত জরিমানা প্রদানপূর্বক’’ শব্দগুলির পরিবর্তে অর্থ আইন, ২০১৪ (২০১৪ সনের ৪ নং আইন) এর ৬৩ ধারাবলে প্রতিস্থাপিত ।
            </p>
            </div>
        </div>
        </div>

      </div>
    </div>
  );
}