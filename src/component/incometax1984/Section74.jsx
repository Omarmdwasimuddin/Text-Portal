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
                    একাদশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    কার্গো খালাস এবং পণ্যের অন্তর্মুখী (inward) এন্ট্রি
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৭৪। অনুমোদিত সময়ের মধ্যে নৌযান হইতে খালাস না করা পণ্যের ক্ষেত্রে পদ্ধতি---</span> (১) যদি-
                </p>

                <p className="mb-4 text-sm">
                  (ক) পণ্য খালাসের অনুমতি প্রদানের পর, বোর্ড কর্তৃক নির্দিষ্টকৃত সময়ের মধ্যে নৌযানে আমদানিকৃত পণ্য (নামানো হইবে না বলিয়া কার্গো ঘোষণায় প্রদর্শিত পণ্য ব্যতীত) নামানো না হয়; বা
                </p>

                <p className="mb-4 text-sm">
                  (খ) সামান্য পরিমাণ পণ্য ব্যতীত নৌযানের অন্যান্য পণ্য উক্তরূপে নির্দিষ্টকৃত সময় অতিক্রান্ত হওয়ার পূর্বে খালাস করা হয়;
                </p>

                <p className="mb-4 text-sm">
                  তাহা হইলে উক্ত নৌযানের মাস্টার বা তাহার আবেদনক্রমে যথাযথ কর্মকর্তা, উক্ত পণ্য কাস্টমস হাউসে বহন করিতে পারিবেন এবং উহা উক্ত স্থানে এন্ট্রির অপেক্ষায় থাকিবে।
                </p>

                <p className="mb-4 text-sm">
                  (২) উপ- ধারা (১) এর অধীন কোনো পণ্য কাস্টমস হাউসে আনয়ন করা হইলে যথাযথ কর্মকর্তা উক্ত পণ্যের দায়িত্ব গ্রহণ করিবেন এবং উহার জন্য প্রাপ্তি রসিদ প্রদান করিবেন; এবং যদি নৌযানের মাস্টার বা এজেন্ট কর্তৃক উপযুক্ত কর্মকর্তাকে এই মর্মে লিখিত নোটিশ প্রদান করা হয় যে, পণ্যসমূহ ফ্রেইট, প্রাইমেজ, জেনারেল এভারেজ, ডেমারেজ, কন্টেইনার ডিটেনশন চার্জ, ডেড- ফ্রেইট, টার্মিনাল হ্যান্ডলিং চার্জ, কন্টেইনার সার্ভিস চার্জ বা অন্য কোনো চার্জ এর লিয়েনের অধীন থাকিবে, তাহা হইলে যথাযথ কর্মকর্তা বর্ণিত চার্জসমূহ পরিশোধ করা হইয়াছে মর্মে লিখিত নোটিশ না পাওয়া পর্যন্ত উক্ত পণ্য তাহার দখলে রাখিবেন।
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