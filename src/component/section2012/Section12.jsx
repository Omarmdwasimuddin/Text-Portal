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
                    দ্বিতীয় অধ্যায়
                  </h1>
                  <p className="text-md md:text-md">
                    মূসক নিবন্ধন এবং টার্নওভার কর তালিকাভুক্তি
                  </p>
                </div>
              </div>

                
                {/*Section*/}
                <div>
                  <p className="mb-4 text-lg">
                    <span className='text-xl font-bold leading-tight text-gray-950 md:text-xl'>১২। <sup className='text-blue-500' title='“কমিশনার কর্তৃক” শব্দগুলি অর্থ আইন, ২০২০ (২০২০ সনের ৯ নং আইন) এর ৫৭(ক) ধারাবলে বিলুপ্ত।'>১</sup>[***] স্ব-উদ্যোগে নিবন্ধনযোগ্য ও তালিকাভুক্তিযোগ্য ব্যক্তিকে নিবন্ধন বা তালিকাভুক্তিকরণ---</span><sup className='text-blue-500' title='“সংশ্লিষ্ট কর্মকর্তা শব্দগুলি “কমিশনার” শব্দটির পরিবর্তে অর্থ আইন, ২০২০ (২০২০ সনের ৯ নং আইন) এর ৫৭(খ) ধারাবলে প্রতিস্থাপিত।'>২</sup>[সংশ্লিষ্ট কর্মকর্তা] যথাযথ অনুসন্ধানের পর যদি সন্তুষ্ট হন যে, কোন ব্যক্তি মূসক নিবন্ধনযোগ্য বা টার্নওভার কর তালিকাভুক্তিযোগ্য কিন্তু তিনি নিবন্ধন বা তালিকাভুক্তির জন্য আবেদন করেন নাই, তাহা হইলে 3[সংশ্লিষ্ট কর্মকর্তা] স্ব-উদ্যোগে উক্ত ব্যক্তিকে মূসক নিবন্ধিত বা টার্নওভার কর তালিকাভুক্ত করিবেন।
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
              ১ “কমিশনার কর্তৃক” শব্দগুলি অর্থ আইন, ২০২০ (২০২০ সনের ৯ নং আইন) এর ৫৭(ক) ধারাবলে বিলুপ্ত।<br/>
              ২ “সংশ্লিষ্ট কর্মকর্তা শব্দগুলি “কমিশনার” শব্দটির পরিবর্তে অর্থ আইন, ২০২০ (২০২০ সনের ৯ নং আইন) এর ৫৭(খ) ধারাবলে প্রতিস্থাপিত।<br/>
              ৩ “সংশ্লিষ্ট কর্মকর্তা শব্দগুলি “কমিশনার” শব্দটির পরিবর্তে অর্থ আইন, ২০২০ (২০২০ সনের ৯ নং আইন) এর ৫৭(খ) ধারাবলে প্রতিস্থাপিত।<br/>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}