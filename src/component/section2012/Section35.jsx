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
                    চতুর্থ অধ্যায়
                  </h1>
                  <p className="text-md md:text-md">
                    মূসক আদায় পদ্ধতি
                  </p>
                </div>
                <div className="py-2 text-black bg-gradient-to-r from-green-300 to-green-300 md:px-8">
                <div className="text-center">
                  <p className="text-md md:text-md">
                    খন্ড ‘খ’- সাধারণ সরবরাহের ক্ষেত্রে
                  </p>
                </div>
              </div>
              </div>

                
                {/*Section*/}
                <div>
                  <p className="mb-4 text-lg">
                    <span className='text-xl font-bold leading-tight text-gray-950 md:text-xl'>৩৫। একই চালানে একাধিক ধরনের পণ্য ও সেবা সরবরাহ---</span><sup className='text-blue-500' title='ধারা ৩৫ অর্থ আইন, ২০১৯ (২০১৯ সনের ১০ নং আইন) এর ৭৩ ধারাবলে প্রতিস্থাপিত।'>১</sup>[কোন সরবরাহে একাধিক ধরনের পণ্য বা সেবা থাকিলে নিম্নরূপে করারোপ করিতে হইবে, যথা:-
                  </p>

                  <p className='mb-4 ml-20 text-lg'>
                    (ক)  প্রতিটি সরবরাহের ক্ষেত্রে প্রত্যেক ধরনের পণ্য বা সেবাকে পৃথকভাবে প্রদর্শন করিতে হইবে; <br/>
                    (খ)  অর্থনৈতিক দৃষ্টিকোণ হইতে একক সরবরাহের বৈশিষ্ট্যপূর্ণ সরবরাহকে কৃত্রিমভাবে বিভাজন করা যাইবে না।]
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
              ১ ধারা ৩৫ অর্থ আইন, ২০১৯ (২০১৯ সনের ১০ নং আইন) এর ৭৩ ধারাবলে প্রতিস্থাপিত।<br/>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}