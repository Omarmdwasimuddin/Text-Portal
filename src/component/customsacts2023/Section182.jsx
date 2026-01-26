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
                    চতুর্বিংশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    কাস্টমস কর্মকর্তা কর্তৃক ক্ষমতা প্রয়োগ (enforcement)
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৮২। পরোয়ানা ব্যতীত তল্লাশি এবং গ্রেফতারের ক্ষমতা---</span> (১) অ্যাসিস্ট্যান্ট কমিশনার অব কাস্টমস পদমর্যাদার নিম্ন নহেন এইরূপ কোনো কাস্টমস কর্মকর্তা অথবা এই আইনের অধীন চোরাচালান নিরোধে নিয়োজিত অন্য কোনো কর্মকর্তার নিকট যদি এই মর্মে বিশ্বাস করিবার যুক্তিসঙ্গত কারণ থাকে যে, বাজেয়াপ্তযোগ্য কোনো পণ্য অথবা কোনো দলিলপত্র অথবা কোনো জিনিসপত্র, যাহা তাহার মতে এই আইনের অধীন গৃহীত কোনো কার্যধারার জন্য ব্যবহার উপযোগী অথবা প্রাসঙ্গিক, তাহা কোনো স্থানে লুকানো বা রক্ষিত রহিয়াছে এবং ধারা ১৮১ এর অধীন তল্লাশি কার্যকর করিবার পূর্বে উহা অপসারিত হওয়ার আশঙ্কা রহিয়াছে, তাহা হইলে তিনি তাহার বিশ্বাসের কারণসমূহের, এবং তল্লাশি করা হইবে সেইরূপ পণ্যসমূহ, দলিলপত্র অথবা জিনিসপত্রের একটি লিখিত বিবরণ প্রস্তুতপূর্বক ঐ স্থানে উক্ত পণ্য, দলিলপত্র অথবা জিনিসপত্রের জন্য তল্লাশি করিবেন অথবা করাইবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) উপ- ধারা (১) এর অধীন যে কর্মকর্তা বা ব্যক্তি তল্লাশি করিবেন অথবা করাইবেন তিনি পূর্বোল্লিখিত বিবরণের একখানি স্বাক্ষরিত কপি তল্লাশকৃত স্থানে অথবা উহার নিকট রাখিয়া আসিবেন এবং তল্লাশি করিবার সময়ে অথবা ইহার পর যথাশীঘ্র সম্ভব উক্ত বিবরণের আরও একটি স্বাক্ষরিত অনুলিপি স্থানটির বাসিন্দার সর্বশেষ জ্ঞাত ঠিকানায় প্রেরণ করিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) এই ধারার অধীন সকল তল্লাশি ফৌজদারি কার্যবিধির বিধান অনুসারে, প্রয়োজনীয় অভিযোজনসহ, পরিচালিত হইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৪) পূর্বোল্লিখিত উপ- ধারায় যাহা কিছুই থাকুক না কেন, অ্যাসিস্ট্যান্ট কমিশনার অব কাস্টমস পদমর্যাদার নিম্নে নহেন এমন কর্মকর্তার পূর্বানুমোদন সাপেক্ষে, কোনো কাস্টমস কর্মকর্তা অথবা এইরূপ ক্ষমতাপ্রাপ্ত কোনো ব্যক্তি কোনো চোরাচালান অপরাধের ক্ষেত্রে,-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক) উক্ত অপরাধের সহিত সংশ্লিষ্ট কোনো ব্যক্তিকে, অথবা যাহার বিরুদ্ধে যুক্তিসঙ্গত সন্দেহ বিদ্যমান যে তিনি উক্ত অপরাধের সহিত সহসা সংশ্লিষ্ট হইবেন তাহাকে বিনা পরোয়ানায় গ্রেফতার করিতে পারিবেন;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (খ) দফা (ক) এর অধীন গ্রেফতার করিতে বিনা পরোয়ানায় কোনো আঙ্গিনায় প্রবেশ এবং তল্লাশি করিতে পারিবেন অথবা আপাতত বলবৎ নিষিদ্ধকরণ অথবা বিধি- নিষেধের পরিপন্থিভাবে চোরাচালান হইতে পারে এইরূপ যুক্তিসঙ্গত সন্দেহযুক্ত কোনো পণ্য, এবং এই আইনের অধীন কোনো কার্যধারায় তাহার বিবেচনায় প্রাসঙ্গিক অথবা উপযোগী হইতে পারে এমন সকল দলিলপত্র অথবা জিনিসপত্র আটক করিতে পারিবেন; এবং
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (গ) উক্ত অপরাধের সহিত সংশ্লিষ্ট অথবা সংশ্লিষ্ট হওয়ার সম্ভাবনা রহিয়াছে এইরূপ ব্যক্তিকে গ্রেফতার করা, আটক করা বা তত্ত্বাবধানে লওয়া অথবা তাহার পলায়ন রোধ করিবার উদ্দেশ্যে অথবা যে পণ্যের ক্ষেত্রে উক্তরূপ কোনো অপরাধ সংঘটিত হইয়াছে অথবা সংঘটিত হইবার সম্ভাবনা রহিয়াছে, উহা আটক করিবার অথবা উহার অপসারণ রোধ করিবার উদ্দেশ্যে, প্রয়োজনবোধে মৃত্যু সংঘটিত হইতে পারে এমন মাত্রায়, বল প্রয়োগ করিতে অথবা করাইতে পারিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৫) উপ- ধারা (৪) এর বিধানাবলি কেবল বাংলাদেশের স্থল সীমান্তের ৮ (আট) কিলোমিটারের মধ্যবর্তী এলাকায়, এবং বাংলাদেশের জলসীমা বরাবর ২৪ (চব্বিশ) নটিক্যাল মাইলের (Contiguous Zone সহ) মধ্যবর্তী বলয়ের মধ্যে প্রযোজ্য হইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৬) উপ- ধারা (১) বা (২) এর অধীন অথবা উপ- ধারা (৫) এ উল্লিখিত এলাকাসমূহে উপ- ধারা (৪) এর অধীন অর্পিত ক্ষমতা প্রয়োগে কোনো ব্যক্তি কর্তৃক কোনো কিছু করিবার জন্য অথবা করিবার অভিপ্রায়ের জন্য, সরকারের লিখিত অনুমোদন ব্যতিরেকে, তাহার বিরুদ্ধে কোনো দেওয়ানি মোকদ্দমা, ফৌজদারি মামলা অথবা অন্য কোনো আইনগত কার্যধারা গ্রহণ করা যাইবে না।
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