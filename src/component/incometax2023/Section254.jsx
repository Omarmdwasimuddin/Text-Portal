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
                    সপ্তবিংশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    বিবিধ
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>২৫৪। শুল্ক ফাঁকি বা আইনের লঙ্ঘন উদ্‌ঘাটনের জন্য পুরস্কার---</span> (১) এই আইন বা আপাতত বলবৎ অন্য কোনো আইনে ভিন্নরূপ যাহা কিছুই থাকুক না কেন, বোর্ড, নিম্নবর্ণিত ব্যক্তিগণকে, উপ-ধারা (২) এর বিধান সাপেক্ষে, বিধি দ্বারা নির্ধারিত পদ্ধতি, পরিস্থিতিতে এবং পরিমাণে, পুরস্কার মঞ্জুর করিতে পারিবে, যথা:-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক) কাস্টমস শুল্ক ফাঁকি বা ফাঁকি প্রচেষ্টা অথবা এই আইন বা আপাতত বলবৎ অন্য কোনো আইন, যাহার অধীনে কোনো কাস্টমস কর্মকর্তা, কর বা অন্যান্য রাজস্ব আদায়ে ক্ষমতাপ্রাপ্ত, এর কোনো বিধানের লঙ্ঘন সম্পর্কিত বিষয়ে কাস্টমস কর্তৃপক্ষের নিকট সংবাদ প্রদানকারী কোনো ব্যক্তিকে;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (খ) কোনো কাস্টমস কর্মকর্তা বা অন্য কোনো সরকারি সংস্থা অথবা স্থানীয় কর্তৃপক্ষের কর্মকর্তা বা কর্মচারীকে, যিনি কাস্টমস শুল্ক ফাঁকি বা ফাঁকি প্রচেষ্টা বা এই আইন অথবা অন্য কোনো আইনের লঙ্ঘন উদ্‌ঘাটন করেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) উপ-ধারা (১) এর অধীন পুরস্কার মঞ্জুর করা যাইবে, যদি উক্ত উপ- ধারায় উল্লিখিত সংবাদ সরবরাহ, কাস্টমস শুল্ক ফাঁকি বা ফাঁকি প্রচেষ্টা অথবা আইন লঙ্ঘন উদ্‌ঘাটনের বা উন্মোচনের ক্ষেত্রে নিম্নবর্ণিত কার্য ফলপ্রসূভাবে সমাপ্ত হয়, যথা: -
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (অ) ফাঁকি বা ফাঁকি প্রচেষ্টা অথবা লঙ্ঘনের ঘটনার সহিত সংশ্লিষ্ট পণ্য বা অন্য কোনো বস্তু জব্দ এবং বাজেয়াপ্ত হয়; অথবা
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (আ) এই আইন বা আপাতত বলবৎ অন্য কোনো আইনের অধীন আরোপযোগ্য কাস্টমস শুল্ক বা অন্য কোনো রাজস্ব আদায় অথবা সংশ্লিষ্ট আইনের অধীন আরোপিত অর্থদণ্ড বা জরিমানা আদায় হয়; অথবা
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ই) ফাঁকি বা ফাঁকি প্রচেষ্টা অথবা লঙ্ঘনের জন্য দায়ী ব্যক্তির বিরুদ্ধে অভিযোগ দায়ের বা তাহার উপর দণ্ড আরোপিত হয় ।
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