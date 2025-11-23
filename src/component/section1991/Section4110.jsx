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
                মতৈক্যের ভিত্তিতে বিরোধ-নিষ্পত্তির ফলাফল
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
                <div className="space-y-6 text-black">
                    {/* Section 1 */}
                    <div>
                        <p className="mb-4">
                            ৪১ঝ। (১) এই আইনে যাহা কিছুই থাকুক না কেন, বিকল্প বিরোধ-নিষ্পত্তি প্রক্রিয়ার মাধ্যমে কোন বিরোধ মতৈক্যের ভিত্তিতে নিষ্পত্তি করা হইলে উক্তরূপ গৃহীত সিদ্ধান্ত উভয় পক্ষের মধ্যে বাধ্যতামূলক হইবে।
                        </p>

                        <p className="mb-4">
                            (২) বিকল্প বিরোধ-নিষ্পত্তির মাধ্যমে আবেদনকারী ব্যক্তি বা মূল্য সংযোজন কর কর্তৃপক্ষের মধ্যে সম্পাদিত মতৈক্যের ভিত্তিতে গৃহীত সিদ্ধান্তের বিরুদ্ধে আপীল কর্তৃপক্ষ বা অন্য কোন আদালতে কোনরূপ আপত্তি উত্থাপন করা যাইবে না।
                        </p>

                        <p className="mb-4">
                            (৩) এই আইনের অধীন মতৈক্যের ভিত্তিতে নিষ্পত্তিকৃত প্রতিটি আদেশ, আদেশে বর্ণিত প্রতিটি বিষয় চূড়ান্ত বলিয়া গণ্য হইবে এবং উক্তরূপ গৃহীত চূড়ান্ত সিদ্ধান্তসমূহ ব্যতীত বিরোধের যে অংশ উক্ত সিদ্ধান্তের অন্তভুর্ক্ত থাকিবে না, তাহা এই আইনের আওতায় অথবা বলবৎযোগ্য অন্য যে কোন আইনের আওতায় কার্যক্রম গ্রহণের জন্য উন্মুক্ত থাকিবে।
                        </p>

                        <p className="mb-4">
                            <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (৪) অর্থ আইন, ২০১২ এর ৭৯ ধারাবলে প্রতিস্থাপিত ।'>১</sup>[(৪) ধারা ৪১জ এর উপ-ধারা (৩) অনুযায়ী কোন পক্ষ প্রতিশ্রুত সময়সীমার মধ্যে মূল্য সংযোজন কর বা, ক্ষেত্রমত, মূল্য সংযোজন কর ও সম্পূরক শুল্ক, অর্থদন্ড বা জরিমানা পরিশোধ বা ফেরত প্রদানে ব্যর্থ হইলে, উক্ত সময়সীমা উত্তীর্ণের পর সংশ্লিষ্ট পক্ষ পরিশোধযোগ্য বা ফেরতযোগ্য মূল্য সংযোজন কর বা, ক্ষেত্রমত, মূল্য সংযোজন কর ও সম্পূরক শুল্ক, অর্থদন্ড, জরিমানার উপর মাসিক ৩ (তিন) শতাংশ হারে সুদ প্রদান করিবে এবং প্রযোজ্য ক্ষেত্রে ধারা ৫৬ বা ধারা ৬৭ এর বিধান অনুযায়ী উহা আদায় বা, ক্ষেত্রমত, ফেরত প্রদান করা যাইবে।]
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
                <sup className="font-bold">১</sup>উপ-ধারা (৪) অর্থ আইন, ২০১২ এর ৭৯ ধারাবলে প্রতিস্থাপিত ।
            </p>
            </div>
        </div>
        </div>

      </div>
    </div>
  );
}