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
                    অষ্টম অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    কাস্টমস গ্যারান্টি
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৪৬। গ্যারান্টি অবমুক্ত এবং চার্জ বাতিলকরণ---</span> (১) কমিশনার অব কাস্টমস অথবা তদ্‌কর্তৃক ক্ষমতাপ্রাপ্ত কোনো যথাযথ কর্মকর্তা এই অধ্যায়ের বিধান অনুযায়ী কোনো গ্যারান্টি অবমুক্ত করিবার অনুমতি প্রদান করিতে পারিবেন, অথবা গ্যারান্টির কোনো শর্ত ভঙ্গ হইবার ক্ষেত্রে নিম্নতর পরিমাণ অর্থ বা জরিমানা পরিশোধ সাপেক্ষে তাহার বিবেচনা মতে অন্য কোনো প্রকার শর্ত ও সীমা আরোপ সাপেক্ষে উক্ত গ্যারান্টির উপর আরোপিত কোনো চার্জ বাতিল করিতে পারিবেন।
                </p>

                <p className="mb-4 text-sm">
                  (২) কোনো গ্যারান্টি হইতে জামানতকৃত দায় এই আইন ও বিধি অনুযায়ী নিষ্পত্তি হইলে, কমিশনার অব কাস্টমস বা তদ&কর্তৃক ক্ষমতাপ্রাপ্ত অন্য কোনো কাস্টমস কর্মকর্তা অবিলম্বে উক্ত গ্যারান্টি অবমুক্ত করিবেন বা নগদ জমা ফেরত প্রদান করিবেন:
                </p>

                <p className="mb-4 text-sm">
                  তবে শর্ত থাকে যে, উক্ত দায় আংশিক নিষ্পত্তি হইলে জামানতকৃত অর্থের সংশ্লিষ্ট অংশ বা আংশিক উদ্ভূত হইলে উক্ত দায় সংশ্লিষ্ট অর্থ ব্যতীত জামানতের অবশিষ্ট অংশ সংশ্লিষ্ট ব্যক্তির অনুরোধের প্রেক্ষিতে তদনুযায়ী অবমুক্ত করিতে হইবে, যদি সংশ্লিষ্ট অর্থ উক্তরূপ কার্যক্রমের ন্যায্যতাকে প্রতিপাদন করে।
                </p>

                <p className="mb-4 text-sm">
                  (৩) অভিন্ন, যুক্তিসংগত ও ন্যায়ানুগ সিদ্ধান্ত নিশ্চিত করিবার উদ্দেশ্যে, সরকার, গ্যারান্টি অবমুক্তকরণ এবং উহার অধীন আরোপিত চার্জ বাতিলের শর্তাবলি নির্ধারণের মানদণ্ড প্রতিষ্ঠাকল্পে বিধি প্রণয়ন করিবে।
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