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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৭৪। কাস্টমস নিয়ন্ত্রণের প্রয়োগ---</span> (১) বোর্ড কর্তৃক নির্দেশনা সাপেক্ষে, কোনো কাস্টমস কর্মকর্তা, তাহার আইনগত ক্ষমতার মধ্যে, তাহার বিবেচনায় প্রয়োজনীয় সকল কাস্টমস নিয়ন্ত্রণ পরিচালনা করিতে পারিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) ঝুঁকি চিহ্নিতকরণ ও মূল্যায়ন করার এবং উহার প্রতিরোধ ব্যবস্থা গ্রহণের উদ্দেশ্যে, স্থানীয়, জাতীয় বা আন্তর্জাতিক পর্যায়ে উন্নয়ন করা হয়েছে এইরূপ ইলেক্ট্রনিক তথ্য প্রক্রিয়াকরণের কৌশল, যদি থাকে, অনুসরণ করিয়া তথ্যাদি প্রক্রিয়াকরণের মাধ্যমে প্রণীত ঝুঁকি পর্যালোচনা হইবে দৈবচয়নের ভিত্তিতে পরীক্ষাসহ কাস্টমস নিয়ন্ত্রণের প্রাথমিক ভিত্তি।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) বোর্ড স্বয়ংক্রিয় ঝুঁকি ব্যবস্থাপনাসহ একটি সামগ্রিক কাস্টমস ঝুঁকি ব্যবস্থাপনা দপ্তর স্থাপন করিবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৪) কাস্টমস ঝুঁকি ব্যবস্থাপনা দপ্তর আন্তর্জাতিক যাত্রী, পণ্য, কার্গো বা যানবাহনের উপর কাস্টমস নিয়ন্ত্রণের প্রয়োগ এবং সমন্বিত ঝুঁকি ব্যবস্থাপনার লক্ষ্যে অন্যান্য সরকারি সংস্থার প্রতিনিধির সমন্বয়ে ন্যাশনাল রিস্ক টার্গেটিং সেন্টার গঠন করিতে পারিবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৫) এই ধারার উদ্দেশ্য পূরণকল্পে, বোর্ড প্রয়োজনীয় সংখ্যক কাস্টমস কর্মকর্তা ও কর্মচারি নিয়োগ করিতে পারিবে এবং বিধি ও কর্মপদ্ধতি প্রণয়ন করিতে পারিবে।
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