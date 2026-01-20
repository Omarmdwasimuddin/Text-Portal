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
                    নবম অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    যানবাহনের আগমন এবং প্রস্থান
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৪৮। যানবাহন এবং কার্গো ঘোষণা---</span> (১) বোর্ড কর্তৃক নির্ধারিত ব্যতিক্রম সাপেক্ষে, বাংলাদেশের বাহির হইতে বাংলাদেশে আগমন করিবে এইরূপ যানবাহনের ভারপ্রাপ্ত ব্যক্তি (person- in- charge) অথবা তাহার পক্ষে উক্ত যানবাহনের মালিক বা পরিচালনাকারী বা তাহার এজেন্ট নিম্নবর্ণিত বিষয়ে বোর্ড কর্তৃক নির্ধারিত ফরম, পদ্ধতি ও সময়সীমার মধ্যে একটি ঘোষণা দাখিল করিবেন, যথা:-
                </p>

                <p className="mb-4 text-sm">
                  (ক) যানবাহন আগমনের আসন্ন সময়;
                </p>

                <p className="mb-4 text-sm">
                  (খ) রুট;
                </p>

                <p className="mb-4 text-sm">
                  (গ) ক্রু;
                </p>

                <p className="mb-4 text-sm">
                  (ঘ) যাত্রী;
                </p>

                <p className="mb-4 text-sm">
                  (ঙ) বাংলাদেশে খালাস করিবার লক্ষ্যে হউক বা না হউক, বাংলাদেশে আনয়ন করা হইবে, এইরূপ সকল পণ্যের একটি কার্গো ঘোষণা; এবং
                </p>

                <p className="mb-4 text-sm">
                  (চ) যানবাহন আগমনের কাস্টমস স্টেশনের নাম।
                </p>

                <p className="mb-4 text-sm">
                  (২) যথাযথ কর্মকর্তা কোনো যানবাহনের ভারপ্রাপ্ত ব্যক্তি, মালিক বা পরিচালনাকারী বা তাহাদের এজেন্টকে উপ- ধারা (১) এর অধীন দাখিলকৃত ঘোষণার সংশোধন বা সম্পূরক ঘোষণা দাখিলের অনুমতি প্রদান করিতে পারিবে:
                </p>

                <p className="mb-4 text-sm">
                  তবে শর্ত থাকে যে, নিম্নবর্ণিত ক্ষেত্রে কোনো সংশোধন বা সম্পূরক ঘোষণা দাখিলের অনুমতি প্রদান করা যাইবে না, যথা:-
                </p>

                <p className="mb-4 text-sm">
                  (ক) কোনো কাস্টমস কর্মকর্তা কর্তৃক কোনো যানবাহনের ভারপ্রাপ্ত ব্যক্তি, মালিক বা পরিচালনাকারী বা তাহাদের এজেন্টকে যদি এই মর্মে অবহিত করা হয় যে, উক্ত পণ্য পরীক্ষা করা হইবে;
                </p>

                <p className="mb-4 text-sm">
                  (খ) কাস্টমস কর্মকর্তা কর্তৃক উক্ত সংশোধনের বিষয়টি ইতোমধ্যে অশুদ্ধ বলিয়া প্রতিষ্ঠিত হইয়াছে;
                </p>

                <p className="mb-4 text-sm">
                  (গ) গমনের স্থান হইতে উক্ত পণ্য অপসারণ করিবার অনুমতি প্রদান করা হইয়াছে; বা
                </p>

                <p className="mb-4 text-sm">
                  (ঘ) উক্ত পণ্যের জন্য ইতোমধ্যে একটি পণ্য ঘোষণা দাখিল করা হইয়াছে।
                </p>

                <p className="mb-4 text-sm">
                  (৩) যানবাহনের মালিক বা তাহার প্রতিনিধি বা পরিচালনাকারী যানবাহনের আগমন ও প্রস্থানের পূর্বে নির্ধারিত পদ্ধতিতে অ্যাডভান্স প্যাসেঞ্জার ইনফরমেশন (Advance Passenger Information- API) এবং প্যাসেঞ্জার নেইম রেকর্ড (Passenger Name Record- PNR) দাখিল করিবেন।
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