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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>২৪৫। প্রিন্সিপাল এবং এজেন্টের দায়---</span> (১) ধারা ২৪৩ ও ২৪৪ এর বিধানাবলি সাপেক্ষে, এই আইনের অধীন কোনো পণ্যের মালিক কোনো কিছু করিতে বাধ্য বা ক্ষমতাপ্রাপ্ত হইলে উক্ত মালিক কর্তৃক এতদুদ্দেশ্যে, স্পষ্টভাবে বা অব্যক্তভাবে (in an implied manner), ক্ষমতাপ্রাপ্ত ব্যক্তিও উহা করিতে বাধ্য বা ক্ষমতাপ্রাপ্ত হইবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) যদি উপ- ধারা (১) এর অধীন ক্ষমতাপ্রাপ্ত কোনো এজেন্ট কর্তৃক কোনো কিছু করা হয়, তাহা হইলে, ভিন্নরূপ কিছু প্রমাণিত না হইলে, যিনি উক্ত এজেন্টকে এইরূপ করিবার ক্ষমতা প্রদান করিয়াছেন, তাহার জ্ঞাতসারে ও সম্মতিক্রমে উহা করা হইয়াছে বলিয়া গণ্য হইবে এবং এই আইনের অধীন উক্ত কার্যধারার জন্য তিনি এইরূপে দায়ী হইবেন যেন তিনি নিজেই উহা করিয়াছেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) এই আইনে ভিন্নরূপ কিছু না থাকিলে, উপ- ধারা (১) এর অধীন ক্ষমতাপ্রাপ্ত কোনো এজেন্ট এর, যে ব্যক্তির নিকট হইতে এইরূপ ক্ষমতা প্রাপ্ত হন, সেই ব্যক্তির ন্যায় একই অধিকার, বাধ্যবাধকতা এবং দায় থাকিবে:
                </p>

                <p className="mb-4 ml-10 text-sm">
                  তবে শর্ত থাকে যে, যে ক্ষেত্রে এজেন্টের ইচ্ছাকৃত কার্য, অবহেলা বা ত্রুটির কারণ ব্যতীত অন্য কোনো কারণে কোনো শুল্ক আরোপিত না হইয়া থাকে অথবা কম আরোপিত হয় বা ভুলক্রমে ফেরত প্রদত্ত হয়, সেইক্ষেত্রে এজেন্টের নিকট হইতে উক্ত শুল্ক আদায় করা হইবে না।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৪) উপ- ধারা (১) এর অধীন ক্ষমতাপ্রাপ্ত কোনো এজেন্টকে এই আইনের অধীন প্রয়োজনীয় বা প্রদত্ত কোনো নোটিশ, যে ব্যক্তি উক্ত এজেন্টকে এইরূপ ক্ষমতা প্রদান করিয়াছেন, উক্ত ব্যক্তিকে উহা প্রদান করা হইয়াছে বলিয়া গণ্য হইবে, যদি উক্ত এজেন্ট স্পষ্টভাবে বা অব্যক্তভাবে উক্ত নোটিশ গ্রহণের জন্য ক্ষমতাপ্রাপ্ত হইয়া থাকে।
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