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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>২১২। কতিপয় ক্ষেত্রে দলিলপত্র সম্পর্কে পূর্বানুমান (presumption)---</span> যে ক্ষেত্রে কোনো ব্যক্তি এই আইনের অধীন কোনো দলিলপত্র উপস্থাপন করেন অথবা কোনো ব্যক্তির তত্ত্বাবধান বা নিয়ন্ত্রণ হইতে কোনো দলিলপত্র আটক করা হয়, এবং উক্ত দলিলপত্র অভিযোগকারী কর্তৃক উক্ত ব্যক্তির বিরুদ্ধে সাক্ষ্য হিসাবে পেশ করা হয়, সেইক্ষেত্রে জুডিসিয়াল ম্যাজিস্ট্রেট,-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক) উক্ত ব্যক্তি উহার বিপরীতে কিছু প্রমাণ করিতে না পারিলে,-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (অ) উক্ত দলিলপত্রের বিষয়বস্তু সত্য বলিয়া গণ্য করিবেন;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (আ) উক্ত দলিলপত্রের স্বাক্ষর এবং প্রতিটি অংশ, যাহা কোনো বিশেষ ব্যক্তির হাতে লিখিত বলিয়া মনে করা হয় বা যাহা কোনো বিশেষ ব্যক্তি কর্তৃক স্বাক্ষরিত বা হস্তলিখিত বলিয়া যুক্তিসঙ্গত ভাবে অনুমান করেন, তাহা উক্ত ব্যক্তির হাতের লেখা বলিয়া গণ্য করিবেন, এবং কোনো দলিলপত্র সম্পাদন বা সত্যায়নের ক্ষেত্রে যে ব্যক্তি উহা সম্পাদন বা সত্যায়িত করিয়াছেন বলিয়া মনে করা হয় সেই ব্যক্তি কর্তৃক উহা সম্পাদিত বা সত্যায়িত হইয়াছে বলিয়া গণ্য করিবেন;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (খ) যথাযথভাবে স্ট্যাম্পযুক্ত না হওয়া সত্ত্বেও উক্ত দলিলপত্র যদি অন্যভাবে সাক্ষ্য হিসাবে গ্রাহ্য হয়, তাহা হইলে উহা সাক্ষ্য হিসাবে গ্রহণ করিবেন।
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