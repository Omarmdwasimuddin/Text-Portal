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
                    সপ্তবিংশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    বিবিধ
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>২৪৪। এজেন্ট কর্তৃক ক্ষমতা প্রদান সংক্রান্ত দলিল দাখিল---</span> (১) যদি কোনো ব্যক্তি অন্য কোনো ব্যক্তির পক্ষে কোনো কাস্টমস কর্মকর্তার সঙ্গে কোনো নির্দিষ্ট কার্য সম্পাদনের অনুমতির জন্য উক্ত কর্মকর্তার নিকট আবেদন করেন, তাহা হইলে তিনি আবেদনকারীকে যে ব্যক্তির পক্ষে কার্য সম্পাদন করা হইবে তাহার নিকট হইতে লিখিত ক্ষমতা প্রদান সংক্রান্ত দলিল দাখিল করিবেন এবং উক্ত ক্ষমতা প্রদান সংক্রান্ত দলিল দাখিল করিতে ব্যর্থ হইলে এইরূপ অনুমতি প্রদানে অসম্মতি প্রদান করিতে পারিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) কোনো ব্যক্তি বা বাণিজ্যিক প্রতিষ্ঠানের করণিক, কর্মচারী বা এজেন্ট উক্ত ব্যক্তি বা প্রতিষ্ঠানের পক্ষে কাস্টম হাউসে কার্য সম্পাদন করিতে পারিবেন:
                </p>

                <p className="mb-4 ml-10 text-sm">
                  তবে শর্ত থাকে যে, উক্ত ব্যক্তি বা প্রতিষ্ঠানের কোনো সদস্য এইরূপ করণিক, কর্মচারী বা এজেন্টকে উক্ত কার্য সম্পাদনের জন্য ক্ষমতাপ্রাপ্ত যথাযথ কর্মকর্তার নিকট শনাক্ত না করিলে এবং এইরূপ করণিক, কর্মচারী বা এজেন্টকে উক্ত ব্যক্তি বা ফার্মের পক্ষে উক্ত কার্য সম্পাদনের ক্ষমতা প্রদান করিয়া লিখিত এবং যথাযথভাবে স্বাক্ষরিত লিখিত কর্তৃত্ব উপরি- উক্ত কর্মকর্তার নিকট জমা প্রদান না করিলে তিনি এইরূপ করণিক, কর্মচারী বা এজেন্টকে আমলে লইতে অস্বীকার করিতে পারিবেন।
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