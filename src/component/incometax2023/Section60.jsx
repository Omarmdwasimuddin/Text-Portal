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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৬০। বন্দর ছাড়পত্র বা প্রস্থানের অনুমতি বাতিল করিবার ক্ষমতা---</span> (১) এই আইন, বিধি বা অন্য কোনো আইনের বিধান পরিপালন নিশ্চিত করিবার উদ্দেশ্যে যদি কোনো নৌযান কোনো বন্দর এলাকার মধ্যে থাকে বা অন্য কোনো যানবাহন কোনো স্টেশন বা বিমানবন্দর বা বাংলাদেশের ভূখণ্ডের অভ্যন্তরে থাকে, তাহা হইলে যে কোনো সময়ে যথাযথ কর্মকর্তা বন্দর ছাড়পত্র বা প্রস্থানের লিখিত অনুমতি ফেরত প্রদানের দাবি করিতে পারিবেন।
                </p>

                <p className="mb-4 text-sm">
                  (২) উপ-ধারা (১) এ উল্লিখিত কোনো দাবি লিখিতভাবে করা যাইবে অথবা যানবাহনের ভারপ্রাপ্ত ব্যক্তির নিকট বেতার বার্তাযোগে অবহিত করা যাইবে, এবং লিখিতভাবে করা হইলে, উহা-
                </p>

                <p className="mb-4 text-sm">
                  (ক) ভারপ্রাপ্ত ব্যক্তি বা তাহার এজেন্টের নিকট ব্যক্তিগতভাবে অর্পণের মাধ্যমে;
                </p>

                <p className="mb-4 text-sm">
                  (খ) উক্ত ব্যক্তির বা এজেন্টের সর্বশেষ জ্ঞাত বাসস্থানে রাখিয়া আসার মাধ্যমে; অথবা
                </p>

                <p className="mb-4 text-sm">
                  (গ) যানবাহনটির উপর ভারপ্রাপ্ত বা পরিচালনার দায়িত্বে রহিয়াছেন বলিয়া প্রতীয়মান ব্যক্তির নিকট রাখিয়া আসার মাধ্যমেজারি করা যাইবে।
                </p>

                <p className="mb-4 text-sm">
                  (৩) যে ক্ষেত্রে উপ- ধারা (২) অনুসারে বন্দর ছাড়পত্র অথবা প্রস্থানের অনুমতি ফেরত প্রদানের দাবি করা হয়, সেই ক্ষেত্রে বন্দর ছাড়পত্র অথবা অনুমতি অবিলম্বে বাতিল হইয়া যাইবে।
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