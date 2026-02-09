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
                     <span className="text-xl font-bold leading-tight text-gray-950 md:text-xl">৩২৷ কর চালানপত্র---</span>প্রত্যেক নিবন্ধিত ব্যক্তি করযোগ্য পণ্য সরবরাহ বা করযোগ্য সেবা প্রদান বা পণ্য বা সেবা রপ্তানি বা করযোগ্য আমদানিকৃত পণ্য বিক্রয়কালে বিধি দ্বারা <sup className='text-blue-500 cursor-pointer' title='“নির্ধারিত পদ্ধতি ও ফরমে অথবা বোর্ড কর্তৃক, সরকারী  গেজেটে প্রজ্ঞাপন দ্বারা, এতদুদ্দেশ্যে অনুমোদিত অন্য কোন ফরমে” শব্দগুলি ও কমাগুলি “নির্ধারিত পদ্ধতি ও ফরমে” শব্দগুলির পরিবর্তে অর্থ আইন, ১৯৯৫ (১৯৯৫ সনের ১২ নং আইন) এর ৮ ধারাবলে প্রতিস্থাপিত'>১</sup>[নির্ধারিত পদ্ধতি ও ফরমে অথবা বোর্ড কর্তৃক, সরকারী গেজেটে প্রজ্ঞাপন দ্বারা, এতদুদ্দেশ্যে অনুমোদিত অন্য কোন <sup className='text-blue-500 cursor-pointer' title='“পদ্ধতিতে ও” শব্দগুলি অর্থ আইন, ২০০২ (২০০২ সনের ১৪ নং আইন) এর ৮৪ ধারাবলে সন্নিবেশিত'>২</sup>[পদ্ধতিতে ও] ফরমে] একটি সংখ্যানুক্রমিক চালানপত্র প্রদান করিবেন:
                  </p>

                  <p className="mb-4">
                    তবে শর্ত থাকে যে,
                  </p>

                  <p className="mb-4">
                    (ক) করযোগ্য পণ্যের প্রতিটি সরবরাহ বা করযোগ্য আমদানিকৃত পণ্যের প্রতিটি বিক্রয় বা করযোগ্য সেবা প্রদান বা পণ্য বা সেবা রপ্তানির প্রতিটি ক্ষেত্রে একাধিক চালানপত্র প্রদান করা যাইবে না;
                  </p>

                  <p className="mb-4">
                    (খ) যে ক্ষেত্রে কোন ব্যক্তি মূল কর চালানপত্র হারাইয়াছে বলিয়া দাবী করেন, সে ক্ষেত্রে সংশ্লিষ্ট পণ্য সরবরাহকারী বা সেবা প্রদানকারী উক্ত ব্যক্তিকে স্পষ্টভাবে "অনুলিপি মাত্র" চিহ্ন সম্বলিত একটি অনুলিপি প্রদান করিতে পারিবেন৷
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
                <sup className="font-bold">১</sup>“নির্ধারিত পদ্ধতি ও ফরমে অথবা বোর্ড কর্তৃক, সরকারী গেজেটে প্রজ্ঞাপন দ্বারা, এতদুদ্দেশ্যে অনুমোদিত অন্য কোন ফরমে” শব্দগুলি ও কমাগুলি “নির্ধারিত পদ্ধতি ও ফরমে” শব্দগুলির পরিবর্তে অর্থ আইন, ১৯৯৫ (১৯৯৫ সনের ১২ নং আইন) এর ৮ ধারাবলে প্রতিস্থাপিত
              </p>
              <p>
                <sup className="font-bold">২</sup>“পদ্ধতিতে ও” শব্দগুলি অর্থ আইন, ২০০২ (২০০২ সনের ১৪ নং আইন) এর ৮৪ ধারাবলে সন্নিবেশিত
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}