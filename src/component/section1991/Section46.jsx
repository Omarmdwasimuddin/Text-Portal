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
                ক্ষমতাপ্রাপ্ত<sup className='text-blue-500 cursor-pointer' title='“প্রতিনিধি ও মূসক পরামর্শকের মাধ্যমে উপস্থিতি ইত্যাদি” শব্দগুলি “প্রতিনিধির মাধ্যমে উপস্থিতি” শব্দগুলির পরিবর্তে অর্থ আইন, ১৯৯৮ (১৯৯৮ সনের ১৪ নং আইন) এর ৭ ধারাবলে প্রতিস্থাপিত'>১</sup>[ প্রতিনিধির মাধ্যমে উপস্থিতি]
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
                <div className="space-y-6 text-black">
                    {/* Section 1 */}
                    <div>
                        <p className="mb-4">
                            ৪৬৷ <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (১) অর্থ আইন, ১৯৯৮ (১৯৯৮ সনের ১৪ নং আইন) এর ৭ ধারাবলে সংখ্যায়িত'>২</sup>[(১)] এই আইন বা বিধির অধীন কোন কার্যধারা উপলক্ষে কোন মূল্য সংযোজন কর কর্মকর্তা, আপীলাত কর্তৃপক্ষ, বোর্ড বা সরকারের নিকট উপস্থিত হইবার অধিকারী বা উপস্থিতির জন্য তলবকৃত কোন ব্যক্তি Customs Act এর <sup className='text-blue-500 cursor-pointer' title='“section 196K” শব্দ, সংখ্যা ও অক্ষরটি “section 196A” শব্দ, সংখ্যা ও অক্ষরটির পরিবর্তে অর্থ আইন, ১৯৯৫ (১৯৯৫ সনের ১২ নং আইন) এর ৮ ধারাবলে প্রতিস্থাপিত'>৩</sup>[section 196K] তে বর্ণিত কোন ব্যক্তির মাধ্যমে <sup className='text-blue-500 cursor-pointer' title='“বা চার্টার্ড এ্যাকাউন্টেন্ট এর মাধ্যমে” শব্দগুলি “Cউস্টওম্ আcট্-এর সএcটিওন্ 196K-তে বর্ণিত কোন ব্যক্তির মাধ্যমে” শব্দগুলি, চিহ্নগুলি, অক্ষর ও সংখ্যাগুলির পর অর্থ আইন, ২০১৩ (২০১৩ সনের ২৫ নং আইন) এর ৪১ ধারাবলে সন্নিবেশিত।'>৪</sup>[বা চার্টার্ড এ্যাকাউন্টেন্ট এর মাধ্যমে] উপস্থিত হইতে পারিবেন এবং উক্ত Section এর বিধানাবলী তাহার উপর এইরূপে প্রযোজ্য হইবে যেন উহা এই ধারার অধীন উপস্থিতির জন্য এই আইনের অধীন প্রণীত হইয়াছে৷
                        </p>

                        <p className="mb-4">
                            <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (২) অর্থ আইন, ১৯৯৮ (১৯৯৮ সনের ১৪ নং আইন) এর ৭ ধারাবলে সংযোজিত'>৫</sup>[(২) এই আইন বা বিধির অধীন যে কোন কার্যধারা উপলক্ষ্যে, বা যে কোন নিবন্ধিত বা নিবন্ধনযোগ্য ব্যক্তির পক্ষে মূল্য সংযোজন কর সংক্রান্ত যে কোন কাজ সম্পাদনের জন্য অথবা উক্ত ব্যক্তির পক্ষে উপ-ধারা (১) অনুসারে উক্ত উপ-ধারায় উল্লিখিত কর্মকর্তা, কর্তৃপক্ষ, বোর্ড বা সরকারের নিকট উপস্থিত হওয়ার জন্য বা উক্ত ব্যক্তিকে এই আইন বা বিধি হইতে উদ্ভূত হইয়াছে বা হইতে পারে এমন যে কোন বিষয়ে পরামর্শ প্রদানের জন্য বোর্ড, বিধি দ্বারা নির্ধারিতে পদ্ধতিতে ও শর্তাধীনে, যে কোন ব্যক্তিকে মূল্য সংযোজন কর পরামর্শক হিসাবে লাইসেন্স প্রদান করিতে পারিবে৷]
                        </p>
                    </div>
                </div>
            </div>

          </div>
        </div>

        {/* Footer Section */}
        <div className="border-t border-gray-300">
            <div className="p-6">
                <div className="w-1/2 border-b border-gray-400 pb-2 mb-4">
                    {/* Horizontal line */}
                </div>
                <div className="text-xs text-gray-600 italic space-y-2">
                    <p>
                        <sup className="font-bold">১</sup> "প্রতিনিধি ও মূসক পরামর্শকের মাধ্যমে উপস্থিতি ইত্যাদি" শব্দগুলি "প্রতিনিধির মাধ্যমে উপস্থিতি" শব্দগুলির পরিবর্তে অর্থ আইন, ১৯৯৮ (১৯৯৮ সনের ১৪ নং আইন) এর ৭ ধারাবলে প্রতিস্থাপিত
                    </p>
                    <p>
                        <sup className="font-bold">২</sup> উপ-ধারা (১) অর্থ আইন, ১৯৯৮ (১৯৯৮ সনের ১৪ নং আইন) এর ৭ ধারাবলে সংখ্যায়িত
                    </p>
                    <p>
                        <sup className="font-bold">৩</sup> "section 196K" শব্দ, সংখ্যা ও অক্ষরটি "section 196A" শব্দ, সংখ্যা ও অক্ষরটির পরিবর্তে অর্থ আইন, ১৯৯৫ (১৯৯৫ সনের ১২ নং আইন) এর ৮ ধারাবলে প্রতিস্থাপিত
                    </p>
                    <p>
                        <sup className="font-bold">৪</sup> "বা চার্টার্ড এ্যাকাউন্টেন্ট এর মাধ্যমে" শব্দগুলি "Cউস্টওম্ আcট্-এর সএcটিওন্ 196K-তে বর্ণিত কোন ব্যক্তির মাধ্যমে" শব্দগুলি, চিহ্নগুলি, অক্ষর ও সংখ্যাগুলির পর অর্থ আইন, ২০১৩ (২০১৩ সনের ২৫ নং আইন) এর ৪১ ধারাবলে সন্নিবেশিত।
                    </p>
                    <p>
                        <sup className="font-bold">৫</sup> উপ-ধারা (২) অর্থ আইন, ১৯৯৮ (১৯৯৮ সনের ১৪ নং আইন) এর ৭ ধারাবলে সংযোজিত
                    </p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}