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
                             <span className="text-xl font-bold leading-tight text-gray-950 md:text-xl">৪৪৷ বোর্ডের ভুল, ইত্যাদি সংশোধনের ক্ষমতা---</span>(১) বোর্ড এই আইন বা বিধির কোন বিধান অনুযায়ী প্রদত্ত কোন আদেশের নথিপত্র হইতে আপাত কোন ভুল বা অশুদ্ধতা স্বতঃপ্রবৃত্ত হইয়া, বা উক্ত আদেশ প্রদানের এক বত্সরের মধ্যে কোন ব্যক্তির আবেদনক্রমে, সংশোধন করিতে পারিবে:
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
        <div className="">
            <div className="p-6">
                <div className="w-1/2 pb-2 mb-4 border-b border-gray-400">
                    {/* Horizontal line */}
                </div>
                <div className="space-y-2 text-xs italic text-gray-600">
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