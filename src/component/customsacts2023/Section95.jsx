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
                    দ্বাদশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    পণ্যের ঘোষণা এবং ছাড়করণ
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৯৫। নির্ধারিত মেয়াদের মধ্যে শুল্কায়ন না করা পণ্যের ক্ষেত্রে পদ্ধতি---</span> যদি এই আইনের বিধানাবলির অধীন আটককৃত, জব্দকৃত, বাজেয়াপ্তকৃত, ন্যায়নির্ণয়নাধীন বা আপিলাধীন পণ্য ব্যতীত, যথাযথভাবে পণ্য ঘোষণা উপস্থাপন করা হইয়াছে এইরূপ অন্য কোনো পণ্য, ৭ (সাত) কার্যদিবসের মধ্যে শুল্কায়ন করা না হয়, তাহা হইলে উক্ত পণ্যের আমদানিকারক ৩ (তিন) কার্যদিবসের মধ্যে শুল্কায়নের জন্য কমিশনারকে নোটিশ প্রদান করিতে পারিবেন এবং উক্ত কমিশনার বা তাহার পক্ষে ক্ষমতাপ্রাপ্ত অন্য কোনো কর্মকর্তা, আমদানি বৈধ হইলে, শুল্কায়ন করিবেন অথবা আমদানি বৈধ না হইলে, কারণ দর্শানো নোটিশ জারি করিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  ব্যাখ্যা।- এই ধারার উদ্দেশ্য পূরণকল্পে, “আটককৃত পণ্য” বলিতে রাসায়নিক পরীক্ষা বা তেজস্ক্রিয়তা পরীক্ষার জন্য বা শ্রেণিবিন্যাস, মূল্য, আমদানিযোগ্যতা বা অন্য কোনো আইনগত বিরোধ নিষ্পত্তির লক্ষ্যে আটককৃত পণ্য অন্তর্ভুক্ত হইবে।
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