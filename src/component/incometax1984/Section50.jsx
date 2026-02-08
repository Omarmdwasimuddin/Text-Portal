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
                    নবম অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    যানবাহনের আগমন এবং প্রস্থান
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৫০। দৈবদূর্বিপাক---</span> যদি কোনো দুর্ঘটনা, খারাপ আবহাওয়া বা অন্য কোনো অনিবার্য কারণে কোনো যানবাহনের ভারপ্রাপ্ত ব্যক্তি (person- in- charge) ধারা ৪৯ এ উল্লিখিত বাধ্যবাধকতা পরিপালনে ব্যর্থ হন, তাহা হইলে উক্ত ভারপ্রাপ্ত ব্যক্তি নিম্নরূপ কার্যক্রম গ্রহণ করিবেন, যথা:-
                </p>

                <p className="mb-4 text-sm">
                  (ক) যানবাহনের আগমন নিকটতম কাস্টমস কর্মকর্তা অথবা থানার ভারপ্রাপ্ত কর্মকর্তার নিকট অবিলম্বে অবহিত করিবেন এবং চাহিদামত উক্ত যানবাহনের কার্গোবুক অথবা মেনিফেস্ট অথবা লগ-বুক তাহার নিকট উপস্থাপন করিবেন;
                </p>

                <p className="mb-4 text-sm">
                  (খ) উক্ত কর্মকর্তার সম্মতি ব্যতীত যানবাহনটিতে পরিবহণকৃত কোনো পণ্য খালাসের অথবা কোনো ক্রু-সদস্য অথবা যাত্রীকে ঐ এলাকা হইতে প্রস্থানের অনুমতি দিবেন না;
                </p>

                <p className="mb-4 text-sm">
                  (গ) উক্ত কর্মকর্তা কর্তৃক কোনো পণ্যের ক্ষেত্রে প্রদত্ত যে কোনো নির্দেশ পরিপালন করিবেন; এবং কোনো যাত্রী বা ক্রু- সদস্য এইরূপ কোনো কর্মকর্তার সম্মতি ব্যতীত যানবাহনটির এলাকা ত্যাগ করিবেন না:
                </p>

                <p className="mb-4 text-sm">
                  তবে শর্ত থাকে যে, যানবাহনটির যাত্রী অথবা ক্রু- সদস্যদের স্বাস্থ্য, নিরাপত্তা বা জীবন অথবা সম্পত্তি রক্ষার প্রয়োজন হইলে এই ধারার কোনো কিছুই উক্ত যানবাহন এর সংলগ্ন এলাকা হইতে কোনো যাত্রী অথবা ক্রু- সদস্যের প্রস্থান বর্হিগমন অথবা যানবাহনটি হইতে কোনো পণ্য খালাসকে বিরত করিবে না ।
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