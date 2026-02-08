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
                    সপ্তবিংশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    বিবিধ
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>২৩৭। পণ্য বিক্রয়ের পদ্ধতি এবং বিক্রয়লদ্ধ অর্থের বিলিবন্দেজ---</span> (১) যে ক্ষেত্রে বাজেয়াপ্তকৃত পণ্য ব্যতীত অন্য কোনো পণ্য এই আইনের অধীনে বিক্রয় করিতে হইবে, সেইক্ষেত্রে উহা মালিককে যথাযথ নোটিশ প্রদান করিয়া প্রকাশ্য নিলামে বা টেন্ডারের মাধ্যমে অথবা ব্যক্তিগত প্রস্তাবের মাধ্যমে বা মালিকের লিখিত সম্মতিক্রমে অন্য কোনো পদ্ধতিতে বিক্রয় করা হইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) বিক্রয়লব্ধ অর্থ নিম্নবর্ণিত ক্রমানুসারে বিলিবন্দেজ করা হইবে, যথা:-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক)বিক্রয়ের উদ্দেশ্য ব্যয়িত অর্থ পরিশোধ;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (খ) পণ্যের উপর প্রদেয় ফ্রেইট অথবা অন্যান্য চার্জসমূহ, যদি থাকে, পরিশোধ, যদি পণ্যের তত্ত্বাবধানকারী ব্যক্তির নিকট উক্ত চার্জসমূহ সম্পর্কে নোটিশ প্রদান করা হইয়া থাকে;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (গ) উক্ত পণ্যের উপর সরকারকে প্রদেয় কাস্টমস শুল্ক, অন্যান্য কর এবং পাওনা পরিশোধ; এবং
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ঘ) উক্ত পণ্যের হেফাজতকারী বা জিম্মাদার (custodian) ব্যক্তির পাওনা চার্জসমূহ পরিশোধ।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) অবশিষ্ট, যদি থাকে, পণ্যের মালিককে এই শর্তে প্রদান করা হইবে যে, পণ্য বিক্রয়ের ৩ (তিন) বৎসরের মধ্যে তিনি উহার জন্য আবেদন করিবেন অথবা উক্তরূপ না করিবার জন্য পর্যাপ্ত কারণ দর্শাইবেন।
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