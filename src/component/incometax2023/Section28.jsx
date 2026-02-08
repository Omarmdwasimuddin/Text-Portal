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
                <span className='text-lg font-bold leading-tight text-black md:text-lg'>
                  ২৮। ক্ষতিগ্রস্ত, অবনতিপ্রাপ্ত, নিখোঁজ অথবা ধ্বংসপ্রাপ্ত পণ্যের শুল্ক হ্রাসকরণ---
                </span>
              </p>

              <p className="mb-4 text-sm">
                (১) যেক্ষেত্রে মালিক কর্তৃক আবেদনের সূত্রে কোনো আমদানিকৃত পণ্যের প্রথম পরীক্ষাকালে
                অ্যাসিস্ট্যান্ট কমিশনার অব কাস্টমস পদমর্যাদার নিম্নে নহেন এইরূপ কর্মকর্তা সন্তুষ্ট হন যে-
              </p>

              <p className="mb-4 ml-6 text-sm">
                (ক) অবতরণকালে অথবা তাহার পূর্বে যে কোনো সময়ে পণ্য ক্ষতিগ্রস্ত বা অবনতিপ্রাপ্ত হইয়াছে; বা
              </p>

              <p className="mb-4 ml-6 text-sm">
                (খ) অবতরণের পর, কিন্তু উক্ত পরীক্ষার পূর্বে যে কোনো সময় কোনো দুর্ঘটনা বা প্রাকৃতিক দুর্যোগ
                বা দৈবদুর্বিপাক (act of God) দ্বারা, যাহা মালিক অথবা তাহার এজেন্টের কোনো ইচ্ছাকৃত কর্ম,
                অবহেলা অথবা ব্যর্থতার কারণে নহে, পণ্য ক্ষতিগ্রস্ত হইয়াছে;
              </p>

              <p className="mb-4 text-sm">
                সেইক্ষেত্রে মালিকের লিখিত আবেদনক্রমে উক্ত পণ্যের মূল্য যথাযথ কর্মকর্তা কর্তৃক নিরূপণ
                করা হইবে এবং পণ্যের উক্তরূপ হ্রাসকৃত মূল্য নিরূপণের অনুপাত অনুসারে মালিককে শুল্ক
                অব্যাহতি প্রদান করা হইবে।
              </p>

              <p className="mb-4 text-sm">
                (২) যেক্ষেত্রে কোনো আমদানিকৃত পণ্যের মালিক কর্তৃক লিখিতভাবে আবেদনের সূত্রে কমিশনার অব
                কাস্টমস এই মর্মে সন্তুষ্ট হন যে, আমদানির পর কিন্তু দেশীয় ভোগের উদ্দেশ্যে খালাসের পূর্বে
                দুর্ঘটনা বা প্রাকৃতিক দুর্যোগ অথবা দৈবদুর্বিপাকের ফলে পণ্য ক্ষতিগ্রস্ত, অবনতিপ্রাপ্ত,
                নিখোঁজ অথবা ধ্বংসপ্রাপ্ত হইয়াছে, সেই ক্ষেত্রে উক্ত ক্ষতি, অবনতি, নিখোঁজ অথবা ধ্বংসের
                সত্যতা প্রমাণের জন্য সকল প্রয়োজনীয় তথ্য উপস্থাপনপূর্বক পণ্যের মালিক কর্তৃক পেশকৃত
                আবেদনক্রমে কমিশনার অব কাস্টমস একজন যথাযথ কর্মকর্তা কর্তৃক উক্ত পণ্যের মূল্য নিরূপণের
                অনুমতি প্রদান করিতে পারিবেন এবং পণ্যের মালিককে উক্তরূপ মূল্য নিরূপণে যে হারে মূল্য
                হ্রাস পাইয়াছে সেই আনুপাতিক হারে উক্ত পণ্যের উপর প্রদেয় অথবা পরিশোধিত শুল্ক অব্যাহতি
                বা ফেরত প্রদান করিতে পারিবেন।
              </p>

              <p className="mb-4 text-sm">
                (৩) যে ক্ষেত্রে কমিশনার অব কাস্টমস এর সন্তুষ্টিমতে দেখা যায় যে, ওয়্যারহাউসকৃত কোনো পণ্য
                দেশীয় ভোগের জন্য খালাসের পূর্বে কোনো দুর্ঘটনা বা প্রাকৃতিক দুর্যোগ অথবা দৈবদুর্বিপাকে
                ক্ষতিগ্রস্ত হইয়াছে, সেই ক্ষেত্রে উক্ত ক্ষতির সত্যতা প্রমাণের জন্য সকল প্রয়োজনীয় তথ্য
                উপস্থাপনপূর্বক পণ্যের মালিক কর্তৃক পেশকৃত আবেদনক্রমে কমিশনার অব কাস্টমস একজন যথাযথ
                কর্মকর্তা কর্তৃক উক্ত পণ্যের মূল্য নিরূপণের অনুমতি প্রদান করিতে পারিবেন এবং পণ্যের
                মালিককে উক্তরূপ মূল্য নিরূপণে যে হারে মূল্য হ্রাস পাইয়াছে সেই আনুপাতিক হারে শুল্ক
                অব্যাহতি প্রদান করা হইবে।
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