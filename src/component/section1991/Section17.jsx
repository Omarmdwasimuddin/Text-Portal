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
              <h1 className="text-xl md:text-xl font-bold text-gray-800 leading-tight">
                স্বেচ্ছা নিবন্ধন
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
              <div className="space-y-6 text-gray-700">
                {/* Section 1 */}
                <div>
                  <p className="mb-4">
                    ১৭৷ <sup className='text-blue-500 cursor-pointer' title='ধারা ১৭ কে উপ-ধারা (১) রূপে পুনঃসংখ্যায়িত এবং অতঃপর উপ-ধারা (২) সংযোজিত অর্থ আইন, ২০০০ (২০০০ সনের ১৫ নং আইন) এর ১১ ধারাবলে'>১</sup>[(১)] ধারা ১৬ অনুযায়ী নিবন্ধন হইতে অব্যাহতিপ্রাপ্ত যে কোন ব্যক্তি করযোগ্য পণ্য সরবরাহকারী বা করযোগ্য সেবা প্রদানকারী হিসাবে স্বেচ্ছায় নিবন্ধনের জন্য বিধি দ্বারা নির্ধারিত <sup className='text-blue-500 cursor-pointer' title='"ফরমে" শব্দটি "পদ্ধতিতে" শব্দটির পরিবর্তে অর্থ আইন, ২০০০ (২০০০ সনের ১৫ নং আইন) এর ১১ ধারাবলে প্রতিস্থাপিত'>২</sup>[ফরমে] ও পদ্ধতিতে সংশ্লিষ্ট কর্মকর্তার নিকট আবেদন করিতে পারিবেন এবং উক্ত আবেদনপত্র সর্বতোভাবে যথাযথ বলিয়া সংশ্লিষ্ট কর্মকর্তা সন্তুষ্ট হইলে তিনি আবেদনকারীকে নিবন্ধিত করিবেন এবং তাহার ব্যবসায় সনাক্তকরণ সংখ্যা উল্লেখ করিয়া তাহাকে একটি নিবন্ধনপত্র প্রদান করিবেন৷
                  </p>

                  <p className="mb-4">
                    <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (২) অর্থ আইন, ২০০০ (২০০০ সনের ১৫ নং আইন) এর ১১ ধারাবলে সংযোজিত'>৩</sup>[(২) এই আইনে ভিন্নরূপ যাহা কিছু থাকুক না কেন, বাংলাদেশে প্রস্তুতকৃত, উত্পাদিত বা আমদানিকৃত কোন পণ্যের বিক্রেতা, হস্তান্তরকারী বা ইজারা প্রদানকারী অথবা, দ্বিতীয় তফসিলে বর্ণিত <sup className='text-blue-500 cursor-pointer' title='"করযোগ্য" শব্দটি অর্থ আইন, ২০০৪ (২০০৪ সনের ১৬ নং আইন) এর ৫ ধারাবলে বিলুপ্ত'>৪</sup>[***] সেবা প্রদানকারী কোন ব্যক্তি যিনি ধারা ১৫ ও উপ-ধারা (১) এর আওতা-বহির্ভূত তিনি ইচ্ছা করিলে করযোগ্য পণ্য সরবরাহকারী বা করযোগ্য সেবা প্রদানকারী হিসাবে স্বেচ্ছায় নিবন্ধনের জন্য বিধি দ্বারা নির্ধারিত ফরমে ও পদ্ধতিতে সংশ্লিষ্ট কর্মকর্তার নিকট আবেদন করিতে পারিবেন এবং উক্ত আবেদনপত্র সর্বতোভাবে যথাযথ বলিয়া সংশ্লিষ্ট কর্মকর্তা সন্তুষ্ট হইলে তিনি আবেদনকারীকে নিবন্ধিত করিবেন এবং তাহার ব্যবসায় সনাক্তকরণ সংখ্যা উল্লেখ করিয়া তাহাকে একটি নিবন্ধনপত্র প্রদান করিবেন; এবং এইরূপ নিবন্ধিত ব্যক্তি এই আইনের অধীন করদাতা হিসাবে বিবেচিত হইবেন এবং এই আইনের অধীন কর নিরূপণ ও পরিশোধ সম্পর্কিত সংশ্লিষ্ট সকল বিধান তাঁহার ক্ষেত্রে প্রযোজ্য হইবে৷]
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
            <p className="text-xs text-gray-600 italic mb-2">
              <sup className="font-bold">১</sup>উপ-ধারা (১) অর্থ আইন, ১৯৯৪ (১৯৯৪ সনের ১১ নং আইন) এর ৯ ধারাবলে পুনসংখ্যায়িত
            </p>
            <p className="text-xs text-gray-600 italic mb-2">
              <sup className="font-bold">২</sup>“ফরমে” শব্দটি “ফর্মে” শব্দটির পরিবর্তে অর্থ আইন, ১৯৯২ (১৯৯২ সনের ২১ নং আইন) এর ১১ ধারাবলে প্রতিস্থাপিত
            </p>
            <p className="text-xs text-gray-600 italic mb-2">
              <sup className="font-bold">৩</sup>উপ-ধারা (২) অর্থ আইন, ১৯৯৪ (১৯৯৪ সনের ১১ নং আইন) এর ৯ ধারাবলে সংযোজিত
            </p>
            <p className="text-xs text-gray-600 italic">
              <sup className="font-bold">৪</sup>“সেবা ব্যতীত, কোন” শব্দগুলি ও কমা অর্থ আইন, ২০০২ (২০০২ সনের ১৪ নং আইন) এর ৮১ ধারাবলে বিলুপ্ত
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}