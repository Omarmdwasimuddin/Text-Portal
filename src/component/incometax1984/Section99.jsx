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
                    ত্রয়োদশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    পণ্যের ছাড় ও ছাড় পরবর্তী নিরীক্ষা
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৯৯। নথিপত্র নিরীক্ষা বা পরীক্ষা---</span> (১) কোনো কাস্টমস কর্মকর্তা যে কোনো সময়ে এবং ধারা ১৭৬ এর বিধানাবলি সাপেক্ষে, ধারা ২৪৬ অনুসারে নথিপত্র যে স্থানে সংরক্ষণ করা হয় সেই স্থানে বা অঙ্গনে প্রবেশ করিতে পারিবেন এবং যে সকল নথিপত্র হস্তলিখিত বা ইলেকট্রনিক সিস্টেমে প্রস্তুত ও সংরক্ষণ করা হয় উহার পর্যাপ্ততা অথবা সত্যতা সম্পর্কিত বিষয়ে অথবা কোনো সুনির্দিষ্ট লেনদেন সম্পর্কে নিরীক্ষা এবং পরীক্ষা করিতে পারিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) উপ- ধারা (১) এর উদ্দেশ্য পূরণকল্পে, কোনো হিসাব পুস্তক, রেকর্ড ও দলিলাদি এবং কোনো সম্পত্তি, পদ্ধতি অথবা বিষয় পরীক্ষা করিবার উদ্দেশ্যে কোনো লাইসেন্সধারী, আমদানিকারক, রপ্তানিকারক অথবা অন্য কোনো ব্যক্তির হেফাজতে অথবা নিয়ন্ত্রণে থাকা সকল ভূমি, ইমারত এবং স্থানে কোনো কাস্টমস কর্মকর্তার প্রবেশের এবং সকল হিসাব পুস্তক, রেকর্ড এবং দলিলপত্র দেখিবার বা পরীক্ষার সম্পূর্ণ এবং অবাধ অধিকার থাকিবে, যাহা উক্ত কর্মকর্তার বিবেচনায়-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক) এই আইনের অধীন কোনো শুল্ক আহরণের জন্য অথবা কর্মকর্তার উপর আইনানুগভাবে অর্পিত কোনো কর্তব্য পালনের উদ্দেশ্যে প্রয়োজনীয় অথবা প্রাসঙ্গিক হইতে পারে; অথবা
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (খ) এই আইনের উদ্দেশ্য পূরণকল্পে, অথবা এই আইনের অধীন কোনো কর্তব্য সম্পাদনের জন্য অন্যবিধ প্রয়োজনীয় কোনো তথ্য সরবরাহ করিতে পারে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) কাস্টমস কর্মকর্তা উপ- ধারা (১) এ উল্লিখিত যে কোনো পুস্তক, নথিপত্র অথবা দলিলপত্রের উদ্ধৃতি বা অনুলিপি গ্রহণ করিতে পারিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৪) উপ- ধারা (২) এবং (৩) এ যাহা কিছুই থাকুক না কেন, কোনো কাস্টমস কর্মকর্তা কোনো বেসরকারি আবাসস্থলে, উহার বাসিন্দা বা মালিকের সম্মতি ব্যতীত বা এই আইনের অধীন জারীকৃত কোনো পরোয়ানা ব্যতীত, উক্তরূপ আবাসস্থলে প্রবেশ করিতে পারিবেন না।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৫) নথিপত্র নিরীক্ষা এবং পরীক্ষা সংক্রান্ত প্রয়োজনীয় কার্যক্রম ও পদ্ধতি এতদুদ্দেশ্যে প্রণীত বিধি দ্বারা নির্ধারিত হইবে।
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