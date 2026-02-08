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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৮২। আমদানিকারক এবং রপ্তানিকারকের দায়িত্ব---</span> আমদানি বা রপ্তানির জন্য পণ্য ঘোষণাকারী বা যাহার পক্ষে উক্তরূপ ঘোষণা প্রদান করা হইয়াছে এইরূপ ব্যক্তি নিম্নলিখিত বিষয়সমূহের জন্য দায়বদ্ধ থাকিবেন, যথা:-
                </p>

                <p className="mb-4 text-sm">
                  (ক) পণ্য ঘোষণায় প্রদত্ত তথ্যের সঠিকতা এবং সম্পূর্ণতা;
                </p>

                <p className="mb-4 text-sm">
                  উপস্থাপিত যে কোনো দলিলের সত্যতা;
                </p>

                <p className="mb-4 text-sm">
                  (গ) প্রযোজ্য ক্ষেত্রে, প্রদেয় সকল শুল্ক, কর ও অন্যান্য চার্জ পরিশোধ এবং প্রাসঙ্গিক কাস্টমস পদ্ধতির অধীন সংশ্লিষ্ট পণ্য ন্যস্ত করা সম্পর্কিত অন্যান্য সকল বাধ্যবাধকতা প্রতিপালন; এবং
                </p>

                <p className="mb-4 text-sm">
                  (ঘ) যথাযথ কর্মকর্তার অনুরোধে এবং উক্ত কর্মকর্তা কর্তৃক নির্ধারিত সময়সীমার মধ্যে কোনো উপযুক্ত ফরমে চাহিদামত সকল দলিল ও তথ্য দাখিল এবং কাস্টমস আনুষ্ঠানিকতা সম্পন্ন বা নিয়ন্ত্রণের জন্য প্রয়োজনীয় সকল সহায়তা প্রদান;
                </p>

                <p className="mb-4 text-sm">
                  তবে শর্ত থাকে যে, সংশ্লিষ্ট ব্যক্তির কোনো এজেন্ট কর্তৃক উক্ত ঘোষণা প্রদান করিবার ক্ষেত্রে, উক্ত এজেন্টও উপরিউক্ত দফা (ক), (খ) ও (ঘ) তে উল্লিখিত বাধ্যবাধকতার জন্য দায়ী থাকিবেন।
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