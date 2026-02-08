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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৮৬। দাখিলকৃত পণ্য ঘোষণার সংশোধন ও প্রত্যাহার---</span> (১) কোনো আমদানিকারক বা রপ্তানিকারক কর্তৃক লিখিত অনুরোধের প্রেক্ষিতে ধারা ৮১ এর অধীন দাখিলকৃত পণ্য ঘোষণায় উল্লিখিত এক বা একাধিক বিবরণ সংশোধনের অনুমতি প্রদান করা যাইবে:
                </p>

                <p className="mb-4 text-sm">
                  তবে শর্ত থাকে যে, অনুরোধকৃত সংশোধন মূল দলিলের সহিত সঙ্গতিপূর্ণ হইতে হইবে:
                </p>

                <p className="mb-4 text-sm">
                  আরও শর্ত থাকে যে, নিম্নবর্ণিত কোনো ঘটনার পর যদি কোনো সংশোধনের অনুরোধ করা হয়, তাহা হইলে উক্ত সংশোধনের অনুমতি প্রদান করা যাইবে না, যথা:-
                </p>

                <p className="mb-4 text-sm">
                  (ক) সংশ্লিষ্ট ব্যক্তিকে যদি ইহা অবহিত করা হয় যে, পণ্য পরীক্ষা করা হইবে;
                </p>

                <p className="mb-4 text-sm">
                  (খ) কোনো কাস্টমস কর্মকর্তা কর্তৃক যদি ইহা প্রতিষ্ঠিত হয় যে, সংশ্লিষ্ট বিবরণ সঠিক নহে; অথবা
                </p>

                <p className="mb-4 text-sm">
                  (গ) ধারা ১১২ এ উল্লিখিত ব্যতিক্রমী ক্ষেত্র ব্যতীত, পণ্য ছাড় করা হইয়াছে।
                </p>
                
                <p className="mb-4 text-sm">
                  (২) উপ- ধারা (১) এর অধীন পণ্য ঘোষণার কোনো সংশোধন মূল পণ্য ঘোষণায় উল্লিখিত পণ্য ব্যতীত অন্য কোনো পণ্যের জন্য প্রযোজ্য হইবে না।
                </p>

                <p className="mb-4 text-sm">
                  (৩) যথার্থতা প্রতিপাদিত হইলে, কমিশনার অব কাস্টমস যুক্তিসঙ্গত কারণ লিপিবদ্ধ করিয়া দাখিলকৃত পণ্য ঘোষণা প্রত্যাহারের অনুমতি প্রদান করিতে পারিবেন।
                </p>

                <p className="mb-4 text-sm">
                  <sup className='text-blue-500' title='উপ-ধারা (৪) অর্থ আইন, ২০২৪ (২০২৪ সনের ৫ নং আইন) এর ৯৪ ধারাবলে সংযোজিত যাহা ২০২৪ সনের ১ জুলাই হইতে কার্যকর।'>১</sup>[(৪) এই ধারার অন্যান্য বিধানে যাহা কিছুই থাকুক না কেন, ধারা ১১২ এ বর্ণিত ক্ষেত্র ব্যতীত, কাস্টমস এলাকা হইতে পণ্য অপসারণের পর পণ্যের পরিমাণ, মূল্য এবং বর্ণনা সংশোধন করা যাইবে না।]
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
              ১ উপ-ধারা (৪) অর্থ আইন, ২০২৪ (২০২৪ সনের ৫ নং আইন) এর ৯৪ ধারাবলে সংযোজিত যাহা ২০২৪ সনের ১ জুলাই হইতে কার্যকর।<br/>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}