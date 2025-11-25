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
                             <span className="text-xl font-bold leading-tight text-gray-950 md:text-xl">৪১ঞ। বিকল্প বিরোধ-নিষ্পত্তির মাধ্যমে সিদ্ধান্তেত্ম উপনীত না হওয়ার ক্ষেত্রে আপীলের বিধান---</span>(১) এই আইনে যাহা কিছুই থাকুক না কেন, যেই সকল বিরোধের ক্ষেত্রে আংশিক বা সম্পূর্ণভাবে মতৈক্যের ভিত্তিতে বিকল্প বিরোধ-নিষ্পত্তি সম্ভবপর হয় নাই, সেই ক্ষেত্রে আবেদনকারী স্ব স্ব আপীল আদালত অথবা ট্রাইব্যুনালে যথানিয়মে আপীল করিতে পারিবেন।
                        </p>

                        <p className="mb-4">
                            (২) কোন আবেদনাধীন বিরোধের বিষয়ে ধারা ৪১ছ এ বর্ণিত সময়ের মধ্যে মতৈক্যের ভিত্তিতে বিকল্প বিরোধ নিষ্পত্তি সম্পন্ন না হইয়া থাকিলে অথবা সমঝোতা ব্যর্থ হইলে, বিকল্প বিরোধ নিষ্পত্তি প্রক্রিয়া স্বয়ংক্রিয়ভাবে বাতিল হইবে এবং সেই ক্ষেত্রে মূল মামলাটি সংশ্লিষ্ট আপীল কর্তৃপক্ষ, সংশ্লিষ্ট মূল্য সংযোজন কর কর্তৃপক্ষসহ অন্য কোন যথাযথ আদালত, উক্তরূপ বাতিলের তারিখ হইতে সচল হইয়াছে মর্মে গণ্য হইবে এবং এই ক্ষেত্রে আইনের সংশ্লিষ্ট ধারার আওতায় পরবর্তী আইনানুগ কার্যক্রম গ্রহণ করিতে হইবে।
                        </p>

                        <p className="mb-4">
                            (৩) বিকল্প বিরোধ নিষ্পত্তির জন্য আবেদনকারী ব্যক্তির আবেদনপত্র দাখিলের তারিখ হইতে সহায়তাকারী কর্তৃক বিরোধ নিষ্পত্তির প্রক্রিয়ায় ব্যয়িত সময়সহ তৎসম্পর্কিত ফলাফল সংশ্লিষ্ট সকলকে অবহিতকরণের সময়কাল, আপীল দাখিলের সময় গণনার ক্ষেত্রে অন্তর্ভুক্ত হইবে না।
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
          </div>
        </div>

      </div>
    </div>
  );
}