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
                    ষষ্ঠ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    কাস্টমস শুল্ক আরোপ ও অব্যাহতি
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৮। শুল্কযোগ্য পণ্য---</span> (১) এই আইনের অন্যান্য বিধান সাপেক্ষে, আমদানিকৃত বা রপ্তানিতব্য সকল পণ্যের উপর প্রথম তফসিলে বা আপাতত বলবৎ অন্য কোনো আইনের অধীন নির্ধারিত হারে কাস্টমস শুল্ক প্রদেয় হইবে:
                </p>

                <p className="mb-4 text-sm">
                  তবে শর্ত থাকে যে, বোর্ড কর্তৃক বিধি দ্বারা নির্ধারিত পদ্ধতিতে, এই আইন বা আপাতত বলবৎ অন্য কোনো আইনের অধীন কোনো কাস্টমস কর্মকর্তা কর্তৃক আরোপণীয় কোনো শুল্ক ও কর আরোপ বা আদায় করা হইবে না, যদি কোনো একটি চালানের পণ্যমূল্য <sup className='text-blue-500'title='“৪ (চার)” সংখ্যা, বন্ধনী ও শব্দ “২ (দুই)” সংখ্যা, বন্ধনী ও শব্দের পরিবর্তে অর্থ অধ্যাদেশ, ২০২৫ (২০২৫ সনের ২৮ নং অধ্যাদেশ) এর ১৪১ ধারাবলে প্রতিস্থাপিত।'>১</sup>[৪ (চার)] হাজার টাকার অধিক না হয়।
                </p>

                <p className="mb-4 text-sm">
                  (২) সরকার, সরকারি গেজেটে প্রজ্ঞাপন দ্বারা, যেইরূপ সমীচীন মনে করিবে সেইরূপ শর্ত, সীমা বা বিধি- নিষেধ আরোপ সাপেক্ষে, প্রথম তফসিলে বিনির্দিষ্ট সকল বা যে কোনো পণ্যের উপর উক্ত তফসিলে নির্ধারিত কাস্টমস শুল্কের সর্বোচ্চ হারের দ্বিগুণের অধিক নয়, এমন হারে রেগুলেটরি শুল্ক আরোপ করিতে পারিবে।
                </p>

                <p className="mb-4 text-sm">
                  ব্যাখ্যা।- কোনো পণ্যের উপর রেগুলেটরি শুল্কের হার উক্ত পণ্যের উপর প্রথম তফসিলে নির্ধারিত আরোপযোগ্য কাস্টমস শুল্ক হারের অধিক হইতে পারিবে, তবে উক্ত রেগুলেটরি শুল্ক উক্ত তফসিলের সর্বোচ্চ কাস্টমস শুল্ক হারের দ্বিগুণের অধিক হইতে পারিবে না।
                </p>

                <p className="mb-4 text-sm">
                  (৩) উপ ধারা (২) এর অধীন আরোপিত রেগুলেটরি শুল্ক উপ ধারা (১) অথবা আপাতত বলবৎ অন্য কোনো আইনের অধীন আরোপিত শুল্কের অতিরিক্ত হইবে।
                </p>

                <p className="mb-4 text-sm">
                  (৪) উপ ধারা (২) এর অধীন জারিকৃত কোনো প্রজ্ঞাপন পূর্বে রহিত করা না হইলে, যেই অর্থ- বৎসরে উহা জারি করা হইয়াছে সেই অর্থ- বৎসর সমাপনান্তে (on the expiry) উহা স্বয়ংক্রিয়ভাবে রহিত হইয়া যাইবে।
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
              ১ “৪ (চার)” সংখ্যা, বন্ধনী ও শব্দ “২ (দুই)” সংখ্যা, বন্ধনী ও শব্দের পরিবর্তে অর্থ অধ্যাদেশ, ২০২৫ (২০২৫ সনের ২৮ নং অধ্যাদেশ) এর ১৪১ ধারাবলে প্রতিস্থাপিত।<br/>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}