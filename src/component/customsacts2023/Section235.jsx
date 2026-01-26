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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>২৩৫। সরকার কর্তৃক নথিপত্র, ইত্যাদি তলব এবং পরীক্ষা করিবার ক্ষমতা---</span> সরকার স্বতঃপ্রবৃত্ত হইয়া অথবা কোনো সংক্ষুব্ধ ব্যক্তির আবেদনক্রমে এই আইন বা বিধির অধীন কোনো আদেশ সংক্রান্ত কার্যধারার নথিপত্র, আদেশ প্রদানের ১ (এক) বৎসরের মধ্যে উক্ত আদেশের বৈধতা বা ন্যায্যতা সম্পর্কে সন্তুষ্ট হওয়ার উদ্দেশ্যে তলব ও পরীক্ষা করিতে পারিবে এবং উক্তরূপ পরীক্ষান্তে দৃশ্যত প্রতীয়মান কোনো ভুল বা অশুদ্ধতা সংশোধন করিয়া তদ্‌সম্পর্কে উহা যেরূপ বিবেচনা করে সেইরূপ আদেশ প্রদান করিতে পারিবে:
                </p>

                <p className="mb-4 ml-10 text-sm">
                  তবে শর্ত থাকে যে, অধিকতর মূল্যের পণ্য বাজেয়াপ্তকরণের কোনো আদেশ, বা বাজেয়াপ্তকরণের পরিবর্তে জরিমানা বৃদ্ধির কোনো আদেশ, অথবা কোনো অর্থদণ্ড আরোপের কোনো আদেশ বা অধিকতর পরিমাণ শুল্ক পরিশোধের কোনো আদেশ, উহা দ্বারা ক্ষতিগ্রস্ত হইতে পারেন এইরূপ ব্যক্তিকে উহার বিরুদ্ধে কারণ দর্শানোর সুযোগ প্রদান না করিয়া এবং ব্যক্তিগতভাবে অথবা তাহার নিকট হইতে যথাযথভাবে ক্ষমতাপ্রাপ্ত কোনো কৌঁসুলী বা অন্য কোনো ব্যক্তির মাধ্যমে শুনানির সুযোগ প্রদান না করিয়া, প্রদান করা যাইবে না।
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
              
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}