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
                    দশম অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    কাস্টমস স্টেশনে যানবাহন সংশ্লিষ্ট সাধারণ বিধানাবলি
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৬৩। প্রবেশ, ইত্যাদির ক্ষমতা---</span> (১) ধারা ৬২ এর অধীন নিযুক্ত প্রত্যেক কর্মকর্তার যানবাহনের প্রতিটি অংশে প্রবেশের অধিকার থাকিবে এবং তিনি-
                </p>

                <p className="mb-4 text-sm">
                  (ক) উক্ত যানবাহন হইতে খালাসের পূর্বে যে কোনো পণ্য চিহ্নযুক্ত করাইতে পারিবেন;
                </p>
                
                <p className="mb-4 text-sm">
                  (খ) যানবাহনে পরিবহনকৃত কোনো পণ্য বা কোনো স্থান বা কন্টেইনার, যাহাতে পণ্য পরিবহন করা হয়, তাহা তালাবদ্ধ, সিলকৃত, চিহ্নযুক্ত অথবা অন্যভাবে নিরাপদ করিতে পারিবেন; অথবা
                </p>

                <p className="mb-4 text-sm">
                  (গ) ডেকের ফাঁক অথবা খোলের প্রবেশপথ দৃঢ়ভাবে আবদ্ধ (fasten) করিতে পারিবেন।
                </p>

                <p className="mb-4 text-sm">
                  (২) যদি সংশ্লিষ্ট যানবাহনে কোনো বাক্স, স্থান বা বন্ধ পাত্র তালাবদ্ধ থাকে এবং উহার চাবি প্রদান করিতে অস্বীকার করা হয়, তাহা হইলে উক্ত কর্মকর্তা বিষয়টি যথাযথ কর্মকর্তাকে অবহিত করিবেন, যিনি তৎপ্রেক্ষিতে যানবাহনে অবস্থানকারী কর্মকর্তা বা তাহার অধীনস্থ অন্য কোনো কর্মকর্তাকে উহা তল্লাশি করিবার লিখিত আদেশ প্রদান করিতে পারিবেন।
                </p>

                <p className="mb-4 text-sm">
                  (৩) উপ- ধারা (২) এর অধীন প্রাপ্ত আদেশে ক্ষমতাপ্রাপ্ত কর্মকর্তা আদেশটি উপস্থাপন করিয়া উক্ত বাক্স, স্থান বা বন্ধ পাত্র তাহার সম্মুখে খুলিবার নির্দেশ প্রদান করিতে পারিবেন এবং তাহার নির্দেশ মতে উহা খোলা না হইলে তিনি উহা ভাঙ্গিয়া খুলিতে পারিবেন।
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