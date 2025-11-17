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
                সরকারের পুনরীক্ষণের ক্ষমতা
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
                <div className="space-y-6 text-black">
                    {/* Section 1 */}
                    <div>
                        <p className="mb-4">
                            ৪৫৷ সরকার <sup className='text-blue-500 cursor-pointer' title='“ধারা ৪৩ এর অধীন বোর্ড কর্তৃক” শব্দগুলি ও সংখ্যাটি “ধারা ৪২ বা ধারা ৪৩ এর অধীন বোর্ড বা কোন মূল্য সংযোজন কর কর্মকর্তা কর্তৃক” শব্দগুলি ও সংখ্যাগুলির পরিবর্তে অর্থ আইন, ১৯৯৫ (১৯৯৫ সনের ১২ নং আইন) এর ৮ ধারাবলে প্রতিস্থাপিত'>১</sup>[ধারা ৪৩ এর অধীন বোর্ড কর্তৃক] প্রদত্ত কোন সিদ্ধান্ত বা আদেশ দ্বারা অথবা বোর্ড কর্তৃক ধারা ৪৩ এর অধীন অধিকতর মূল্যের পণ্য বাজেয়াপ্তকরণ অথবা বাজেয়াপ্তির পরিবর্তে কোন জরিমানা বৃদ্ধিকরণ অথবা কোন অর্থদণ্ড আরোপকরণ বা আরোপিত হয় নাই বা কম আরোপিত হইয়াছে এইরূপ কোন কর প্রদানে বাধ্যকরণের কোন আদেশ দ্বারা সংক্ষুব্ধ কোন ব্যক্তির আবেদনক্রমে যদি উক্ত আবেদন উক্ত সিদ্ধান্ত বা আদেশ প্রদানের তারিখ হইতে চার মাসের মধ্যে পেশ করা হইয়া থাকে তত্সম্পর্কে সরকার যেরূপ যথাযথ বিবেচনা করে সেইরূপ আদেশ প্রদান করিতে পারিবে:
                        </p>

                        <p className="mb-4">
                            তবে শর্ত থাকে যে, যদি সরকার এই মর্মে সন্তুষ্ট হয় যে, আবেদনকারী যথেষ্ট কারণবশতঃ উপরি-উক্ত চার মাস মেয়াদের মধ্যে আবেদন পেশ করিতে সক্ষম হন নাই, তাহা হইলে সরকার আবেদনকারীকে উক্ত মেয়াদের পরবর্তী চার মাসের মধ্যে আবেদন পেশ করার অনুমতি দিতে পারিবে:
                        </p>

                        <p className="mb-4">
                            আরও শর্ত থাকে যে, অধিকতর মূল্যের পণ্য <sup className='text-blue-500 cursor-pointer' title='“বাজেয়াপ্তকরণের” শব্দটি “বাজেয়াপ্তিকরণের” শব্দটির পরিবর্তে অর্থ আইন, ২০০২ (২০০২ সনের ১৪ নং আইন) এর ৮৯ ধারাবলে প্রতিস্থাপিত'>২</sup>[বাজেয়াপ্তকরণের] কোন আদেশ বা বাজেয়াপ্তির পরিবর্তে জরিমানা বৃদ্ধির কোন আদেশ বা কোন অর্থদণ্ড আরোপের কোন আদেশ বা আরোপিত হয় নাই বা কম আরোপিত হইয়াছে এইরূপ মূল্য সংযোজন কর বা, ক্ষেত্রমত, সম্পূরক শুল্ক পরিশোধের আদেশ, উহা দ্বারা ক্ষতিগ্রস্ত হইতে পারেন এইরূপ ব্যক্তিকে উহার বিরুদ্ধে কারণ দর্শাইবার সুযোগ দান না করিয়া এবং ব্যক্তিগতভাবে বা তাহার নিকট হইতে যথাযথভাবে ক্ষমতাপ্রাপ্ত কোন কৌসুলী বা অন্য কোন ব্যক্তির মাধ্যমে শুনানির সুযোগ দান না করিয়া, প্রদান করা যাইবে না৷
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
                        <sup className="font-bold">১</sup>“ধারা ৪৩ এর অধীন বোর্ড কর্তৃক” শব্দগুলি ও সংখ্যাটি “ধারা ৪২ বা ধারা ৪৩ এর অধীন বোর্ড বা কোন মূল্য সংযোজন কর কর্মকর্তা কর্তৃক” শব্দগুলি ও সংখ্যাগুলির পরিবর্তে অর্থ আইন, ১৯৯৫ (১৯৯৫ সনের ১২ নং আইন) এর ৮ ধারাবলে প্রতিস্থাপিত
                    </p>
                    <p>
                        <sup className="font-bold">২</sup>“বাজেয়াপ্তকরণের” শব্দটি “বাজেয়াপ্তিকরণের” শব্দটির পরিবর্তে অর্থ আইন, ২০০২ (২০০২ সনের ১৪ নং আইন) এর ৮৯ ধারাবলে প্রতিস্থাপিত
                    </p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}