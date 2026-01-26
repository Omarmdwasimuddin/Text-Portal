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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>২০৭। অনুমতি ব্যতীত প্রস্থান করিবার বা আনয়নে ব্যর্থতার জন্য জরিমানা আরোপ---</span> (১) কোনো যানবাহন বন্দর ছাড়পত্র বা লিখিত অনুমতি ব্যতীত প্রস্থান করিলে অথবা, জাহাজের ক্ষেত্রে, ধারা ১৩ এর অধীন নিযুক্ত কোনো স্টেশনে উহা আনয়ন করিতে নির্দেশ প্রদানের পর উহা আনয়ন করিতে ব্যর্থ হইলে, সংশ্লিষ্ট যানবাহনের ভারপ্রাপ্ত ব্যক্তির বিরুদ্ধে যে জরিমানা আরোপিত হইবে, উহার ন্যায়নির্ণয়ন উক্ত যানবাহন যে কাস্টমস স্টেশনে অগ্রসর হয় অথবা যেস্থানে উহা অবস্থান করে সেই স্থানের যথাযথ কর্মকর্তা করিতে পারিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) যে কাস্টমস স্টেশন হইতে যানবাহনটি উক্তরূপে প্রস্থান করিয়াছে বলিয়া বর্ণিত হয় সেই স্টেশনের উপযুক্ত কর্মকর্তা কর্তৃক স্বাক্ষরিত বলিয়া দাবিকৃত কোনো প্রত্যয়নপত্র, উক্ত প্রস্থান অথবা আনয়নে ব্যর্থতার ক্ষেত্রে বর্ণিত ঘটনার দৃশ্যমান প্রমাণ হিসাবে গণ্য হইবে।
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