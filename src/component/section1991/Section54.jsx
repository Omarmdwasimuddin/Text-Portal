import React from 'react';
import Link from 'next/link';

export default function LawPage() {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Banner Section */}
        <div className="relative px-4 py-8 text-white bg-gradient-to-r from-green-600 to-green-800 md:px-8">
          <div className="text-center">
            <h1 className="mb-2 text-2xl font-bold md:text-4xl">
              মূল্য সংযোজন কর আইন, ১৯৯১
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              ( ১৯৯১ সনের ২২ নং আইন )
            </p>
            <div className="inline-block px-4 py-1 mt-3 bg-green-500 rounded-full shadow-md">
              <p className="text-sm font-medium md:text-base">[ ৩০ জুন, ১৯৯১ ]</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/regulations/acts/vat-acts/value-added-tax-act"
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
                <div>
                <p className="mb-4">
                    <span className="text-xl font-bold leading-tight text-gray-950 md:text-xl">৫৪৷ ধারা ৫২ এর অধীন প্রেরিত ব্যক্তির বিরুদ্ধে মূল্য সংযোজন কর কর্মকর্তা কর্তৃক তদন্ত পদ্ধতি---</span>
                    (১) ধারা ৫২ এর অধীন কোন ব্যক্তিকে কোন মূল্য সংযোজন কর কর্মকর্তার নিকট প্রেরণ করা হইলে উক্ত কর্মকর্তা তাহার বিরুদ্ধে আনীত অভিযোগের তদন্ত শুরু করিবেন৷
                    <br /><br />
                    (২) এই উদ্দেশ্যে মূল্য সংযোজন কর কর্মকর্তা, কোন থানার ভারপ্রাপ্ত কর্মকর্তা বিনা পরওয়ানায় গ্রেফতারযোগ্য কোন অপরাধের তদন্তের ক্ষেত্রে Code of Criminal Procedure এর অধীন যে ক্ষমতা প্রয়োগ করিতে পারেন এবং যে বিধানসমূহের আওতায় থাকেন সেই একই ক্ষমতা প্রয়োগ করিতে পারিবেন এবং সেই একই বিধানসমূহের আওতাধীন থাকিবেন:
                    <br /><br />
                    তবে শর্ত থাকে যে,-
                    <br /><br />
                    (ক) যদি মূল্য সংযোজন কর কর্মকর্তা এইরূপ অভিমত পোষণ করেন যে, অভিযুক্ত ব্যক্তির বিরুদ্ধে যথেষ্ট সাক্ষ্য রহিয়াছে বা সন্দেহের যুক্তিসংগত কারণ রহিয়াছে তাহা হইলে তিনি তাহাকে এখ্‌তিয়ারসম্পন্ন ম্যাজিষ্ট্রেটের সম্মুখে হাজির হওয়ার জন্য জামিন মঞ্জুর করিবেন অথবা উক্ত ম্যাজিষ্ট্রেটের হেফাজতে প্রেরণ করিবেন;
                    <br /><br />
                    (খ) যদি মূল্য সংযোজন কর কর্মকর্তার নিকট প্রতীয়মান হয় যে, অভিযুক্ত ব্যক্তির বিরুদ্ধে যথেষ্ট সাক্ষ্য নাই বা সন্দেহের যুক্তিসংগত কারণ নাই তাহা হইলে তিনি তাহার নির্দেশ মোতাবেক জামানত সহকারে বা জামানত ব্যতীত একটি মুচলেকা প্রদান সাপেক্ষে, এখ্‌তিয়ারসম্পন্ন ম্যাজিষ্ট্রেট যদি তলব করেন, এবং যখন তলব করেন তখন, তাহার সম্মুখে হাজির হওয়ার জন্য উক্ত ব্যক্তিকে জামিনে মুক্তি দিবেন এবং উক্ত মামলার পূর্ণ বিবরণী সম্বলিত একটি প্রতিবেদন তাহার উর্ধ্বতন কর্মকর্তার নিকট পেশ করিবেন৷
                </p>
                </div>
            </div>
            </div>


          </div>
        </div>

        {/* Footer Section */}
        <div className="">
            <div className="p-6">
                <div className="w-1/2 pb-2 mb-4 border-b border-gray-400">
                    {/* Horizontal line */}
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}