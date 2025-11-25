import React from 'react';
import Link from 'next/link';

export default function LawPage() {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Banner Section */}
        <div className="relative px-4 py-8 text-white bg-gradient-to-r from-green-600 to-green-800 md:px-8">
          <div className="text-center">
            <h1 className="mb-2 text-2xl font-bold md:text-4xl">
              মূল্য সংযোজন কর আইন, ১৯৯১
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              ( ১৯৯১ সনের ২২ নং আইন )
            </p>
            <div className="inline-block px-4 py-1 mt-3 bg-green-500 rounded-full shadow-md">
              <p className="text-sm font-medium md:text-base">[ ৩০ জুন, ১৯৯১ ]</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/regulations/acts/vat-acts/value-added-tax-act"
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
                {/* Section 1 */}
                <div>
                <p className="mb-4">
                     <span className="text-xl font-bold leading-tight text-gray-950 md:text-xl">৩৯৷ বাজেয়াপ্তির সীমা---</span>(১) এই আইনের অধীন কোন পণ্য বাজেয়াপ্তকরণ বলিতে উক্ত পণ্য যে মোড়কে পাওয়া যায় সেই মোড়ক এবং উহাতে প্রাপ্ত সকল বস্তুও অন্তর্ভুক্ত হইবে৷
                </p>

                <p className="mb-4">
                    (২) এই আইনের অধীনে বাজেয়াপ্তযোগ্য পণ্য পরিবহনে ব্যবহৃত যে কোন প্রকার যানবাহনও বাজেয়াপ্তযোগ্য হইবে:
                </p>

                <p className="mb-4">
                    <sup className='text-blue-500 cursor-pointer' title='তবে শর্ত থাকে যে, এই উপ-ধারার অধীন বাজেয়াপ্তযোগ্য যানবাহন আটক করা হইলে বিধিতে উল্লিখিত কর্মকর্তা উহার এবং উহাতে পরিবহনকৃত পণ্যের ন্যায় নির্ণয়ন অনিষ্পন্ন থাকা অবস্থায় (Pending adjudication), বিধিদ্বারা নির্ধারিত পদ্ধতিতে অন্তবর্তীকালীন ছাড় প্রদান করিতে পারিবেন৷'>১</sup>[তবে শর্ত থাকে যে, এই উপ-ধারার অধীন বাজেয়াপ্তযোগ্য যানবাহন আটক করা হইলে বিধিতে উল্লিখিত কর্মকর্তা উহার এবং উহাতে পরিবহনকৃত পণ্যের ন্যায় নির্ণয়ন অনিষ্পন্ন থাকা অবস্থায় (Pending adjudication), <sup className='text-blue-500 cursor-pointer' title=''>২</sup>[***] বিধিদ্বারা নির্ধারিত পদ্ধতিতে অন্তবর্তীকালীন ছাড় প্রদান করিতে পারিবেন৷]
                </p>

                <p className="mb-4">
                    (৩) যে কোন জলযানের বাজেয়াপ্তকরণ বলিতে উহার ট্যাকল, সাজসজ্জা ও আসবাবপত্রও অন্তর্ভুক্ত হইবে৷
                </p>
                </div>
            </div>
            </div>

          </div>
        </div>

        {/* Footer Section */}
        <div className="">
        <div className="p-6">
            <div className="w-1/2 pb-2 mb-4 border-b border-gray-400">
            {/* Horizontal line */}
            </div>
            <div className="space-y-2 text-xs italic text-gray-600">
            <p>
                <sup className="font-bold">১</sup>শর্তাংশটি অর্থ আইন, ১৯৯৭ (১৯৯৭ সনের ১৫ নং আইন) এর ৬ ধারাবলে প্রতিস্থাপিত
            </p>
            <p>
                <sup className="font-bold">২</sup>“ব্যাংক গ্যারান্টির বিপরীতে” শব্দগুলি অর্থ আইন, ১৯৯৮ (১৯৯৮ সনের ১৪ নং আইন) এর ৭ ধারাবলে বিলুপ্ত
            </p>
            </div>
        </div>
        </div>

      </div>
    </div>
  );
}