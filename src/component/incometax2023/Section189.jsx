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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৮৯। সাক্ষ্য প্রদান এবং দলিল বা পণ্য উপস্থাপন করিবার জন্য ব্যক্তির উপর সমন জারির ক্ষমতা---</span> (১) কোনো গেজেটেড কাস্টমস কর্মকর্তা কোনো পণ্য চোরাচালানের সহিত সংশ্লিষ্ট তদ্‌কর্তৃক পরিচালিত কোনো তদন্তে সাক্ষ্য প্রদান বা দলিলপত্র অথবা অন্য কোনো জিনিসপত্র উপস্থাপন করিবার জন্য কোনো ব্যক্তির উপস্থিতি আবশ্যক বলিয়া বিবেচনা করিলে, সেই ব্যক্তির উপর তাহার সমন জারি করিবার ক্ষমতা থাকিবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) দলিলপত্র বা অন্য কোনো জিনিসপত্র উপস্থাপন সম্পর্কিত সমন তলবকৃত ব্যক্তির দখলে বা নিয়ন্ত্রণে থাকা কোনো নির্দিষ্ট দলিলপত্র বা জিনিসপত্র অথবা কতিপয় বর্ণনার সকল দলিলপত্র বা জিনিসপত্র সম্পর্কে হইতে পারিবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) উপ- ধারা (১) এর অধীন সমনকৃত সকল ব্যক্তি সংশ্লিষ্ট কর্মকর্তার নির্দেশ মোতাবেক সশরীরে অথবা ক্ষমতাপ্রাপ্ত প্রতিনিধির মাধ্যমে উপস্থিত হইতে বাধ্য থাকিবেন; এবং উক্তভাবে সমনকৃত সকল ব্যক্তি যে কোনো বিষয় সম্পর্কে তাহাদের পরীক্ষা করিবার সময়ে সত্য বলিতে অথবা বিবৃতি প্রদান করিতে এবং যেরূপ আবশ্যক হইতে পারে সেইরূপ দলিলপত্র এবং জিনিসপত্র উপস্থাপন করিতে বাধ্য থাকিবেন:
                </p>

                <p className="mb-4 ml-10 text-sm">
                  তবে শর্ত থাকে যে, দেওয়ানি কার্যবিধির ধারা ১৩২ এর অধীন প্রদেয় অব্যাহতি এই ধারার অধীন উপস্থিতির জন্য তলবের ক্ষেত্রেও প্রযোজ্য হইবে ।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৪) এই ধারায় উল্লিখিত প্রতিটি তদন্ত দণ্ডবিধির ধারা ১৯৩ এবং ধারা ২২৮ এর মর্মানুযায়ী বিচারিক কার্যধারা হিসাবে গণ্য হইবে।
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