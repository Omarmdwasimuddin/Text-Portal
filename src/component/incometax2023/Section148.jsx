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
                    ঊনবিংশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    রপ্তানি বা জাহাজীকরণ এবং পুনরায় অবতরণ
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৪৮। কোনো কাস্টমস স্টেশনে প্রত্যাবর্তনকারী অথবা অন্য কাস্টমস স্টেশনে প্রবেশকারী যানবাহন হইতে পুনরায় নামানো অথবা ট্রান্সশিপকৃত পণ্য---</span> (১) কোনো কাস্টমস স্টেশন হইতে ছাড়িয়া যাওয়ার পর কোনো যানবাহন যদি পণ্য খালাস না করিয়া উক্ত কাস্টমস স্টেশনে প্রত্যাবর্তন করে অথবা অন্য কোনো কাস্টমস স্টেশনে প্রবেশ করে এবং উক্ত যানবাহনে পরিবহণকৃত পণ্যের কোনো মালিক যদি উহা অথবা উহার অংশবিশেষ পুনরায় রপ্তানির উদ্দেশ্যে নামানো অথবা ট্রান্সশিপ করিবার ইচ্ছা পোষণ করেন, তাহা হইলে তিনি যানবাহনের ভারপ্রাপ্ত ব্যক্তির সম্মতিক্রমে এতদুদ্দেশ্যে যথাযথ কর্মকর্তার নিকট আবেদন করিতে পারিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) যথাযথ কর্মকর্তা যদি উপ-ধারা (১) এর অধীন প্রাপ্ত আবেদনপত্র মঞ্জুর করেন, তাহা হইলে অতঃপর তিনি যানবাহনটির উপর সতর্ক দৃষ্টি রাখিবার জন্য এবং উক্তরূপ নামানো অথবা ট্রান্সশিপমেন্টের সময় উক্ত পণ্যের দায়িত্ব গ্রহণ করিবার জন্য একজন কাস্টমস কর্মকর্তা প্রেরণ করিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) ইতঃপূর্বে প্রথম রপ্তানির সময় শুল্ক নিষ্পত্তি করিবার যুক্তিতে কোনো পণ্য শুল্ক- মুক্তভাবে ট্রান্সশিপ অথবা পুনরায় রপ্তানির জন্য অনুমতি প্রদান করা যাইবে না, যদি না উহা পুনরায় রপ্তানির সময় পর্যন্ত একজন কাস্টমস কর্মকর্তার তত্ত্বাবধানে যথাযথ কর্মকর্তা কর্তৃক নির্ধারিত স্থানে প্রবেশ করানো এবং রক্ষিত হয় অথবা উক্তরূপ তত্ত্বাবধানে ট্রান্সশিপ করা হয়।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৪) উপ- ধারা (৩) এ উল্লিখিত তত্ত্বাবধান সংশ্লিষ্ট সমুদয় ব্যয় মালিক কর্তৃক বহন করা হইবে।
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