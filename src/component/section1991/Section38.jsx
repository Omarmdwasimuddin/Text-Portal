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
                বাজেয়াপ্তকরণ
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
            <div className="space-y-6 text-gray-700">
                {/* Section 1 */}
                <div>
                <p className="mb-4">
                    ৩৮৷ যদি-
                </p>

                <p className="mb-4">
                    (১) কোন নিবন্ধনযোগ্য ব্যক্তি নিবন্ধিত হওয়ার পূর্বে কোন করযোগ্য পণ্য <sup className='text-blue-500 cursor-pointer' title='“প্রস্তুত বা উত্পাদন করেন বা করযোগ্য পণ্যের ব্যবসায়ে নিয়োজিত হন” শব্দগুলি “প্রস্তুত বা উত্পাদন করেন” শব্দগুলির পরিবর্তে অর্থ আইন, ১৯৯৬ (১৯৯৬ সনের ১৮ নং আইন) এর ৬ ধারাবলে প্রতিস্থাপিত'>১</sup>[প্রস্তুত বা উত্পাদন করেন বা করযোগ্য পণ্যের ব্যবসায়ে নিয়োজিত হন], তাহা হইলে উক্ত পণ্য বাজেয়াপ্তযোগ্য হইবে; অথবা
                </p>

                <p className="mb-4">
                    <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (২) অর্থ আইন, ২০০২ (২০০২ সনের ১৪ নং আইন) এর ৮৫ ধারাবলে প্রতিস্থাপিত'>২</sup>[(২) কোন নিবন্ধিত ব্যক্তি-
                </p>

                <p className="mb-4">
                    (ক) কোন করযোগ্য পণ্য চালানপত্র ব্যতিরেকে ব্যবসায় অঙ্গন হইতে অপসারণ করেন, বা
                </p>

                <p className="mb-4">
                    <sup className='text-blue-500 cursor-pointer' title='দফা (কক) অর্থ আইন, ২০০৪ (২০০৪ সনের ১৬ নং আইন) এর ৫৬ ধারাবলে সন্নিবেশিত'>৩</sup>[(কক) চালানপত্রে প্রদর্শিত কর অথবা সংশ্লিষ্ট পণ্য বা সেবার উপর প্রযোজ্য কর পরিশোধ ব্যতীত পণ্য সরবরাহ বা সেবা প্রদান করেন; বা]
                </p>

                <p className="mb-4">
                    (খ) করযোগ্য এইরূপ কোন পণ্য চালানপত্র সহ ব্যবসায় অঙ্গন হইতে অপসারণ করেন যাহার গন্তব্য স্থান পর্যন্ত উক্ত চালানপত্র উহার সহিত না থাকে, বা
                </p>

                <p className="mb-4">
                    (গ) ধারা ৬ এর উপ-ধারা (৪ক) এ বর্ণিত বিধান প্রতিপালনে ব্যর্থ হন,
                </p>

                <p className="mb-4">
                    তাহা হইলে উক্ত পণ্য বাজেয়াপ্তযোগ্য হইবে এবং উক্ত নিবন্ধিত ব্যক্তি, তাহার প্রতিনিধি বা উক্তরূপ কর্মকাণ্ডের সহিত জড়িত যে কোন ব্যক্তিকে উক্ত পণ্যের উপর প্রদেয় মূল্য সংযোজন কর বা, ক্ষেত্রমত, মূল্য সংযোজন কর ও সম্পূরক শুল্কের <sup className='text-blue-500 cursor-pointer' title='‘‘অন্যূন অর্ধেক এবং অনূর্ধ্ব সমপরিমাণ’’ শব্দগুলি ‘‘অন্যূন সমপরিমাণ এবং অনূর্ধ্ব দেড় গুণ পরিমাণ’’ শব্দগুলির পরিবর্তে অর্থ আইন, ২০১২ এর ৭২ ধারাবলে প্রতিস্থাপিত।'>৪</sup>[অন্যূন অর্ধেক এবং অনূর্ধ্ব সমপরিমাণ] অর্থ প্রদান করিতে হইবে৷]
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
                <sup className="font-bold">১</sup>"প্রস্তুত বা উত্পাদন করেন বা করযোগ্য পণ্যের ব্যবসায়ে নিয়োজিত হন" শব্দগুলি "প্রস্তুত বা উত্পাদন করেন" শব্দগুলির পরিবর্তে অর্থ আইন, ১৯৯৬ (১৯৯৬ সনের ১৮ নং আইন) এর ৬ ধারাবলে প্রতিস্থাপিত
            </p>
            <p>
                <sup className="font-bold">২</sup>উপ-ধারা (২) অর্থ আইন, ২০০২ (২০০২ সনের ১৪ নং আইন) এর ৮৫ ধারাবলে প্রতিস্থাপিত
            </p>
            <p>
                <sup className="font-bold">৩</sup>দফা (কক) অর্থ আইন, ২০০৪ (২০০৪ সনের ১৬ নং আইন) এর ৫৬ ধারাবলে সন্নিবেশিত
            </p>
            <p>
                <sup className="font-bold">৪</sup>''অন্যূন অর্ধেক এবং অনূর্ধ্ব সমপরিমাণ'' শব্দগুলি ''অন্যূন সমপরিমাণ এবং অনূর্ধ্ব দেড় গুণ পরিমাণ'' শব্দগুলির পরিবর্তে অর্থ আইন, ২০১২ এর ৭২ ধারাবলে প্রতিস্থাপিত।
            </p>
            </div>
        </div>
        </div>

      </div>
    </div>
  );
}