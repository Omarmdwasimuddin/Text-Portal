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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>২২। কাউন্টারভেইলিং অথবা অ্যান্টি- ডাম্পিং শুল্ক আরোপের বিরুদ্ধে আপিল---</span> (১) কোনো পণ্য আমদানির সহিত সম্পর্কিত কোনো ভর্তুকি বা ডাম্পিং এর অস্তিত্ব, মাত্রা এবং প্রভাব বিষয়ে নির্ধারণী আদেশ বা উহার পুনর্বিবেচনার বিরুদ্ধে আপিল ট্রাইব্যুনালে আপিল দায়ের করা যাইবে।
                </p>

                <p className="mb-4 text-sm">
                  (২) এই ধারার অধীন প্রত্যেক আপিল আপিলাধীন আদেশের তারিখ হইতে ৯০ (নব্বই) দিনের মধ্যে দায়ের করিতে হইবে:
                </p>

                <p className="mb-4 text-sm">
                  তবে শর্ত থাকে যে, আপিলকারী যুক্তিসংগত কারণে সময়মত আপিল দায়েরে বাধাগ্রস্ত হইয়াছে মর্মে আপিল ট্রাইব্যুনাল সন্তুষ্ট হইলে উপরিউক্ত ৯০ (নব্বই) দিন সময় সমাপ্তির পরও আপিল গ্রহণ করা যাইবে।
                </p>

                <p className="mb-4 text-sm">
                  (৩) আপিলের পক্ষসমূহকে শুনানির সুযোগ প্রদান করিবার পর আপিল ট্রাইব্যুনাল যে আদেশের বিরুদ্ধে আপিল করা হইয়াছে উহা বহাল রাখিয়া, পরিবর্তন করিয়া বা বাতিল করিয়া ইহার বিবেচনায় সংগত যে কোনো আদেশ প্রদান করিতে পারিবে।
                </p>

                <p className="mb-4 text-sm">
                  (৪) আপিল ট্রাইব্যুনালের সভাপতি কর্তৃক উক্ত আপিলসমূহ শুনানির জন্য গঠিত একটি বিশেষ বেঞ্চে উপ- ধারা (১) এর অধীন প্রত্যেক আপিলের শুনানি হইবে এবং উক্ত বেঞ্চ সভাপতি ও অন্যূন দুইজন সদস্য সমন্বয়ে গঠিত হইবে।
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