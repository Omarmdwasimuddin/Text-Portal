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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>২০৩। পণ্য বাজেয়াপ্তি বা জরিমানা আরোপের পূর্বে কারণ দর্শানো নোটিশ জারি।---</span> এই আইনের অধীন কোনো পণ্য বাজেয়াপ্তকরণ অথবা কোনো ব্যক্তির উপর জরিমানা আরোপের কোনো আদেশ প্রদান করা যাইবে না, যদি না পণ্যের মালিককে, যদি থাকেন, অথবা উক্ত ব্যক্তিকে,-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক) যে কারণের উপর ভিত্তি করিয়া পণ্য বাজেয়াপ্ত বা জরিমানা আরোপের প্রস্তাব করা হয় তাহা লিখিতভাবে অথবা, যদি সংশ্লিষ্ট ব্যক্তি লিখিত সম্মতি প্রদান করেন,
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (খ) প্রস্তাবিত ব্যবস্থা গ্রহণের বিরুদ্ধে যথাযথ কর্মকর্তা কর্তৃক নির্ধারিত যুক্তিসঙ্গত সময়ের মধ্যে লিখিতভাবে অথবা, যদি সংশ্লিষ্ট ব্যক্তি ইহা প্রদানের জন্য তাহার অগ্রাধিকারের বিষয়ে লিখিতভাবে অবহিত করেন, তাহা হইলে মৌখিকভাবে ব্যাখ্যা প্রদানের সুযোগ প্রদান করা হয়; এবং
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (গ) ব্যক্তিগতভাবে বা কোনো পরামর্শকের মাধ্যমে অথবা যথাযথভাবে ক্ষমতাপ্রাপ্ত প্রতিনিধির মাধ্যমে শুনানির সুযোগ প্রদান করা হয়:
                </p>

                <p className="mb-4 ml-10 text-sm">
                  তবে শর্ত থাকে যে, উক্ত পণ্যের মালিক অথবা সংশ্লিষ্ট ব্যক্তি অপরাধ স্বীকার করিলে, প্রদত্ত আদেশের বিরুদ্ধে তাহার আপিলের অধিকার ক্ষুণ্ন না করিয়া, তাহাকে কারণ দর্শানো নোটিশ জারি ব্যতীত প্রদত্ত কোনো আদেশ গ্রহণ করিতে সম্মত রহিয়াছেন মর্মে লিখিত অনুরোধের প্রেক্ষিতে কোনো পণ্য বাজেয়াপ্ত করিয়া, অথবা কোনো ব্যক্তির উপর কোনো জরিমানা আরোপ করিয়া, প্রদত্ত আদেশের ক্ষেত্রে, এই ধারার বিধান প্রযোজ্য হইবে না।
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