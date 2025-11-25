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
                     <span className="text-xl font-bold leading-tight text-gray-950 md:text-xl">২৫৷ সমন প্রেরণের ক্ষমতা---</span>(১) পদমর্যাদায় <sup className='text-blue-500 cursor-pointer' title='“রাজস্ব কর্মকর্তার” শব্দগুলি “সুপারিন্‌টেনডেন্টের” শব্দটির পরিবর্তে অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৮০ ধারাবলে প্রতিস্থাপিত।'>১</sup>[রাজস্ব কর্মকর্তার] নিম্ন নহেন এমন এমন কোন মূল্য সংযোজন কর কর্মকর্তা তত্কর্তৃক এই আইনের উদ্দেশ্যে পরিচালিত যে কোন তদন্তে যে ব্যক্তির উপস্থিতি প্রয়োজন আছে বলিয়া বিবেচনা করেন, সাক্ষ্য দেওয়া বা কোন দলিলপত্র বা অন্য কোন বস্তু দাখিল করার জন্য সেই ব্যক্তির উপর, লিখিতভাবে সমন জারীর কারণ উল্লেখসহ, সমন জারী করিতে পারিবেন৷
                  </p>
                  
                  <p className="mb-4">
                    (২) উপ-ধারা (১) এর অধীন সমনকৃত যে কোন ব্যক্তি কর্মকর্তার নির্দেশ মোতাবেক সশরীরে বা ক্ষমতাপ্রাপ্ত প্রতিনিধির মাধ্যমে উপস্থিত হইতে বাধ্য থাকিবেন:
                  </p>
                  
                  <p className="mb-4">
                    তবে শর্ত থাকে যে, <Link href='/' className='text-blue-500'>Code of Civil Procedure, 1908</Link> (Act V of 1908) এর Sections 132 ও 133 এর অধীনে কোন আদালতে ব্যক্তিগতভাবে উপস্থিত হওয়া হইতে অব্যাহতিপ্রাপ্ত কোন ব্যক্তিকে সশরীরে হাজির হওয়ার জন্য তলব করা যাইবে না৷
                  </p>
                  
                  <p className="mb-4">
                    (৩) কোন মূল্য সংযোজন কর কর্মকর্তা কর্তৃক পরিচালিত যে কোন তদন্ত Penal Code, (Act XLV of 1860) এর Sections 193 ও 228 এর অধীন বিচার বিভাগীয় কার্যধারা বলিয়া গণ্য হইবে৷
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
            <p className="text-xs italic text-gray-600">
              <sup className="font-bold">১</sup>“রাজস্ব কর্মকর্তার” শব্দগুলি “সুপারিন্‌টেনডেন্টের” শব্দটির পরিবর্তে অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৮০ ধারাবলে প্রতিস্থাপিত।
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}