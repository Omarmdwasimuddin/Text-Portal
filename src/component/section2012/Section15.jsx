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
                    <span className='text-xl font-bold leading-tight text-gray-950 md:text-xl'>১৫। মূসক আরোপ---</span>(১) এই আইনের অন্যান্য বিধানাবলী সাপেক্ষে, করযোগ্য আমদানি এবং করযোগ্য সরবরাহের উপর মূসক আরোপিত ও প্রদেয় হইবে।
                  </p>

                  <p className='mb-4 ml-10 text-lg'>
                    (২) করযোগ্য আমদানি বা করযোগ্য সরবরাহ মূল্যের সহিত উপ-ধারা (৩) এ উল্লিখিত মূসক হার গুণ করিয়া প্রদেয় মূল্য সংযোজন করের পরিমাণ নিরূপণ ও নির্ধারণ করিতে হইবে।
                  </p>

                  <p className='mb-4 ml-10 text-lg'>
                    <sup className='text-blue-500' title='উপ-ধারা (৩) অর্থ আইন, ২০১৯ (২০১৯ সনের ১০ নং আইন) এর ৬২ ধারাবলে প্রতিস্থাপিত।'>১</sup>[(৩) করযোগ্য সরবরাহ বা করযোগ্য আমদানির ক্ষেত্রে মূসক হার হইবে ১৫ শতাংশ:
                  </p>

                  <p className='mb-4 ml-20 text-lg'>
                    তবে, শর্ত থাকে যে, সরকার জনস্বার্থে তৃতীয় তফসিলে সুনির্দিষ্টকৃত যে কোন পণ্য বা সেবার ক্ষেত্রে হ্রাসকৃত মূসকের হার কিংবা সুনির্দিষ্ট পরিমাণ কর নির্ধারণ করিতে পারিবে:
                  </p>

                  <p className='mb-4 ml-20 text-lg'>
                    আরও শর্ত থাকে যে, কোনো নিবন্ধিত ব্যক্তি তৃতীয় তফসিলে বর্ণিত হ্রাসকৃত মূসক হার কিংবা সুনির্দিষ্ট করের পরিবর্তে নির্ধারিত পদ্ধতিতে ১৫ শতাংশ হারে মূসক প্রদান করিতে পারিবে।  ]
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
              ১ উপ-ধারা (৩) অর্থ আইন, ২০১৯ (২০১৯ সনের ১০ নং আইন) এর ৬২ ধারাবলে প্রতিস্থাপিত।<br/>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}