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
                বোর্ডের ভুল, ইত্যাদি সংশোধনের ক্ষমতা
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
                <div className="space-y-6 text-black">
                    {/* Section 1 */}
                    <div>
                        <p className="mb-4">
                            ৪৪৷ (১) বোর্ড এই আইন বা বিধির কোন বিধান অনুযায়ী প্রদত্ত কোন আদেশের নথিপত্র হইতে আপাত কোন ভুল বা অশুদ্ধতা স্বতঃপ্রবৃত্ত হইয়া, বা উক্ত আদেশ প্রদানের এক বত্সরের মধ্যে কোন ব্যক্তির আবেদনক্রমে, সংশোধন করিতে পারিবে:
                        </p>

                        <p className="mb-4">
                            তবে শর্ত থাকে যে, কোন জরিমানা বৃদ্ধি করিতে বা অধিকতর মূল্য সংযোজন কর বা, ক্ষেত্রমত, সম্পূরক শুল্ক প্রদানে বাধ্য করিতে পারে এইরূপ কোন সংশোধন, উক্ত সংশোধন দ্বারা ক্ষতিগ্রস্ত হইতে পারেন এমন ব্যক্তিকে ব্যক্তিগতভাবে বা তাহার নিকট হইতে যথাযথভাবে ক্ষমতাপ্রাপ্ত কোন কৌসুলী বা অন্য কোন ব্যক্তির মাধ্যমে শুনানির সুযোগ দান না করিয়া, করা যাইবে না <sup className='text-blue-500 cursor-pointer' title='দাঁড়ির (৷) পরিবর্তে কোলন (:) প্রতিস্থাপিত এবং অতঃপর শর্তাংশটি অর্থ আইন, ১৯৯৮ (১৯৯৮ সনের ১৪ নং আইন) এর ৭ ধারাবলে সংযোজিত'>১</sup>[:
                        </p>

                        <p className="mb-4">
                            আরও শর্ত থাকে যে, যেই ক্ষেত্রে ধারা ৪২ এর অধীনে আপীল করার সুযোগ থাকা সত্ত্বেও আবেদনকারী উক্ত সুযোগ গ্রহণ করেন নাই, সেই ক্ষেত্রে এই উপ-ধারার অধীনে তাহার আবেদন গ্রহণযোগ্য হইবে না৷]
                        </p>

                        <p className="mb-4">
                            (২) যে ক্ষেত্রে ধারা ৪৫ এর অধীন কোন আবেদন করা হইয়াছে সেক্ষেত্রে উপ-ধারা (১) এর অধীন কোন কার্যধারা শুরু করা যাইবে না এবং যে ক্ষেত্রে উক্তরূপ কোন আবেদন বিবেচনাধীন রহিয়াছে সেক্ষেত্রে উক্তরূপ শুরুকৃত কার্যধারা বাতিল হইয়া যাইবে৷
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
                        <sup className="font-bold">১</sup>দাঁড়ির (৷) পরিবর্তে কোলন (:) প্রতিস্থাপিত এবং অতঃপর শর্তাংশটি অর্থ আইন, ১৯৯৮ (১৯৯৮ সনের ১৪ নং আইন) এর ৭ ধারাবলে সংযোজিত
                    </p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}