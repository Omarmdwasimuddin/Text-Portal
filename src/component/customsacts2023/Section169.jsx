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
                    দ্বাবিংশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    উপকূলীয় পণ্য এবং নৌযান সম্পর্কিত বিধানাবলি
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৬৯। উপকূলীয় পণ্যের ক্ষেত্রে এই আইনের কতিপয় বিধানের প্রয়োগ---</span> (১) আমদানিকৃত পণ্য অথবা রপ্তানিতব্য পণ্যের ক্ষেত্রে ধারা ৬৫ যেরূপ প্রযোজ্য হয় সেইরূপ, যতদূর সম্ভব, উপকূলীয় পণ্যের ক্ষেত্রে প্রযোজ্য হইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) আমদানিকৃত পণ্য অথবা রপ্তানিতব্য পণ্য বহনকারী নৌযানের ক্ষেত্রে ধারা ৫১ এর উপ- ধারা (২), ধারা ৫২ এবং ধারা ৬০ যেরূপ প্রযোজ্য হয় সেইরূপ, যতদূর সম্ভব, উপকূলীয় পণ্য বহনকারী নৌযানের ক্ষেত্রে প্রযোজ্য হইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) সরকার, সরকারি গেজেটে প্রজ্ঞাপন দ্বারা, নির্দেশ প্রদান করিতে পারিবে যে, নবম অধ্যায়ের সকল বিধানাবলি অথবা যে কোনো বিধান এবং ধারা ৭৬ এর বিধানাবলি প্রজ্ঞাপনে যেরূপ উল্লেখ থাকে সেইরূপ ব্যতিক্রম এবং পরিবর্তনসহ উপকূলীয় পণ্যের ক্ষেত্রে অথবা উপকূলীয় পণ্য বহনকারী নৌযানের ক্ষেত্রে প্রযোজ্য হইবে।
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