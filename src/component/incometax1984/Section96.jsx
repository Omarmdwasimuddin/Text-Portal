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
                    দ্বাদশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    পণ্যের ঘোষণা এবং ছাড়করণ
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৯৬। ঘোষণা এবং ছাড় প্রক্রিয়া পরিবর্তনের ক্ষেত্র---</span> ছাড় প্রক্রিয়া সহজীকরণ ও দ্রুত করিবার উদ্দেশ্যে, বোর্ড, তদ্‌কর্তৃক নির্ধারিত শর্ত ও পরিসীমা সাপেক্ষে, নিম্নলিখিত পণ্যের ক্ষেত্রে পণ্যের ঘোষণা, সত্যতা প্রতিপাদন এবং ছাড়ের জন্য এই আইনের অধীন আবশ্যকতাসমূহ বিধি দ্বারা পরিবর্তন করিতে পারিবে, যথা:-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক) সংশ্লিষ্ট পণ্য চালানের মোট মূল্য বোর্ড কর্তৃক নির্দিষ্টকৃত পরিমাণের অধিক না হইলে;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (খ) বিদেশে মৃত্যুবরণ করিয়াছেন এইরূপ বাংলাদেশি নাগরিকের ব্যক্তিগত পণ্য;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (গ) একই অবস্থায় অস্থায়ী আমদানি বা পুনঃআমদানিযোগ্য বাণিজ্যিক বাহন;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ঘ) দুর্যোগ ব্যবস্থাপনায় নিয়োজিত ত্রাণকর্মীদের দায়িত্ব পালনের জন্য ব্যবহৃত পণ্যসহ দুর্যোগের ফলে ক্ষতিগ্রস্ত ব্যক্তিদের সহায়তার জন্য আনীত পণ্য;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ঙ) জীবিত প্রাণী এবং পচনশীল পণ্য;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (চ) এক্সপ্রেস (express) পদ্ধতির আওতাভুক্ত চালান; এবং
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ছ) অন্য কোনো ক্ষেত্রে, যেখানে বিভিন্ন শ্রেণি বা ধরনের পণ্য বা বিভিন্ন শ্রেণির লেনদেনের জন্য পৃথক হইতে পারে এইরূপ বাণিজ্য সহজীকরণ ও ঝুঁকি বিবেচনার জন্য বিকল্প ঘোষণা বা ছাড়করণ প্রক্রিয়া প্রয়োজন হয়।
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