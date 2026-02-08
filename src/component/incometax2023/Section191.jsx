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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৯১। বাজেয়াপ্তযোগ্য পণ্য জব্দ---</span> (১) যথাযথ কর্মকর্তা এই আইনের অধীনে বাজেয়াপ্তযোগ্য কোনো পণ্য জব্দ করিতে পারিবেন, এবং যে ক্ষেত্রে উক্তরূপ কোনো পণ্য জব্দ করা বাস্তবে সম্ভব নহে, সেই ক্ষেত্রে তিনি উক্ত পণ্যের মালিক অথবা উহা যে ব্যক্তির দখলে বা তত্ত্বাবধানে রহিয়াছে সেই ব্যক্তিকে উক্ত কর্মকর্তার পূর্ব অনুমতি ব্যতীত উহা অপসারণ, হস্তান্তর অথবা প্রকারান্তরে বিলিবন্দেজ না করিবার নির্দেশ প্রদান করিতে পারিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) যেক্ষেত্রে উপ- ধারা (১) এর অধীনে কোনো পণ্য জব্দ করা হয় এবং উহার উপর ধারা ২০৩ এর অধীনে পণ্য জব্দ করার ২ (দুই) মাসের মধ্যে কারণ দর্শানো নোটিশ প্রদান করা না হয়, সেই ক্ষেত্রে উক্ত পণ্য যে ব্যক্তির দখল হইতে জব্দ করা হইয়াছিল তাহাকে ফেরত প্রদান করিতে হইবে:
                </p>

                <p className="mb-4 ml-10 text-sm">
                  তবে শর্ত থাকে যে, কমিশনার অব কাস্টমস কারণ লিপিবদ্ধ করিয়া উপরিউক্ত ২ (দুই) মাসের মেয়াদ অনধিক ২ (দুই) মাসের জন্য বর্ধিত করিতে পারিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) যথাযথ কর্মকর্তা কোনো দলিলপত্র অথবা জিনিসপত্র, যাহা তাহার মতে এই আইনের অধীনে গৃহীত কোনো কার্যধারায় সাক্ষ্য হিসাবে ব্যবহার উপযোগী হইবে, আটক করিতে পারিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৪) যে ব্যক্তির তত্ত্বাবধান হইতে উপ- ধারা (৩) এর অধীনে কোনো দলিলপত্র আটক করা হয় তিনি কোনো কাস্টমস কর্মকর্তার উপস্থিতিতে উহার কপি অথবা উহা হইতে উদ্ধৃতি গ্রহণ করিতে পারিবেন।
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