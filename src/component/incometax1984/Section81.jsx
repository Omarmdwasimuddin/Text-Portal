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
                    দ্বাদশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    পণ্যের ঘোষণা এবং ছাড়করণ
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৮১। পণ্যের ঘোষণা---</span> (১) কোনো পণ্যের আমদানিকারককে বা রপ্তানিকারককে বোর্ড কর্তৃক নির্ধারিত ফরম ও পদ্ধতিতে নিম্নবর্ণিত বিষয় উল্লেখ করিয়া একটি পণ্য ঘোষণা কাস্টমস কম্পিউটার সিস্টেমে বা, ইলেকট্রনিক সিস্টেম না থাকিলে ম্যানুয়্যালি দাখিল করিতে হইবে, যথা:-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক) উক্ত পণ্যের জন্য প্রযোজ্য কাস্টমস পদ্ধতি;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (খ) এই আইন ও তদধীন প্রণীত বিধির বিধানাবলি অনুসারে পণ্যের শ্রেণিবিন্যাস, উৎস দেশ এবং পণ্যের কাস্টমস মূল্য সংক্রান্ত ঘোষণা; এবং
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (গ) পণ্যের পরিমাণ ও যথাযথ বর্ণনাসহ বোর্ড কর্তৃক নির্ধারিত অন্য কোনো বিষয়।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) পণ্য আমদানিকারককে পণ্যের সঠিক শুল্ক নিরূপণ এবং ছাড়ের জন্য বোর্ড বা অন্যান্য উপযুক্ত কর্তৃপক্ষ কর্তৃক নির্ধারিত দলিল ও পর্যাপ্ত তথ্য যথাযথ কর্মকর্তার নিকট দাখিল বা উপস্থাপন করিতে হইবে।
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