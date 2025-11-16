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
                হিসাব রক্ষণ
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
              <div className="space-y-6 text-gray-700">
                {/* Section 1 */}
                <div>
                  <p className="mb-4">
                    ৩১৷ (১) প্রত্যেক নিবন্ধিত ব্যক্তিকে, কোন নির্দিষ্ট করমেয়াদে, তাহার করদায়িতা নিরূপণের সুবিধার্থে তত্কর্তৃক বা তাহার পক্ষে তাহার কোন এজেন্ট কর্তৃক ক্রীত বা সরবরাহকৃত পণ্য বা প্রদত্ত সেবা সম্পর্কিত নিম্নলিখিত <sup className='text-blue-500 cursor-pointer' title='“পুস্তক ও নথিপত্র” শব্দগুলি “নথিসমূহ” শব্দটির পরিবর্তে অর্থ আইন, ১৯৯৭ (১৯৯৭ সনের ১৫ নং আইন) এর ৬ ধারাবলে প্রতিস্থাপিত'>১</sup>[পুস্তক ও নথিপত্র] বিধি দ্বারা নির্ধারিত <sup className='text-blue-500 cursor-pointer' title='“ফরম” শব্দটি “ফর্ম” শব্দটির পরিবর্তে অর্থ আইন, ১৯৯২ (১৯৯২ সনের ২১ নং আইন) এর ১১ ধারাবলে প্রতিস্থাপিত'>২</sup>[ফরম] ও পদ্ধতিতে সংরক্ষণ করিতে হইবে এবং তাহার ব্যবসায় স্থলে মজুদ রাখিতে হইবে:-
                  </p>

                  <p className="mb-4">
                    (ক) করযোগ্য ও অব্যাহতিপ্রাপ্ত পণ্য ও সেবা ক্রয়ের বিবরণী এবং তত্সংশ্লিষ্ট চালানপত্র;
                  </p>

                  <p className="mb-4">
                    (খ) করযোগ্য ও অব্যাহতিপ্রাপ্ত পণ্য সরবরাহ বা সেবা প্রদানের বা উক্ত পণ্য বা সেবা রপ্তানির বিবরণী এবং তত্সংশ্লিষ্ট চালানপত্র;
                  </p>

                  <p className="mb-4">
                    (গ) চলতি হিসাব;
                  </p>

                  <p className="mb-4">
                    (ঘ) মূল্য সংযোজন কর প্রদানের উদ্দেশ্যে চালানের মাধ্যমে ট্রেজারীতে বা এতদুদ্দেশ্যে সরকার কর্তৃক অনুমোদিত কোন ব্যাংকে জমাকৃত অর্থের হিসাব বিবরণী;
                  </p>

                  <p className="mb-4">
                    (ঙ) উপকরণ ও প্রস্তুতকৃত বা উত্পাদিত পণ্যের মজুদের বিবরণী; এবং
                  </p>

                  <p className="mb-4">
                    <sup className='text-blue-500 cursor-pointer' title='দফা (ঙঙ) অর্থ আইন, ২০০০ (২০০০ সনের ১৫ নং আইন) এর ৯৩ ধারাবলে সন্নিবেশিত'>৩</sup>[(ঙঙ) করযোগ্য ও অব্যাহতিপ্রাপ্ত পণ্য অথবা সেবা প্রদান সংক্রান্ত বাণিজ্যিক দলিলাদি;]
                  </p>

                  <p className="mb-4">
                    (চ) বিধি দ্বারা নির্ধারিত হইতে পারে এমন <sup className='text-blue-500 cursor-pointer' title='“পুস্তক ও নথিপত্র” শব্দগুলি “নথিপত্র” শব্দটির পরিবর্তে অর্থ আইন, ১৯৯৭ (১৯৯৭ সনের ১৫ নং আইন) এর ৬ ধারাবলে প্রতিস্থাপিত'>৪</sup>[পুস্তক ও নথিপত্র]:
                  </p>

                  <p className="mb-4">
                    <sup className='text-blue-500 cursor-pointer' title='শর্তাংশটি অর্থ আইন, ২০০১ (২০০১ সনের ৩০ নং আইন) এর ৭৯ ধারাবলে প্রতিস্থাপিত'>৫</sup>[তবে শর্ত থাকে যে, বোর্ড, সরকারী গেজেটে প্রজ্ঞাপন দ্বারা, নিবন্ধিত কোন ব্যক্তি কোন পদ্ধতিতে এবং কি ধরনের পুস্তক ও নথিপত্র সংরক্ষণ করিবেন উহা নির্ধারণ করিতে পারিবে৷]
                  </p>

                  <p className="mb-4">
                    <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (১) হিসাবে বিদ্যমান বিধান পুনঃসংখ্যায়িত এবং পুনঃসংখ্যায়িত উপ-ধারা (১) এর পর উপ-ধারা (২) অর্থ আইন, ২০১২ এর ৬৮ ধারাবলে সংযোজিত।'>৬</sup>[(২) কোন নিবন্ধিত ব্যক্তি বিধি দ্বারা নির্ধারিত হিসাব পুস্তকের অতিরিক্ত বাণিজ্যিক উদ্দেশ্যে সংরক্ষিত সকল বাণিজ্যিক দলিল বা হিসাব পুস্তকের নাম ও বিবরণ (ফরমেটসহ) সংক্রান্ত ঘোষণা সংশ্লিষ্ট স্থানীয় মূল্য সংযোজন কর কর্মকর্তার নিকট দাখিল করিবেন।]
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
                <sup className="font-bold">১</sup>"পুস্তক ও নথিপত্র" শব্দগুলি "নথিসমূহ" শব্দটির পরিবর্তে অর্থ আইন, ১৯৯৭ (১৯৯৭ সনের ১৫ নং আইন) এর ৬ ধারাবলে প্রতিস্থাপিত
              </p>
              <p>
                <sup className="font-bold">২</sup>"ফরম" শব্দটি "ফর্ম" শব্দটির পরিবর্তে অর্থ আইন, ১৯৯২ (১৯৯২ সনের ২১ নং আইন) এর ১১ ধারাবলে প্রতিস্থাপিত
              </p>
              <p>
                <sup className="font-bold">৩</sup>দফা (ঙঙ) অর্থ আইন, ২০০০ (২০০০ সনের ১৫ নং আইন) এর ৯৩ ধারাবলে সন্নিবেশিত
              </p>
              <p>
                <sup className="font-bold">৪</sup>"পুস্তক ও নথিপত্র" শব্দগুলি "নথিপত্র" শব্দটির পরিবর্তে অর্থ আইন, ১৯৯৭ (১৯৯৭ সনের ১৫ নং আইন) এর ৬ ধারাবলে প্রতিস্থাপিত
              </p>
              <p>
                <sup className="font-bold">৫</sup>শর্তাংশটি অর্থ আইন, ২০০১ (২০০১ সনের ৩০ নং আইন) এর ৭৯ ধারাবলে প্রতিস্থাপিত
              </p>
              <p>
                <sup className="font-bold">৬</sup>উপ-ধারা (১) হিসাবে বিদ্যমান বিধান পুনঃসংখ্যায়িত এবং পুনঃসংখ্যায়িত উপ-ধারা (১) এর পর উপ-ধারা (২) অর্থ আইন, ২০১২ এর ৬৮ ধারাবলে সংযোজিত।
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}