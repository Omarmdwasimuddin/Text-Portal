import React from 'react';
import Link from 'next/link';

export default function LawPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Banner Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-8 px-4 md:px-8 relative">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              মূল্য সংযোজন কর আইন, ১৯৯১
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              ( ১৯৯১ সনের ২২ নং আইন )
            </p>
            <div className="mt-3 inline-block bg-green-500 px-4 py-1 rounded-full shadow-md">
              <p className="text-sm md:text-base font-medium">[ ৩০ জুন, ১৯৯১ ]</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/regulations/acts/vat-acts/value-added-tax-act"
            className="absolute top-4 left-4 flex items-center gap-2 bg-white text-green-700 hover:bg-green-100 transition-all px-3 py-2 rounded-full shadow"
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
        <div className="border-b border-gray-300">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Heading */}
            <div className="md:w-1/5 bg-blue-50 p-6 border-r border-gray-300">
              <h1 className="text-xl md:text-xl font-bold text-black leading-tight">
                বিকল্প বিরোধ-নিষ্পত্তির মাধ্যমে সিদ্ধান্তেত্ম উপনীত না হওয়ার ক্ষেত্রে আপীলের বিধান
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
                <div className="space-y-6 text-black">
                    {/* Section 1 */}
                    <div>
                        <p className="mb-4">
                            ৪১ঞ। (১) এই আইনে যাহা কিছুই থাকুক না কেন, যেই সকল বিরোধের ক্ষেত্রে আংশিক বা সম্পূর্ণভাবে মতৈক্যের ভিত্তিতে বিকল্প বিরোধ-নিষ্পত্তি সম্ভবপর হয় নাই, সেই ক্ষেত্রে আবেদনকারী স্ব স্ব আপীল আদালত অথবা ট্রাইব্যুনালে যথানিয়মে আপীল করিতে পারিবেন।
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
        <div className="border-t border-gray-300">
          <div className="p-6">
            <div className="border-b border-gray-400 pb-2 mb-4">
              {/* Horizontal line */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}