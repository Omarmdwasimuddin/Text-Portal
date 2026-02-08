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
                    দ্বাবিংশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    উপকূলীয় পণ্য এবং নৌযান সম্পর্কিত বিধানাবলি
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৬৬। কার্গো বুক---</span> (১) প্রত্যেক উপকূলীয় নৌযানে নৌযানের নাম, যেখানে নিবন্ধিত সেই বন্দরের নাম এবং মাস্টারের নাম উল্লেখপূর্বক একটি কার্গো বুক সংরক্ষণ করিতে হইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) প্রত্যেক উপকূলীয় নৌযানের মাস্টারের কর্তব্য হইবে নিম্নবর্ণিত বিষয়াদি কার্গো বুকে লিপিবদ্ধকরণের ব্যবস্থা করা, যথা:-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক) নৌযানের গন্তব্য বন্দর এবং প্রতিটি সমুদ্রযাত্রা;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (খ) প্রত্যেক পণ্য বোঝাই করা বন্দর হইতে প্রস্থানের এবং প্রত্যেক পণ্য খালাস হওয়া বন্দরে পৌঁছার ভিন্ন ভিন্ন সময়;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (গ) প্রত্যেক পণ্য বোঝাই করা বন্দরের নাম এবং নৌযানে বোঝাইকৃত প্যাকেজসমূহের বর্ণনা ও পরিমাণ এবং উহাতে ধারণকৃত অথবা খোলা সাজানো পণ্যের বর্ণনাসহ সকল পণ্যের হিসাব এবং রপ্তানিকারকের এবং প্রাপকের নামসমূহ এবং বর্ণিত তথ্যাদি যতখানি নিরূপণ সম্ভবপর হয়; এবং
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ঘ) প্রত্যেক পণ্য খালাসে প্রতিটি বন্দরের নাম এবং উক্ত নৌযান হইতে প্রতিটি পণ্য খালাসের তারিখ।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) পণ্য বোঝাই এবং খালাস সম্পর্কিত এন্ট্রিসমূহ যথাক্রমে বোঝাই এবং খালাস করিবার বন্দরে সম্পন্ন করিতে হইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৪) যথাযথ কর্মকর্তার পরিদর্শনের জন্য চাহিবামাত্র প্রত্যেক মাস্টার কার্গো বুক উপস্থাপন করিবেন এবং উহাতে উক্ত কর্মকর্তা যেরূপ আবশ্যক বিবেচনা করিবেন সেইরূপ নোট অথবা মন্তব্য লিপিবদ্ধ করিতে পারিবেন।
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