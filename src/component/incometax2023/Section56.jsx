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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৫৬। নৌযান ব্যতীত অন্যান্য যানবাহন প্রস্থানের পূর্বে দলিলপত্র অর্পণ এবং প্রশ্নের উত্তর প্রদান---</span> নৌযান ব্যতীত অন্য কোনো যানবাহনের ভারপ্রাপ্ত ব্যক্তি অথবা তাহার যথাযথ ক্ষমতাপ্রাপ্ত এজেন্ট-
                </p>

                <p className="mb-4 text-sm">
                  (ক) বোর্ড কর্তৃক, সময় সময় নির্ধারিত ফরমে, উক্ত যানে যে সকল পণ্য রপ্তানি হইবে তাহা উল্লেখপূর্বক তাহার অথবা তাহার এজেন্টর স্বাক্ষরযুক্ত দুই প্রস্থ রপ্তানি কার্গো ঘোষণা যথাযথ কর্মকর্তার নিকট অর্পণ করিবেন এবং উক্ত যানবাহনের আমদানি কার্গো ঘোষণায় প্রদর্শিত সকল পণ্য এবং রসদ ও ভাণ্ডার, যাহা অবতরণ করা হয় নাই অথবা যানবাহনে ভোগ করা হয় নাই অথবা ট্রান্সশিপ করা হয় নাই, তাহা পৃথক পৃথকভাবে প্রদর্শন করিবেন ;
                </p>

                <p className="mb-4 text-sm">
                  (খ) কমিশনার অব কাস্টমস এর সাধারণ নির্দেশাবলির আলোকে যথাযথ কর্মকর্তার চাহিদা মোতাবেক রপ্তানি পণ্য ঘোষণা অথবা অন্যান্য দলিলপত্র দাখিল করিবেন; এবং
                </p>

                <p className="mb-4 text-sm">
                  (গ) যথাযথ কর্মকর্তা যানবাহনটির প্রস্থান এবং গন্তব্য স্থান সম্পর্কে যে সকল প্রশ্ন করিবেন তাহার উত্তর প্রদান করিবেন।
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