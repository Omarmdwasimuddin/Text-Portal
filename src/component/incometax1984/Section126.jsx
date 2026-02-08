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
                    ষোড়শ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    ওয়্যারহাউসিং
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১২৬। ওয়্যারহাউস হইতে অসঙ্গতভাবে অপসারিত বা নির্দিষ্ট মেয়াদের বেশি সময়ে রাখিবার অনুমোদনপ্রাপ্ত বা ক্ষতিগ্রস্ত বা ধ্বংসপ্রাপ্ত বা নমুনা হিসাবে গৃহীত পণ্যের উপর শুল্ক---</span> নিম্নবর্ণিত পণ্যসমূহের ক্ষেত্রে যথাযথ কর্মকর্তা দাবিনামা জারি করিতে পারিবেন এবং এইরূপ দাবিনামার প্রেক্ষিতে পণ্যসমূহের মালিক উহাদের ক্ষেত্রে প্রদেয় সমুদয় ভাড়া, জরিমানা, সুদ এবং অন্যান্য চার্জসহ উহাদের উপর আরোপণীয় সমুদয় পরিমাণ শুল্ক অবিলম্বে পরিশোধ করিবেন, যথা:-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক) ধারা ১১৮ লঙ্ঘন করিয়া অপসারিত ওয়্যারহাউসকৃত পণ্য;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (খ) ধারা ১২০ এর অধীন অপসারণের জন্য অনুমোদিত সময়ের মধ্যে ওয়্যারহাউস হইতে অপসারণ না করা পণ্য;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (গ) যে সকল পণ্যের ক্ষেত্রে ধারা ১০৯ অথবা এই আইনের অধীন প্রণীত বিধিমালা অনুযায়ী বন্ড সম্পাদিত হইয়াছে এবং যাহা দেশীয় ভোগের জন্য অথবা রপ্তানির জন্য খালাস করা হয় নাই অথবা এই আইনের বিধান অনুসারে অপসারণ করা হয় নাই অথবা যাহা ধারা ১১৬ এবং ১১৭ এ ব্যবস্থিত হয় নাই অথবা ধারা ১২৯ এ উল্লিখিত বিধান ব্যতীত অন্যভাবে ক্ষতিগ্রস্ত অথবা ধ্বংসপ্রাপ্ত হইয়াছে অথবা যথাযথ কর্মকর্তার সন্তুষ্টিমতে যাহার হিসাব প্রদান করা হয় নাই সেই সকল পণ্য; এবং
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ঘ) ধারা ১১৬ এর অধীন নমুনা হিসাবে গৃহীত পণ্য।
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