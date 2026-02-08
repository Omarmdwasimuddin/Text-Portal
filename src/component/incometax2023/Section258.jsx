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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>২৫৮। কাস্টমস রুলিং প্রদানের ক্ষমতা---</span> (১) কোনো বিশেষ পরিস্থিতিতে এই আইনে বা কোনো বিধির কোনো বিধান প্রয়োগ সংক্রান্ত বিষয়ে অথবা পণ্যের শ্রেণিবিন্যাস অথবা শুল্ক হার অথবা কাস্টমস শুল্কায়নের উদ্দেশ্যে মূল্য নিরূপণ সংক্রান্ত বিষয়ে, কোনো ব্যক্তির আবেদনক্রমে অথবা কমিশনার অব কাস্টমস পদমর্যাদার নিম্নে নহেন এইরূপ কোনো কাস্টমস কর্মকর্তা কর্তৃক প্রেরিত সূত্রের বরাতে অথবা স্বতঃপ্রবৃত্ত হইয়া বোর্ড আবেদনপত্র অথবা ক্ষেত্রমত, সূত্রে উল্লিখিত কোনো বিষয় সম্পর্কে কাস্টমস রুলিং প্রদান করিতে পারিবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) অপর্যাপ্ত তথ্য পরিবেশনের কারণে অথবা আবেদনপত্র অথবা ক্ষেত্রমত, সূত্রে প্রদর্শিত যুক্তিসমূহের সমর্থনে ফলাফল নিরূপণকারী সাক্ষ্যের অনুপস্থিতিতে বোর্ড কোনো কাস্টমস রুলিং প্রদানের অস্বীকৃতি জানাইতে পারিবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) বোর্ড সময় সময় কোনো কাস্টমস রুলিং পুনরীক্ষণ এবং উক্ত রুলিং এর অন্তর্ভুক্ত কোনো ভুল সংশোধন করিতে পারিবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৪) কোনো ব্যক্তি, কোনো পণ্যের কাস্টমস শুল্ক নির্ধারণের উদ্দেশ্যে সংশ্লিষ্ট পণ্যের শ্রেণিবিন্যাস ও অরিজিন বিষয়ে অগ্রিম রুলিং যাচনা করিয়া বোর্ডের নিকট আবেদন করিতে পারিবেন এবং বোর্ড তদনুযায়ী সংশ্লিষ্ট বিষয়ে অগ্রিম রুলিং প্রদান করিতে পারিবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৫) এই ধারার অধীন অগ্রিম রুলিং প্রদানের সময়সীমা, রুলিং বিবেচনার ক্ষেত্রে শর্ত ও সীমাবদ্ধতাসহ আনুষঙ্গিক বিষয়াদি বিধি দ্বারা নির্ধারিত হইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৬) এই ধারার অধীন প্রদত্ত যে কোনো কাস্টমস রুলিং এবং অগ্রিম রুলিং সংশ্লিষ্ট ব্যক্তি, আবেদনকারী ও সকল কাস্টমস কর্মকর্তাগণ কর্তৃক অবশ্য পরিপালনীয় হইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  ব্যাখ্যা।- এই ধারার উদ্দেশ্য পূরণকল্পে, ‘অগ্রিম রুলিং’ বলিতে কোনো আবেদনপত্রে উল্লিখিত কোনো পণ্য আমদানির পূর্বে, বোর্ড কর্তৃক কোনো আবেদনকারীকে প্রদত্ত কোনো লিখিত সিদ্ধান্তকে বুঝাইবে, যাহাতে উক্ত পণ্য আমদানির সময় কোনো কাস্টমস কর্মকর্তা উক্ত পণ্যের ক্ষেত্রে কিরূপ আচরণ (treatment) করিবেন তাহার উল্লেখ থাকিবে।
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