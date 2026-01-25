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
                    পঞ্চদশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    ইনওয়ার্ড ও আউটওয়ার্ড প্রসেসিং পদ্ধতি
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১০৫। আউটওয়ার্ড প্রসেসিং পদ্ধতি---</span> (১) এই অধ্যায়ে উল্লিখিত আবশ্যকতা এবং পণ্য ঘোষণা ও ছাড় সংক্রান্ত প্রয়োজনীয় আনুষ্ঠানিকতা সম্পাদন সাপেক্ষে, বিধি দ্বারা নির্ধারিত পদ্ধতিতে, বাংলাদেশে প্রস্তুত বা উৎপাদিত পণ্য, দেশীয় ভোগের জন্য ছাড় করা আমদানিকৃত পণ্য, যাহা বিদেশে মেরামত, আংশিক পরিবর্তন বা প্রসেসিং এর জন্য অস্থায়ীভাবে রপ্তানির জন্য অভিপ্রেত, তাহা আউটওয়ার্ড প্রসেসিং পদ্ধতির অধীন ন্যস্ত করা যাইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) আউটওয়ার্ড প্রসেসিং পদ্ধতির অধীন ন্যস্তকৃত পণ্য হইতে মেরামতকৃত, পরিবর্তিত বা প্রক্রিয়াজাত পণ্য বাংলাদেশে ফেরত আনা হইলে, বাংলাদেশ হইতে উক্ত পণ্য বিদেশে প্রেরণ এবং বাংলাদেশে ফেরত আনিবার ক্ষেত্রে সংশ্লিষ্ট পরিবহণ, বোঝাই, হ্যান্ডলিং চার্জ এবং বিমা ব্যয়সহ বাংলাদেশের বাহিরে গৃহীত উক্ত কার্যক্রমের ব্যয়ের ভিত্তিতে আমদানি শুল্ক ও কর নিরূপিত হইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) <span className="font-semibold">“আমদানি”</span> অর্থ বিদেশ হইতে কোনো পণ্য বাংলাদেশে আনয়ন করা;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) উপ- ধারা (২) এ যাহা কিছুই থাকুক না কেন, কমিশনার অব কাস্টমস যদি এই মর্মে সন্তুষ্ট হন যে, অস্থায়ীভাবে রপ্তানিকৃত পণ্য, কোনো গ্যারান্টি বা ওয়ারেন্টি হইতে উদ্ভূত কোনো চুক্তিগত বা বিধিবদ্ধ বাধ্যবাধকতা অথবা কোনো প্রস্তুতজনিত বা তাৎপর্যপূর্ণ ত্রুটির কারণে চার্জমুক্তভাবে মেরামত করা হইয়াছে, তাহা হইলে উক্ত পণ্য বাংলাদেশে ফেরত আনা হইলে, উক্ত চুক্তি, ওয়ারেন্টি বা গ্যারান্টির সীমা পর্যন্ত প্রযোজ্য আমদানি শুল্ক ও কর পরিশোধ ব্যতীত ছাড় করা যাইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৪) অস্থায়ী রপ্তানিকৃত পণ্যের উপর প্রত্যর্পণ পরিশোধিত হইলে আউটওয়ার্ড প্রসেসিং এর অনুমতি প্রদান করা যাইবে না।
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