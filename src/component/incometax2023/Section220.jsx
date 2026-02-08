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
                    ষষ্ঠবিংশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    আপিল এবং পুনরীক্ষণ
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>২২০। কমিশনার অব কাস্টমস (আপিল) এর নিকট আপিল---</span> (১) কমিশনার অব কাস্টমস পদমর্যাদার নিম্নের কোনো কর্মকর্তা কর্তৃক, ধারা ৯৪ অথবা ধারা ১১৯ এর অধীন প্রদত্ত সিদ্ধান্ত বা আদেশ ব্যতীত, এই আইনের অধীন প্রদত্ত কোনো সিদ্ধান্ত বা আদেশ দ্বারা কোনো ব্যক্তি সংক্ষুব্ধ হইলে, তিনি উক্ত সিদ্ধান্ত বা আদেশ সম্পর্কে অবহিত হইবার তারিখ হইতে ৩ (তিন) মাসের মধ্যে কমিশনার অব কাস্টমস (আপিল) এর নিকট আপিল করিতে পারিবেন:
                </p>

                <p className="mb-4 ml-10 text-sm">
                  তবে শর্ত থাকে যে, কমিশনার অব কাস্টমস (আপিল) যদি এই মর্মে সন্তুষ্ট হন যে, আপিলকারী উপরি- উক্ত ৩ (তিন) মাস মেয়াদের মধ্যে আপিল দায়ের করা হইতে যুক্তিসঙ্গত কারণে বাধাপ্রাপ্ত হইয়াছেন, তাহা হইলে তিনি পরবর্তী ২ (দুই) মাস অতিরিক্ত মেয়াদের মধ্যে আপিল দায়ের করিবার জন্য অনুমতি প্রদান করিতে পারিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) এই ধারার অধীন প্রত্যেক আপিল, বিধি দ্বারা নির্ধারিত পদ্ধতিতে আপিলের ভিত্তিসমূহ উল্লেখপূর্বক, প্রতিপাদন করিতে হইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) অন্য কোনো আদালতে গ্রহণযোগ্য হউক বা না হউক, কমিশনার অব কাস্টমস (আপিল), তদ্বিবেচনায় কার্যধারাকে সহায়তা করিতে পারে এইরূপ কোনো বিবৃতি, দলিল, তথ্য বা বিষয়কে, বিচার কার্যধারা চলাকালীন যে কোনো সময়ে সাক্ষ্য হিসাবে গ্রহণ করিতে পারিবেন।
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