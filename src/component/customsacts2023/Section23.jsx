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
                    ষষ্ঠ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    কাস্টমস শুল্ক আরোপ ও অব্যাহতি
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>২৩। সেইফগার্ড শুল্ক আরোপ---</span> (১) সরকার উপযুক্ত তদন্ত করিয়া যদি সন্তুষ্ট হয় যে, কোনো পণ্য বাংলাদেশে এইরূপ বেশি পরিমাণে এবং এইরূপ শর্তে আমদানি করা হইতেছে যাহা স্থানীয় শিল্পের গুরুতর স্বার্থহানি ঘটাইতে পারে অথবা স্বার্থহানি ঘটাইবার হুমকির সৃষ্টি করিতে পারে, তাহা হইলে সরকার, সরকারি গেজেটে প্রজ্ঞাপন দ্বারা, উক্ত পণ্যের উপর সেইফগার্ড শুল্ক আরোপ করিতে পারিবে:
                </p>

                <p className="mb-4 text-sm">
                  তবে শর্ত থাকে যে, সরকার, সরকারি গেজেটে প্রজ্ঞাপন দ্বারা, উহার বিবেচনায় যেরূপ সংগত মনে হয়, সেইরূপ শর্ত, সীমা বা বিধি- নিষেধ আরোপ সাপেক্ষে, যে কোনো পণ্যকে আরোপণীয় সেইফগার্ড শুল্ক হইতে সম্পূর্ণ বা আংশিক অব্যাহতি প্রদান করিতে পারিবে।
                </p>

                <p className="mb-4 text-sm">
                  (২) উপ- ধারা (১) এর অধীন স্বার্থহানি বা স্বার্থহানির হুমকি নির্ধারণের বিষয়টি অনিষ্পন্ন থাকা অবস্থায়, যদি নির্ধারিত পদ্ধতিতে পরিচালিত প্রাথমিক নির্ধারণে দেখা যায় যে, বর্ধিত আমদানি স্থানীয় শিল্পের গুরুতর স্বার্থহানি করিয়াছে অথবা স্বার্থহানির হুমকি সৃষ্টি করিয়াছে, তাহা হইলে তদ্‌ভিত্তিতে সরকার সাময়িক সেইফগার্ড শুল্ক আরোপ করিতে পারিবে:
                </p>

                <p className="mb-4 ml-6 text-sm">
                  তবে শর্ত থাকে যে, যদি চূড়ান্ত নির্ধারণের পর সরকার এইরূপ অভিমত পোষণ করে যে, বর্ধিত আমদানি কোনো স্থানীয় শিল্পের স্বার্থহানি ঘটায় নাই বা স্বার্থহানির হুমকি সৃষ্টি করে নাই, তাহা হইলে সরকার উক্তরূপে আদায়কৃত শুল্ক ফেরত প্রদান করিবে:
                </p>

                <p className="mb-4 ml-6 text-sm">
                  আরও শর্ত থাকে যে, সাময়িক সেইফগার্ড শুল্ক, আরোপের তারিখ হইতে ২০০ (দুইশত) দিবসের অধিক বলবৎ থাকিবে না।
                </p>

                <p className="mb-4 text-sm">
                  (৩) এই ধারার অধীন আরোপিত শুল্ক এই আইনের অধীন অথবা আপাতত বলবৎ অন্য কোনো আইনের অধীন আরোপিত শুল্কের অতিরিক্ত হইবে।
                </p>

                <p className="mb-4 text-sm">
                  (৪) পূর্বেই প্রত্যাহার করা না হইলে, এই ধারার অধীন আরোপিত শুল্ক আরোপের তারিখ হইতে ৪ (চার) বৎসর সমাপ্তির পর অকার্যকর হইয়া যাইবে:
                </p>

                <p className="mb-4 ml-6 text-sm">
                  তবে শর্ত থাকে যে, যদি সরকার এই অভিমত পোষণ করে যে, স্থানীয় শিল্প উক্ত স্বার্থহানি অথবা স্বার্থহানির হুমকির সহিত খাপ খাওয়ানোর জন্য ব্যবস্থা গ্রহণ করিয়াছে এবং উক্ত সেইফগার্ড শুল্ক আরোপ বহাল থাকা প্রয়োজন, তাহা হইলে সরকার উক্ত আরোপের মেয়াদ বাড়াইতে পারিবে:
                </p>

                <p className="mb-4 ml-6 text-sm">
                  আরও শর্ত থাকে যে, কোনো অবস্থাতেই উক্ত সেইফগার্ড শুল্ক উহা প্রথম আরোপের তারিখ হইতে ১০ (দশ) বৎসর সময়ের অধিক আরোপ করা যাইবে না।
                </p>

                <p className="mb-4 text-sm">
                  (৫) এই ধারার উদ্দেশ্য পূরণকল্পে, বিধি প্রণয়ন করা যাইবে।
                </p>

                <p className="mb-4 text-sm">
                  ব্যাখ্যা।- এই ধারার উদ্দেশ্যপূরণকল্পে-
                </p>

                <p className="mb-4 ml-6 text-sm">
                  (ক) “স্থানীয় শিল্প” অর্থ সেই সকল উৎপাদনকারীগণ-
                </p>

                <p className="mb-4 ml-12 text-sm">
                  (অ) যাহারা সম্পূর্ণভাবে কোনো অনুরূপ পণ্য বা কোনো প্রত্যক্ষভাবে প্রতিযোগি পণ্য বাংলাদেশে উৎপাদন করেন; অথবা
                </p>

                <p className="mb-4 ml-12 text-sm">
                  (আ) যাহাদের বাংলাদেশে কোনো অনুরূপ পণ্যের বা কোনো প্রত্যক্ষভাবে প্রতিযোগি পণ্যের মোট সম্মিলিত উৎপাদনের পরিমাণ বাংলাদেশে উক্ত পণ্যের মোট উৎপাদনের একটি প্রধান হিস্যা গঠন করে;
                </p>

                <p className="mb-4 ml-6 text-sm">
                  (খ) “গুরুতর স্বার্থহানি” অর্থ এইরূপ কোনো স্বার্থহানি, যাহা কোনো স্থানীয় শিল্পের অবস্থানকে লক্ষ্যনীয় মাত্রায় ভারসাম্যহীন করে; এবং
                </p>

                <p className="mb-4 ml-6 text-sm">
                  (গ) “গুরুতর স্বার্থহানির হুমকি” অর্থ গুরুতর স্বার্থহানির কোনো সুস্পষ্ট এবং অত্যাসন্ন ঝুঁকি।
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