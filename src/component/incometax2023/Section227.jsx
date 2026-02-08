import React from 'react';
import Link from 'next/link';

export default function LawPage() {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-xl">
        {/* Banner Section */}
        <div className="relative px-4 py-8 text-white bg-gradient-to-r from-green-700 to-green-700 md:px-8">
          <div className="text-center">
            <h1 className="mb-2 text-xl md:text-2xl">
              কাস্টমস আইন, ২০২৩
            </h1>
            <p className="text-sm md:text-sm opacity-90">
              ( ২০২৩ সনের ৫৭ নং আইন )
            </p>
            <div className="inline-block px-4 py-1 mt-3 bg-green-500 rounded-full shadow-md">
              <p className="text-sm font-medium md:text-sm">[ ১৩ নভেম্বর, ২০২৩ ]</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/regulations/acts/customs-acts/customs-act-2023"
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
                

              <div className="py-2 text-black bg-gradient-to-r from-green-300 to-green-300 md:px-8">
                <div className="text-center">
                  <h1 className="text-lg font-bold">
                    ষষ্ঠবিংশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    আপিল এবং পুনরীক্ষণ
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>২২৭। আপিল ট্রাইব্যুনালের আদেশ---</span> (১) আপিলের সহিত সংশ্লিষ্ট পক্ষসমূহকে শুনানির সুযোগ প্রদান করিয়া আপিল ট্রাইব্যুনাল যে সিদ্ধান্ত বা আদেশের বিরুদ্ধে আপিল করা হইয়াছে উহা বহাল রাখিয়া, পরিবর্তন করিয়া অথবা বাতিল করিয়া যেরূপ উপযুক্ত বিবেচনা করিবে ইহার উপর সেইরূপ আদেশ প্রদান করিতে পারিবে অথবা যে কর্তৃপক্ষ উক্ত সিদ্ধান্ত বা আদেশটি প্রদান করিয়াছে সেই কর্তৃপক্ষের নিকট আপিল কর্তৃপক্ষ যেরূপ সঙ্গত বিবেচনা করিবে সেইরূপ নির্দেশসহ মামলাটি প্রয়োজনমত অধিকতর সাক্ষ্য গ্রহণপূর্বক নূতনভাবে ন্যায়নির্ণয়ন অথবা সিদ্ধান্তের জন্য ফেরত (remand) প্রদান করিতে পারিবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) উপ-ধারা (১) এ প্রদত্ত কোনো আদেশের নথিপত্র হইতে পরিদৃষ্ট কোনো ভুল সংশোধনের উদ্দেশ্যে আপিল ট্রাইব্যুনাল আদেশের তারিখ হইতে ১ (এক) বৎসরের মধ্যে যে কোনো সময়ে উক্ত আদেশ সংশোধন করিতে পারিবে এবং কমিশনার অব কাস্টমস অথবা আপিলের অন্য পক্ষ কর্তৃক কোনো ভুল ইহার নজরে আনয়ন করা হইলে উক্তরূপ সংশোধন করিতে পারিবে:
                </p>

                <p className="mb-4 ml-10 text-sm">
                  তবে শর্ত থাকে যে, শুল্ক বৃদ্ধি করিতে অথবা প্রত্যর্পণ হ্রাস করিতে অথবা অন্য পক্ষের দায় বৃদ্ধি করিতে পারে আপিল ট্রাইব্যুনাল কর্তৃক এইরূপ কোনো সংশোধনী উক্ত পক্ষকে নোটিশ প্রদান ও ব্যক্তিগত শুনানির সুযোগ প্রদান না করিয়া করা যাইবে না ।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) আপিল ট্রাইব্যুনাল এই ধারায় প্রদত্ত প্রত্যেক আদেশের কপি সংশ্লিষ্ট কমিশনার অব কাস্টমস এবং আপিলের অন্য পক্ষকে প্রেরণ করিবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৪) ধারা ২৩০ এ যেরূপ বিধৃত রহিয়াছে সেইরূপ ব্যতীত ট্রাইব্যুনাল কর্তৃক আপিলের উপর প্রদত্ত আদেশ চূড়ান্ত বলিয়া গণ্য হইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  <sup className='text-blue-500'title='উপ-ধারা (৫) অর্থ আইন, ২০২৪ (২০২৪ সনের ৫ নং আইন) এর ৯৮ ধারাবলে প্রতিস্থাপিত যাহা ২০২৪ সনের ১ জুলাই হইতে কার্যকর।'>১</sup>[(৫) আপিলকারী, বিচারাধীন কোনো আপিল মামলায়, আপিলাধীন কোনো আদেশ স্থগিত চাহিয়া অথবা কোনো অন্তর্বর্তী আদেশ চাহিয়া আপিল ট্রাইব্যুনালের নিকট আবেদন করিতে পারিবে এবং সে মোতাবেক আপিল ট্রাইব্যুনাল উক্ত আবেদন বিবেচনা করত উহার উপর আইনানুগ আদেশ প্রদান করিতে পারিবে।]
                </p>

              </div>
                
                
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="">
          <div className="p-6">
            <div className="w-1/2 pb-2 mb-4 border-b border-gray-700">
              {/* Horizontal line */}
            </div>
            <p className="text-xs italic text-gray-950">
              ১ উপ-ধারা (৫) অর্থ আইন, ২০২৪ (২০২৪ সনের ৫ নং আইন) এর ৯৮ ধারাবলে প্রতিস্থাপিত যাহা ২০২৪ সনের ১ জুলাই হইতে কার্যকর।<br/>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}