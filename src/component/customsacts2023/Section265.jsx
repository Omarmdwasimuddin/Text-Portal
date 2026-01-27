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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>২৬৫। ইলেকট্রনিকভাবে কার্যসম্পাদন ও ইলেকট্রনিক মাধ্যমে প্রকাশ---</span> (১) এই আইনের অন্য কোনো বিধানে বা আপাতত বলবৎ অন্য কোনো আইনে যাহাই থাকুক না কেন, বোর্ড, সরকারি গেজেটে প্রজ্ঞাপন দ্বারা, প্রয়োজনীয় শর্ত, বিধিনিষেধ ও পদ্ধতি নির্ধারণপূর্বক <sup className='text-blue-500' title='“এই আইনের অধীন যেকোনো কার্যক্রম” শব্দগুলি “কোনো ওয়্যারহাউস এর কার্যক্রম” শব্দগুলির পরিবর্তে অর্থ আইন, ২০২৪ (২০২৪ সনের ৫ নং আইন) এর ১০৩ ধারাবলে প্রতিস্থাপিত যাহা ২০২৪ সনের ১ জুলাই হইতে কার্যকর।'>১</sup>[এই আইনের অধীন যেকোনো কার্যক্রম] ইলেকট্রনিকভাবে সম্পাদন করার নির্দেশ প্রদান করিতে পারিবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) এই আইনের অধীন প্রণীতব্য কোনো আদেশ, প্রজ্ঞাপন, সার্কুলার, ফরম অথবা অন্যান্য তথ্য, ব্যাখ্যা বা সিদ্ধান্ত, যতদূর সম্ভব, অবিলম্বে ইলেকট্রনিক মাধ্যমে সহজলভ্য করিতে হইবে।
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
              ১ “এই আইনের অধীন যেকোনো কার্যক্রম” শব্দগুলি “কোনো ওয়্যারহাউস এর কার্যক্রম” শব্দগুলির পরিবর্তে অর্থ আইন, ২০২৪ (২০২৪ সনের ৫ নং আইন) এর ১০৩ ধারাবলে প্রতিস্থাপিত যাহা ২০২৪ সনের ১ জুলাই হইতে কার্যকর।
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}