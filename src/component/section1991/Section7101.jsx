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
                <div>
                    <p className="mb-4">
                        <span className="text-xl font-bold leading-tight text-gray-950 md:text-xl">
                            ৭১ক৷ সরকারী পাওনা অবলোপনের ক্ষমতা---
                        </span>
                        <sup className='text-blue-500' title='ধারা ৭১ক  অর্থ আইন, ১৯৯৬ (১৯৯৬ সনের ১৮ নং আইন) এর ৬ ধারাবলে সংযোজিত'>১</sup>[৭১ক৷ যে ক্ষেত্রে কোন ব্যক্তির দেউলিয়াত্ব অথবা কোন প্রতিষ্ঠানের অস্তিত্ব বিলোপ বা অন্য কোন কারণে এইরূপ নিশ্চিত হওয়া যায় যে, উক্ত ব্যক্তি বা প্রতিষ্ঠানের উপর ধার্যকৃত মূল্য সংযোজন কর বা, ক্ষেত্রমত, মূল্য সংযোজন কর ও সম্পূরক কর কিংবা আরোপিত কোন অর্থদণ্ড কিংবা এই আইন বা তদধীনে প্রণীত বিধিমালার অধীনে সম্পাদিত কোন মুচলেকা বা অন্য কোন দলিলের অধীনে দাবীকৃত কোন অর্থ এই আইনের ধারা ৫৬ এর অধীনে আদায় করা সম্ভব নয়, সেই ক্ষেত্রে সরকার উক্ত সরকারী পাওনা অবলোপন (Write off) করিতে পারিবে <sup className='text-blue-500' title='ধারা (৭১ক) এর প্রান্তস্থিত “দাড়ি”(।) এর পরিবর্তে কোলোন(:) প্রতিস্থাপিত এবং অতঃপর নুতন শর্তাংশ অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর  ৯২ ধারাবলে সংযোজিত।'>২</sup>[:
                        
                        <br/><br/>
 
                        তবে শর্ত থাকে যে, অন্য কোন আইনে যাহা কিছুই থাকুক না কেন, সরকারী পাওনা অবলোপনের পর যদি প্রমাণ থাকে যে, দায়ী ব্যক্তি বা প্রতিষ্ঠানের কোন সম্পত্তি নতূনভাবে উদ্ভব হইয়াছে যা ইতোপূর্বে সরকারী অর্থের দায়-দেনা হইতে মুক্ত হওয়ার জন্য সংশ্লিষ্ট ব্যক্তি বা প্রতিষ্ঠান স্বীয় সম্পত্তি অসৎ উদ্দেশ্যে অন্য কোন ব্যক্তি বা প্রতিষ্ঠানের নিকট হস্তান্তর করিয়া দেউলিয়া হইয়াছেন, তাহা হইলে উক্ত সম্পত্তির উপর সরকারী পাওনা আদায়ের নিমিত্তে অগ্রাধিকার সৃষ্টি হইবে এবং তাহা এমনভাবে আদায়যোগ্য হইবে যেন নূতনভাবে উদভূত বা অসৎ উদ্দেশ্যে হস্তান্তরিত সম্পত্তির গ্রহীতার উপর সরকারী পাওনা পরিশোধের সম্পূর্ণ দায়িত্ব অর্পিত হইয়াছে।]]
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