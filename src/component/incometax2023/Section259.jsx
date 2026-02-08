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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>২৫৯। অনুসন্ধান এবং অনুসন্ধান কেন্দ্র।---</span> (১) বোর্ড, উহার প্রাপ্ত সম্পদসীমার মধ্যে, এই আইন ও বিধির সহিত সম্পর্কিত তথ্যের উপর যুক্তিসঙ্গত অনুসন্ধানের উত্তর প্রদান, এই আইনের অধীন সাধারণ ব্যবহারের জন্য জারীকৃত প্রজ্ঞাপন, সার্কুলার, আদেশ ও অন্যান্য দলিল প্রদান, এবং আমদানি, রপ্তানি ও ট্রানজিট প্রক্রিয়ার সহিত সম্পর্কিত প্রয়োজনীয় ফরম ও দলিল প্রদানের জন্য বোর্ডে বা কাস্টমস স্টেশনে এক বা একাধিক অনুসন্ধান কেন্দ্র প্রতিষ্ঠা ও চালু রাখিবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) উপ- ধারা (১) এর অধীন প্রতিষ্ঠিত অনুসন্ধান কেন্দ্র, কোনো ইচ্ছুক ব্যক্তির, ইলেকট্রনিক আকারে বা অন্য কোনোভাবে, আবেদনের প্রেক্ষিতে, যুক্তিসঙ্গত সময়ের মধ্যে, ক্ষেত্রমত, ইলেকট্রনিক আকারে, সংশ্লিষ্ট অনুসন্ধানের উত্তর প্রদান এবং সংশ্লিষ্ট ফরম ও দলিল প্রদান করিবে।
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