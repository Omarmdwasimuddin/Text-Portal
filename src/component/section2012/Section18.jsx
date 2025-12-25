import React from 'react';
import Link from 'next/link';

export default function LawPage() {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Banner Section */}
        <div className="relative px-4 py-8 text-white bg-gradient-to-r from-green-600 to-green-800 md:px-8">
          <div className="text-center">
            <h1 className="mb-2 text-2xl md:text-4xl">
              মূল্য সংযোজন কর ও সম্পূরক শুল্ক আইন, ২০১২
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              ( ২০১২ সনের ৪৭ নং আইন )
            </p>
            <div className="inline-block px-4 py-1 mt-3 bg-green-500 rounded-full shadow-md">
              <p className="text-sm font-medium md:text-base">[ ১০ ডিসেম্বর, ২০১২ ]</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/regulations/acts/vat-acts/value-added-tax-and-supplementary-duty-act"
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
                

              <div className="py-2 text-black bg-gradient-to-r from-green-500 to-green-500 md:px-8">
                <div className="text-center">
                  <h1 className="text-lg font-semibold">
                    তৃতীয় অধ্যায়
                  </h1>
                  <p className="text-md md:text-md">
                    মূল্য সংযোজন কর আরোপ
                  </p>
                </div>
              </div>

                
                {/*Section*/}
                <div>
                  <p className="mb-4 text-lg">
                    <span className='text-xl font-bold leading-tight text-gray-950 md:text-xl'>১৮। নিবন্ধিত সরবরাহকারী এবং সরবরাহগ্রহীতা---</span>ধারা ১৭ এ যাহা কিছুই থাকুক না কেন, কোন নিবন্ধিত অনাবাসিক ব্যক্তি কর্তৃক অপর কোন নিবন্ধিত গ্রহীতার নিকট সরবরাহকৃত সেবা বাংলাদেশে প্রদত্ত হইবে, যদি―
                  </p>

                  <p className='mb-4 ml-10 text-lg'>
                    (ক) সরবরাহগ্রহীতা বাংলাদেশে কোন নির্দিষ্ট স্থান হইতে বা উহার মাধ্যমে অর্থনৈতিক কার্যক্রম পরিচালনা করেন; এবং
                  </p>

                  <p className='mb-4 ml-10 text-lg'>
                    (খ) সরবরাহটি উক্ত অর্থনৈতিক কার্যক্রমের উদ্দেশ্যে বা উক্ত নির্দিষ্ট স্থানে প্রদান করা হয়।
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
            <p className="text-xs italic text-gray-900">
              
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}