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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>২১। কতিপয় ক্ষেত্রে কাউন্টারভেইলিং শুল্ক বা অ্যান্টি- ডাম্পিং শুল্ক আরোপণীয় নহে---</span> (১) ধারা ১৯ বা ২০ এ যাহা কিছুই থাকুক না কেন,-
                </p>

                <p className="mb-4 ml-6 text-sm">
                  (ক) ডাম্পিং অথবা রপ্তানি ভর্তুকির অভিন্ন পরিস্থিতিতে ক্ষতিপূরণের জন্য যুগপৎভাবে কোনো পণ্যের উপর কাউন্টারভেইলিং শুল্ক ও অ্যান্টি- ডাম্পিং শুল্ক আরোপ করা যাইবে না;
                </p>

                <p className="mb-4 ml-6 text-sm">
                  (খ) সরকার,-
                </p>

                <p className="mb-4 ml-12 text-sm">
                  (অ) উৎস দেশে ভোগের জন্য বা রপ্তানির জন্য অনুরূপ পণ্যের উপর প্রযোজ্য শুল্ক বা কর হইতে উক্ত পণ্যকে অব্যাহতি প্রদানের কারণে অথবা রপ্তানির কারণে বা উক্ত শুল্ক বা কর ফেরত (refund) প্রদানের কারণে ধারা ১৯ বা ২০ এর অধীন কোনো কাউন্টারভেইলিং শুল্ক বা অ্যান্টি- ডাম্পিং শুল্ক;
                </p>

                <p className="mb-4 ml-12 text-sm">
                  (আ) কোনো নির্দিষ্ট দেশ হইতে বাংলাদেশে কোনো পণ্য আমদানির ক্ষেত্রে, যদি ভর্তুকি বা ডাম্পিং এবং উহার পরিণতিতে স্থানীয় শিল্পের স্বার্থহানি হইবে মর্মে প্রাথমিকভাবে নিরূপণ করে, এবং আরও নিরূপণ করে যে, তদন্তকালীন সময়ে উক্ত স্বার্থহানি প্রতিরোধে শুল্ক আরোপ করা প্রয়োজন, তাহা হইলে, উপ- ধারা (২) এর অধীন প্রণীত বিধি অনুসরণ ব্যতীত, উক্তক্ষেত্রে, ধারা ১৯ এর উপ- ধারা (২) ও ধারা ২০ এর উপ- ধারা (২) এর অধীন কোনো কাউন্টারভেইলিং শুল্ক বা অ্যান্টি- ডাম্পিং শুল্ক-
                </p>

                <p className="mb-4 ml-6 text-sm">
                  আরোপ করিবে না:
                </p>

                <p className="mb-4 ml-6 text-sm">
                  তবে শর্ত থাকে যে, যদি বাংলাদেশে অনুরূপ পণ্য রপ্তানিকারী কোনো তৃতীয় দেশের স্থানীয় শিল্পের স্বার্থহানি বা স্বার্থহানির হুমকি রোধের উদ্দেশ্যে কোনো পণ্যের উপর কাউন্টারভেইলিং শুল্ক বা অ্যান্টি- ডাম্পিং শুল্ক আরোপ করা হইয়া থাকে, তাহা হইলে এই বিধান প্রযোজ্য হইবে না।
                </p>

                <p className="mb-4 ml-6 text-sm">
                  (গ) সরকার,-
                </p>

                <p className="mb-4 ml-12 text-sm">
                  (অ) যে কোনো সময়ে, রপ্তানিকারক দেশ বা অঞ্চলের সরকারের নিকট হইতে ভর্তুকি বিলুপ্ত বা সীমিত করিবার অথবা উহার প্রভাব সম্পর্কিত অন্যান্য ব্যবস্থা গ্রহণের সম্মতি সম্বলিত সন্তোষজনক স্বেচ্ছাপ্রণোদিত অঙ্গীকারনামাপ্রাপ্ত হইলে অথবা পণ্যের মূল্য সংশোধনে (revision) রপ্তানিকারক সম্মত হইলে এবং যদি সন্তুষ্ট হয় যে, ইহার ফলে ভর্তুকির ক্ষতিকর প্রভাব তিরোহিত হইবে, তাহা হইলে ধারা ১৯ এর অধীন কোনো কাউন্টারভেইলিং শুল্ক; এবং
                </p>

                <p className="mb-4 ml-12 text-sm">
                  (আ) যে কোনো সময়ে, রপ্তানিকারকের নিকট হইতে মূল্য সংশোধনের অথবা ডাম্পকৃত মূল্যে বিবেচ্য এলাকায় রপ্তানি বন্ধ করিবার সন্তোষজনক স্বেচ্ছাপ্রণোদিত অঙ্গীকারনামাপ্রাপ্ত হইলে এবং যদি সন্তুষ্ট হয় যে, এইরূপ ব্যবস্থার ফলে ডাম্পিং এর ক্ষতিকর প্রভাব তিরোহিত হইবে, তাহা হইলে ধারা ২০ এর অধীন কোনো অ্যান্টি- ডাম্পিং শুল্ক-
                </p>

                <p className="mb-4 ml-6 text-sm">
                  আরোপ করিবে না।
                </p>

                <p className="mb-4 text-sm">
                  (২) এই ধারার উদ্দেশ্য পূরণকল্পে, বিধি প্রণয়ন করা যাইবে।
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