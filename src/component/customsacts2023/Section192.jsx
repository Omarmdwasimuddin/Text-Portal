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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৯২। জব্দকৃত পণ্যের ব্যবস্থাপনা---</span> (১) এই আইনের অধীনে বাজেয়াপ্তযোগ্য হওয়ার কারণে জব্দকৃত সকল পণ্য, উহা গ্রহণ করিবার জন্য ক্ষমতাপ্রাপ্ত কাস্টমস কর্মকর্তাকে অনতিবিলম্বে অর্পণ করিতে হইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) যদি উপ- ধারা (১) এ উল্লিখিত কোনো কর্মকর্তা নিকটে না থাকেন, তাহা হইলে উক্ত সকল পণ্য আটককৃত স্থানের নিকটতম কাস্টমস গুদামে জমা প্রদানের জন্য বহন করিতে হইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) যদি সুবিধাজনক দূরত্বে কোনো কাস্টমস গুদাম না থাকে, তাহা হইলে উক্তরূপ জব্দকৃত পণ্য জমা প্রদানের জন্য কমিশনার অব কাস্টমস কর্তৃক নির্ধারিত নিকটতম স্থানে উক্ত পণ্য জমা করিতে হইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৪) যদি কমিশনার অব কাস্টমস অথবা তাহার দ্বারা এতদুদ্দেশ্যে ক্ষমতাপ্রাপ্ত অন্য কোনো কাস্টমস কর্মকর্তার বিবেচনায় কোনো পণ্য পচনশীল অথবা দ্রুত অবনতিশীল হয়, তাহা হইলে তিনি উহা ধারা ২৩৭ এর বিধানাবলি অনুসারে অবিলম্বে বিক্রয়ের ব্যবস্থা করিবেন এবং মামলার ন্যায়নির্ণয়ন অনিষ্পন্ন থাকা পর্যন্ত বিক্রয়লব্ধ অর্থ জমা রাখার ব্যবস্থা করিবেন:
                </p>

                <p className="mb-4 ml-10 text-sm">
                  তবে শর্ত থাকে যে, কোনো আইনগত কার্যধারার অথবা এই আইনের অন্য কোনো উদ্দেশ্য পূরণকল্পে, যে ক্ষেত্রে বাস্তবসম্মত হয় সেই ক্ষেত্রে যথাযথ শনাক্তকরণ চিহ্নসহ উক্ত পণ্যের নমুনা সংরক্ষণ করা যাইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৫) যদি উক্ত ন্যায়নির্ণয়নের পর দেখা যায় যে, উক্তরূপ বিক্রয়কৃত পণ্য বাজেয়াপ্তযোগ্য ছিল না, তাহা হইলে ধারা ২৩৭ এর বিধান অনুসারে সকল শুল্ক, কর অথবা অন্যান্য পাওনা প্রয়োজনীয় কর্তনের পর বিক্রয়লব্ধ অবশিষ্ট অর্থ মালিককে ফেরত প্রদান করা হইবে।
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