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
                বোর্ডের নথিপত্র, ইত্যাদি তলব ও পরীক্ষার ক্ষমতা
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
                <div className="space-y-6 text-black">
                    {/* Section 1 */}
                    <div>
                        <p className="mb-4">
                            ৪৩৷ (১) বোর্ড স্বতঃপ্রবৃত্ত হইয়া এই আইনের অধীন কোন কার্যধারার নথিপত্র, উহাতে বোর্ডের অধস্তন কোন মূল্য সংযোজন কর কর্মকর্তা কর্তৃক প্রদত্ত আদেশ বা সিদ্ধান্তের বৈধতা বা ন্যায্যতা সম্পর্কে সন্তুষ্ট হওয়ার উদ্দেশ্যে, তলব ও পরীক্ষা করিতে পারিবে এবং উহা তত্সম্পর্কে যেরূপ বিবেচনা করে সেইরূপ আদেশ দান করিতে পারিবে:
                        </p>

                        <p className="mb-4">
                            তবে শর্ত থাকে যে, অধিকতর মূল্যের পণ্য <sup className='text-blue-500 cursor-pointer' title='“বাজেয়াপ্তকরণের” শব্দটি “বাজেয়াপ্তিকরণের” শব্দটির পরিবর্তে অর্থ আইন, ২০০২ (২০০২ সনের ১৪ নং আইন) এর ৮৮ ধারাবলে প্রতিস্থাপিত'>১</sup>[বাজেয়াপ্তকরণের] কোন আদেশ, বা বাজেয়াপ্তির পরিবর্তে জরিমানা বৃদ্ধির কোন আদেশ, বা কোন অর্থদণ্ড আরোপের কোন আদেশ, বা আরোপিত হয় নাই বা কম আরোপিত হইয়াছে এইরূপ মূল্য সংযোজন কর বা, ক্ষেত্রমত, সম্পূরক শুল্ক পরিশোধের আদেশ, উহা দ্বারা ক্ষতিগ্রস্ত হইতে পারেন এইরূপ ব্যক্তিকে উহার বিরুদ্ধে কারণ দর্শাইবার সুযোগ দান না করিয়া এবং ব্যক্তিগতভাবে বা তাহার নিকট হইতে যথাযথভাবে ক্ষমতাপ্রাপ্ত কোন কৌসুলী বা অন্য কোন ব্যক্তির মাধ্যমে শুনানির সুযোগ দান না করিয়া, প্রদান করা যাইবে না৷
                        </p>

                        <p className="mb-4">
                            (২) কোন মূল্য সংযোজন কর কর্মকর্তার আদেশ বা সিদ্ধান্ত সম্পর্কিত কোন কার্যধারার নথিপত্র উক্ত আদেশ বা সিদ্ধান্ত প্রদানের দুই বত্সর অতিবাহিত হওয়ার পর উপ-ধারা (১) এর অধীন তলব এবং পরীক্ষা করা যাইবে না৷
                        </p>

                        <p className="mb-4">
                            (৩) যে ক্ষেত্রে ধারা ৪২ এর উপ-ধারা (১) এর অধীন কোন আপীল বিবেচনাধীন রহিয়াছে সে ক্ষেত্রে উক্ত আপীল নিষ্পত্তি না হওয়া পর্যন্ত উপ-ধারা (১) এর অধীন কোন কার্যধারা শুরু করা যাইবে না৷
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
                        <sup className="font-bold">১</sup>“বাজেয়াপ্তকরণের” শব্দটি “বাজেয়াপ্তিকরণের” শব্দটির পরিবর্তে অর্থ আইন, ২০০২ (২০০২ সনের ১৪ নং আইন) এর ৮৮ ধারাবলে প্রতিস্থাপিত
                    </p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}