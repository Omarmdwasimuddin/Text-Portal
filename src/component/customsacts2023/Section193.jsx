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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৯৩। পুলিশ কর্তৃক সন্দেহবশত জব্দকৃত পণ্যের ক্ষেত্রে পদ্ধতি---</span> (১) এই আইনের অধীনে বাজেয়াপ্তযোগ্য কোনো জিনিসপত্র যখন কোনো পুলিশ কর্মকর্তা কর্তৃক চোরাই মাল সন্দেহে জব্দ করা হয় তখন তিনি যে থানায় অথবা আদালতে উক্ত জিনিসপত্র চুরি হওয়া বা উক্তরূপ জব্দকরণ সম্পর্কিত অভিযোগ দায়ের করেন অথবা যেস্থানে চুরি বা উক্তরূপ জব্দকরণ সম্পর্কে কোনো তদন্ত চলমান থাকে, সেই থানা বা আদালতে উহা হেফাজত করিবেন এবং সংশ্লিষ্ট অভিযোগ খারিজ না হওয়া পর্যন্ত বা তদন্ত অথবা উহা হইতে উদ্ভূত কোনো বিচার সমাপ্ত না হওয়া পর্যন্ত উক্তস্থানে উহা আটক রাখিতে পারিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) উপ- ধারা (১) এ উল্লিখিত প্রত্যেক ক্ষেত্রে জিনিসপত্র জব্দকারী পুলিশ কর্মকর্তা উহাদের জব্দকরণের এবং আটক রাখিবার একটি লিখিত নোটিশ নিকটতম কাস্টমস গুদামে প্রেরণ করিবেন এবং অভিযোগ খারিজ অথবা তদন্ত বা বিচার সমাপ্ত হওয়ার অব্যবহিত পর উক্ত জিনিসপত্র নিকটতম কাস্টমস গুদামে বহন এবং জমাদানের ব্যবস্থা করাইবেন, যাহাতে আইন অনুসারে যথাযথ কার্যধারা গ্রহণের জন্য উহা উক্ত স্থানে রক্ষিত থাকে।
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