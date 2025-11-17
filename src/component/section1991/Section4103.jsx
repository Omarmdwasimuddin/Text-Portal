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
                বিকল্প বিরোধ-নিষ্পত্তির আওতা ও পরিধি
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
                <div className="space-y-6 text-black">
                    {/* Section 1 */}
                    <div>
                        <p className="mb-4">
                            <sup className='text-blue-500 cursor-pointer' title='ধারা ৪১গ অর্থ আইন, ২০১২ এর ৭৪ ধারাবলে প্রতিস্থাপিত ।'>১</sup>[৪১গ। বিকল্প বিরোধ-নিষ্পত্তির আওতা ও পরিধি।- (১) ধারা (২) এর দফা (ণণ) এর অধীন অর্থের মাধ্যমে পরিমাপযোগ্য মূল্য, ধারা ৫ এর অধীন কর ধার্যের জন্য মূল্য নিরূপন এবং ধারা ৮ এর অধীন টার্ণওভার কর নির্ধারণ ও পরিশোধ এবং তদসংক্রান্ত বিধি বা আদেশ বিষয়ে-
                        </p>

                        <p className="mb-4">
                            (ক) ধারা ৯ এর অধীন কর রেয়াত গ্রহণ,
                        </p>

                        <p className="mb-4">
                            (খ) ধারা ২৬ক এর অধীন নিরীক্ষা ও অনুসন্ধান,
                        </p>

                        <p className="mb-4">
                            (গ) ধারা ৩১ এর অধীন হিসাব রক্ষণ,
                        </p>

                        <p className="mb-4">
                            (ঘ) ধারা ৩৬ এর অধীন দাখিলপত্র পরীক্ষা,
                        </p>

                        <p className="mb-4">
                            (ঙ) ধারা ৩৭ এর অধীন দন্ড আরোপ,
                        </p>

                        <p className="mb-4">
                            (চ) ধারা ৫৫ এর অধীন দাবীনামা জারি,
                        </p>

                        <p className="mb-4">
                            (ছ) ধারা ৬৭ এর অধীন কর ফেরত প্রদান,
                        </p>

                        <p className="mb-4">
                            সংক্রান্ত বিধানের আওতায় সংশ্লিষ্ট মূল্য সংযোজন কর কর্তৃপক্ষ কর্তৃক গৃহিত কোন কার্যক্রম বা প্রদত্ত কোন আদেশ বা সিদ্ধান্তের কারণে উদ্ভূত বিরোধ, অথবা এই আইনের অধীন বিকল্প বিরোধ নিষ্পত্তির বিধান প্রবর্তনের পূর্বে বা পরে উদ্ভূত উক্তরূপ কোন বিরোধ, যাহা সংশ্লিষ্ট মূল্য সংযোজন কর কর্তৃপক্ষ বা আপীল কর্তৃপক্ষ বা সুপ্রীম কোর্টের আপীল বিভাগ বা হাইকোর্ট বিভাগে বিচারাধীন রহিয়াছে, বিকল্প বিরোধ নিষ্পত্তির জন্য উপযুক্ত বলিয়া বিবেচিত হইবে।
                        </p>

                        <p className="mb-4">
                            <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (২) অর্থ আইন, ২০১৬ (২০১৬ সনের ২৮ নং আইন) এর ৭০ ধারাবলে প্রতিস্থাপিত (with effect from 1st July 2016).'>২</sup>[(২) উপ-ধারা (১) এ যাহা কিছুই থাকুক না কেন, জালিয়াতি বা ফৌজদারি অপরধ সংক্রান্ত মামলা এবং জনস্বার্থে সাধারণ বিচারিক প্রক্রিয়ায় নিষ্পত্তি হওয়া প্রয়োজন, এইরূপ গুরুত্বপূর্ণ আইনগত বিষয় বা উহার ব্যাখ্যা সম্পর্কিত বিরোধসমূহ এই আইনের অধীন বিকল্প বিরোধ নিষ্পত্তি প্রক্রিয়ার আওতা বহির্ভূত হইবে।]]
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
            <p className="text-xs text-gray-600 italic">
              <sup className="font-bold">১</sup>ধারা ৪১গ অর্থ আইন, ২০১২ এর ৭৪ ধারাবলে প্রতিস্থাপিত ।
            </p>
            <p className="text-xs text-gray-600 italic mt-2">
              <sup className="font-bold">২</sup>উপ-ধারা (২) অর্থ আইন, ২০১৬ (২০১৬ সনের ২৮ নং আইন) এর ৭০ ধারাবলে প্রতিস্থাপিত (with effect from 1st July 2016).
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}